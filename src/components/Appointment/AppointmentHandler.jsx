import { redirect } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { dbase } from "../Firebase";
import * as emailjs from "@emailjs/browser";

export const AppointmentHandle = async ({ request }) => {
  const data = await request.formData();
  const appointmentInfo = {
    name: data.get("name"),
    address: data.get("address"),
    number: data.get("number"),
    age: data.get("age"),
    sex: data.get("sex"),
    complaint: data.get("complaint"),
    location: data.get("location"),
  };

  const form = document.getElementById("appointment");
  form.reset();

  try {
    const colRef = collection(dbase, "appointments");
    const serviceID = "service_7epxkhh";
    const templateID = "template_9wdjryr";
    const publicKey = "cZC6HUxRjsMFR5npe";

    const templateParams = {
      name: appointmentInfo.name,
      address: appointmentInfo.address,
      number: appointmentInfo.number,
      age: appointmentInfo.age,
      sex: appointmentInfo.sex,
      complaint: appointmentInfo.complaint,
      location: appointmentInfo.location,
    };

    await emailjs.send(serviceID, templateID, templateParams, publicKey);
    await addDoc(colRef, {
      name: appointmentInfo.name,
      age: appointmentInfo.age,
      number: appointmentInfo.number,
      address: appointmentInfo.address,
      location: appointmentInfo.location,
      sex: appointmentInfo.sex,
      complaint: appointmentInfo.complaint,
      createdAt: serverTimestamp(),
    });

    alert("Submitted Successfully!");
  } catch (error) {
    alert(error.message);
  }

  return redirect("/Payment");
};
