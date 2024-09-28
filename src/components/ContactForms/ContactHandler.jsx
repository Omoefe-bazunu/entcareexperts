import { redirect } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { dbase } from "../Firebase";

export const contactHandle = async ({ request }) => {
  const data = await request.formData();
  const messageInfo = {
    name: data.get("name"),
    info: data.get("contact"),
    message: data.get("message"),
  };

  const form = document.getElementById("contact");
  form.reset();

  try {
    const colRef = collection(dbase, "messages");
    await addDoc(colRef, {
      info: messageInfo.info,
      message: messageInfo.message,
      name: messageInfo.name,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    alert(error.message);
  }

  return redirect("/");
};
