import React from "react";
import ReactDOM from "react-dom";

import jquery from "jquery";
import bootstrap from "bootstrap";
//import Jumbotron from "react-bootstrap/Jumbotron";
//import Toast from "react-bootstrap/Toast";
//import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";

function UpImage() {
  return (
    <section className="container">
      <div>
        <h1 className="position-absolute text-light bg-dark">
          Now and One Sec
        </h1>
        <img
          className="img-fluid"
          src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt="OneDoc"
        />
      </div>
    </section>
  );
}

export default UpImage;
