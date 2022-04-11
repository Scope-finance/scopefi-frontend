import ReactDOM from "react-dom";
import { App } from "./App";
import "./index.css";
import Providers from "./Providers";

ReactDOM.render(
  <Providers>
    <App />
  </Providers>,
  document.getElementById("root")
);
