import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/home/Layout";
import ErrorPage from "./components/home/ErrorPage";
import HomePage from "./components/home/HomePage";
import AppointmentForm from "./components/Appointment/AppointmentForm";
import { AdminLogin } from "./components/home/AdminLogin";
import { Messages } from "./components/home/Messages";
import { AppointmentHandle } from "./components/Appointment/AppointmentHandler";
import { contactHandle } from "./components/ContactForms/ContactHandler";
import { Appointments } from "./components/home/Appointments";
import Payment from "./components/Appointment/Payment";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} action={contactHandle} />
      <Route
        path="/AppointmentForm"
        element={<AppointmentForm />}
        action={AppointmentHandle}
      />
      <Route path="/AdminLogin" element={<AdminLogin />} />
      <Route path="/Messages" element={<Messages />} />
      <Route path="/Appointments" element={<Appointments />} />
      <Route path="/Payment" element={<Payment />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
