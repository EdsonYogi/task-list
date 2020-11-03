import React from "react";
import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faPlus,
  faCheck,
  faTimes,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

import Main from "./pages/main";

library.add(fab, faPlus, faCheck, faTimes, faPen);

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
