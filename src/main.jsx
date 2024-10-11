import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Features from "./Components/Features";
import Team from "./Components/Team";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="features" element={<Features />} />
      <Route path="testimonials" element={<Testimonials />} />
      <Route path="team" element={<Team />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
