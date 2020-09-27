import React from "react";
import ReactDOM from "react-dom";
import UpPage from "./UpPage";
import MiddlePage from "./MiddlePage";

import jquery from "jquery";
import bootstrap from "bootstrap";
//import Jumbotron from "react-bootstrap/Jumbotron";
//import Toast from "react-bootstrap/Toast";
//import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";

function app() {
  return (
    <div>
      <UpPage />
      <MiddlePage />
    </div>
  );
}

export default app;
