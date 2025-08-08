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
import { DashboardData } from "./components/home/Appointments";
import Payment from "./components/Appointment/Payment";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/AppointmentForm" element={<AppointmentForm />} />
      <Route path="/AdminLogin" element={<AdminLogin />} />
      <Route path="/admin" element={<DashboardData />} />
      <Route path="/Payment" element={<Payment />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
