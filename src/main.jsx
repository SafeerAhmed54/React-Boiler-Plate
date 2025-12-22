<<<<<<< Updated upstream
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/main.scss'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
=======
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./styles/main.scss";
>>>>>>> Stashed changes

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
<<<<<<< Updated upstream
  </StrictMode>,
)
=======
  </StrictMode>
);
>>>>>>> Stashed changes
