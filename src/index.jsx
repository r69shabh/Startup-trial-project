import React from "react";
import ReactDOMClient from "react-dom/client";
import { Startup } from "./screens/Startup";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Startup />);
