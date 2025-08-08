import {
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, dbase } from "../Firebase";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTrash,
  FaEdit,
  FaChevronDown,
  FaChevronUp,
  FaSave,
} from "react-icons/fa";

export const DashboardData = () => {
  const [appointments, setAppointments] = useState([]);
  const [messages, setMessages] = useState([]);
  const [User, setUser] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const [appointmentsExpanded, setAppointmentsExpanded] = useState(true);
  const [messagesExpanded, setMessagesExpanded] = useState(true);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const toggleEdit = (item) => {
    setEditingId(item.id);
    setEditForm(item);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({});
  };

  const handleEditChange = (field, value) => {
    setEditForm((prev) => ({ ...prev, [field]: value }));
  };

  const saveEdit = async () => {
    if (!editingId) return;
    try {
      const docRef = doc(dbase, "appointments", editingId);
      await updateDoc(docRef, editForm);
      setEditingId(null);
      setEditForm({});
    } catch (error) {
      alert("Failed to save changes: " + error.message);
    }
  };

  const signout = () => {
    signOut(auth);
    window.location.href = "/";
  };

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    if (!User) return;

    const appQ = query(
      collection(dbase, "appointments"),
      orderBy("createdAt", "desc")
    );
    const unsubscribeApps = onSnapshot(appQ, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        formattedDate: formatDate(doc.data().createdAt?.toDate()),
      }));
      setAppointments(data);
    });

    const msgQ = query(
      collection(dbase, "messages"),
      orderBy("createdAt", "desc")
    );
    const unsubscribeMsgs = onSnapshot(msgQ, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        formattedDate: formatDate(doc.data().createdAt?.toDate()),
      }));
      setMessages(data);
    });

    return () => {
      unsubscribeApps();
      unsubscribeMsgs();
    };
  }, [User]);

  const formatDate = (date) => {
    if (!date) return "N/A";
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const handleDelete = async (collectionName, id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    try {
      await deleteDoc(doc(dbase, collectionName, id));
    } catch (error) {
      alert("Delete failed: " + error.message);
    }
  };

  const renderList = (items, collectionName) =>
    items.map((item) => {
      const isExpanded = expandedId === item.id;
      const isEditing = editingId === item.id;

      return (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="bg-white shadow rounded-lg p-4 mb-4 border"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">{item.formattedDate}</p>
              <p className="font-semibold">{item.name || "No Name"}</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => toggleExpand(item.id)}
                className="text-gray-500 hover:text-blue-500"
                aria-label={isExpanded ? "Collapse details" : "Expand details"}
              >
                {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              <button
                onClick={() => toggleEdit(item)}
                className="text-gray-500 hover:text-green-500"
                aria-label="Edit item"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => handleDelete(collectionName, item.id)}
                className="text-gray-500 hover:text-red-500"
                aria-label="Delete item"
              >
                <FaTrash />
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="mt-3 text-sm text-gray-700 space-y-2"
              >
                {isEditing ? (
                  <div className="space-y-2">
                    {Object.keys(item).map((field) => {
                      if (["id", "formattedDate", "createdAt"].includes(field))
                        return null;
                      return (
                        <input
                          key={field}
                          className="w-full border p-2 rounded"
                          value={editForm[field] ?? ""}
                          onChange={(e) =>
                            handleEditChange(field, e.target.value)
                          }
                        />
                      );
                    })}
                    <div className="flex gap-2">
                      <button
                        onClick={saveEdit}
                        className="flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded"
                      >
                        <FaSave /> Save
                      </button>
                      <button
                        onClick={cancelEdit}
                        className="bg-gray-300 px-3 py-1 rounded"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  Object.keys(item).map((field) => {
                    if (["id", "formattedDate", "createdAt"].includes(field))
                      return null;
                    return (
                      <p key={field}>
                        <span className="font-semibold capitalize">
                          {field}:
                        </span>{" "}
                        {item[field]}
                      </p>
                    );
                  })
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      );
    });

  return (
    <div className="w-full bg-gray-100 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/" className="text-blue-600 underline text-sm">
          Return to the Home Page
        </Link>

        {/* Appointments Section */}
        <div
          className="flex justify-between items-center mt-6 mb-4 cursor-pointer"
          onClick={() => setAppointmentsExpanded(!appointmentsExpanded)}
        >
          <h1 className="text-2xl font-bold text-gray-800">Appointments</h1>
          {appointmentsExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        <AnimatePresence>
          {appointmentsExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
            >
              {renderList(appointments, "appointments")}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Messages Section */}
        <div
          className="flex justify-between items-center mt-10 mb-4 cursor-pointer"
          onClick={() => setMessagesExpanded(!messagesExpanded)}
        >
          <h1 className="text-2xl font-bold text-gray-800">Messages</h1>
          {messagesExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        <AnimatePresence>
          {messagesExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
            >
              {renderList(messages, "messages")}
            </motion.div>
          )}
        </AnimatePresence>

        {User && (
          <button
            onClick={signout}
            className="mt-10 bg-red-500 text-white px-6 py-2 rounded shadow hover:bg-red-600"
          >
            SIGN OUT
          </button>
        )}
      </div>
    </div>
  );
};
