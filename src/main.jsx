import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import RootLayout from "./layouts/RootLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import FeaturesPage from "./pages/FeaturesPage.jsx";
import PricingPage from "./pages/PricingPage.jsx";
import FAQPage from "./pages/FAQPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "features", element: <FeaturesPage /> },
        { path: "pricing", element: <PricingPage /> },
        { path: "faq", element: <FAQPage /> },
        { path: "contact", element: <ContactPage /> },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
