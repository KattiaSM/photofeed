//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";
import { Profile } from "./component/profile.js";
import { Prueba } from "./component/prueba.js";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
ReactDOM.render(<Profile />, document.querySelector("#app"));
ReactDOM.render(<Prueba />, document.querySelector("#app"));
