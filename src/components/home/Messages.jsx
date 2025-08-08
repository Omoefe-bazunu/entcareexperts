import {
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, dbase } from "../Firebase";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";

export const Messages = () => {
  const [message, setMessages] = useState(null);
  const [User, setUser] = useState("");

  //   const User = auth.currentUser;

  const signout = () => {
    signOut(auth);
    window.location.href = "/";
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (User) {
      const fetchMessages = async () => {
        const q = query(
          collection(dbase, "messages"),
          orderBy("createdAt", "desc")
        );
        onSnapshot(q, async (snapshot) => {
          const messages = [];
          for (const doc of snapshot.docs) {
            const messageItem = { ...doc.data(), id: doc.id };
            messageItem.formattedDate = formatDate(
              messageItem.createdAt.toDate()
            );
            messages.push(messageItem);
          }
          setMessages(messages);
        });
      };

      fetchMessages();
    }
  }, [User]);

  // Helper function to format date
  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth();
    const monthName = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ][month];
    const year = date.getFullYear();
    return `${day} ${monthName}, ${year}`;
  };

  const handleDeletePost = async (msgId) => {
    const docRef = doc(dbase, "messages", msgId);
    deleteDoc(docRef)
      .then(() => {
        alert("Document deleted successfully!");
      })
      .catch((error) => {
        alert("Error deleting document: ", error);
      });
  };

  return (
    <div className="w-full h-fit border-t-2 border-zinc-200 pt-12">
      <div className="MessagesWrapper w-5/6 mx-auto h-fit gap-4">
        <div className="message-inner w-full h-fit rounded-md flex gap-3 flex-col">
          <div className="header W-full h-fit rounded-md flex flex-col justify-center items-center gap py-4 px-5 text-white font-bold text-2xl">
            <Link to="/">
              <p className=" text-tet underline text-center text-sm">
                Return to the Home Page
              </p>
            </Link>
            <p className="text-primary text-center mt-8">Messages</p>
          </div>
          {message &&
            message.map((message) => (
              <div
                key={message.id}
                className="messages w-full h-fit px-5 mb-5 py-4 bg-tet rounded-md text-white"
              >
                <h2 className=" text-wrap leading-2">{message.name}</h2>
                <div className="sender text-xs">{message.formattedDate} </div>
                <p className="  text-sm">{message.info}</p>
                <p className="postBody  whitespace-pre-wrap">
                  {message.message}
                </p>
                <button
                  className="w-fit px-8 py-1 mt-4 rounded bg-red-400"
                  onClick={() => handleDeletePost(message.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          {User ? (
            <button
              onClick={signout}
              id="SignBtn"
              className="Signout-Btn button bg-primary rounded py-4 px-12 mb-24 cursor-pointer self-center text-white w-fit text-nowrap mt-5"
            >
              SIGN OUT
            </button>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};
