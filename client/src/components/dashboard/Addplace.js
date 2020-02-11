
import React, { useState } from "react";
import axios from "axios";
import Header from "./profileHeader";
import { Form } from "react-bootstrap";
import "../../css/style.css"


function submitForm(contentType, data, setResponse) {
  axios({
    url: "api/places/addplace",
    method: "POST",
    data: data,
    headers: {
      "Content-Type": contentType
    }
  })
    .then(response => {
      setResponse(response.data);
    })
    .catch(error => {
      setResponse("error");
    });
}

function Addplace() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [description, setdescription] = useState("");
  const [location, setlocation] = useState("");
  const [price, setprice] = useState("");

  function uploadWithFormData() {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("location", location);

    // formData.append("desc", desc);

    submitForm("multipart/form-data", formData, msg => console.log(msg));
    window.alert("Task posted");
  }

  return (
    <div className="overflow">
      <Header />
      <div className="row offset-3 ">
        <div className="col s3 m3 ">
          <Form className="mt-15">
            <Form.Group className="input-field col m8">
              <Form.Control
                type="text"
                value={title}
                onChange={e => {
                  setTitle(e.target.value);
                }}
              />
              <Form.Label>Title</Form.Label>
            </Form.Group>
            <Form.Group className="input-field col m8">
              <Form.Control
                type="text"
                value={price}
                onChange={e => {
                  setprice(e.target.value);
                }}
              />
              <Form.Label>Price</Form.Label>
            </Form.Group>
            <Form.Group className="input-field col m8">
              <Form.Control
                type="text"
                value={location}
                onChange={e => {
                  setlocation(e.target.value);
                }}
              />
              <Form.Label>Location</Form.Label>
            </Form.Group>

            <Form.Group className="col m8">
              <Form.Label style={{ fontSize: "16px", color: "black" }}>
                Description:
              </Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                value={description}
                onChange={e => setdescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="col m8">
              <Form.Label style={{ fontSize: "18px", color: "black" }}>
                Upload Image:
              </Form.Label>
              <Form.Control
                type="file"
                name="file"
                onChange={e => setFile(e.target.files[0])}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="col m8 center">
              <input
                type="button"
                value="Host a Place"
                onClick={uploadWithFormData}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                style={{
                  width: "500px",
                  height: "45px",
                  borderRadius: "20px",
                  letterSpacing: "1.5px",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "15px"
                }}
              />
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Addplace;