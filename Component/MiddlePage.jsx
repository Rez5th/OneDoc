import React from "react";
import ReactDOM from "react-dom";

import jquery from "jquery";
import bootstrap from "bootstrap";
//import Jumbotron from "react-bootstrap/Jumbotron";
//import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";

function MiddleImage() {
  return (
    <section className="container">
      <form>
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="customFile" />

          <label class="custom-file-label" for="customFile">
            Choose file
          </label>
        </div>
      </form>
    </section>
  );
}

export default MiddleImage;
