import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import HomePage from "./components/home/HomePage";

const router = createBrowserRouter([
	{
		path: "*",
		element: <Home />,
		children: [
			{
				path: "home/:projectName",
				element: <HomePage />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "experience",
				element: <Experience/>,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
