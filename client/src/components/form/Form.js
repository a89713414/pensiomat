/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
import { inputIconEmail, inputIconName, inputIconPhoneNumber } from "./Icons";
import { createNotification } from "../notifay/Notify";
import { Modal } from "../modal/Modal";
import { v4 as uuidv4 } from "uuid";

const Form = ({ formData, formRef, shortForm = false }) => {
  const { fullName, phoneNumber, idnumber, email } = formData;
  const [loading, setLoading] = useState(false);
  const [contactId, setContactId] = useState(null);
  const [formDataState, setFormDataState] = useState({
    name: "",
    phonenumber: "",
    idnumber: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDataState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const isSubmitDisabled = () => {
    return !formDataState.phonenumber.trim();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const { name, phonenumber, idnumber, email } = formDataState;
    const data = {
      id: uuidv4(),
      name: name,
      phone: phonenumber,
      idnumebr: idnumber,
      email: email,
      createdAt: new Date(),
      customerStatus: "new",
    };

    try {
      const response = await axios.post(
        "http://localhost:5001/api/contact",
        data
      );

      if (response?.status === 200) {
        const resContactId = response.data.id;

        setContactId(resContactId);
      }
    } catch (error) {
      console.error(error);
      createNotification("error");
    } finally {
      setLoading(false);
      setFormDataState({
        name: "",
        phonenumber: "",
        idnumber: "",
        email: "",
      });
    }
  };

  return (
    <div className="container" ref={formRef}>
      <div className="row">
        <div className="col-lg-7 mx-auto">
          <div
            className={`card card_wrapper mt-2 mx-auto p-4 ${
              shortForm ? "short_form_card_wrapper" : ""
            }`}
          >
            <div
              className={`card-body ${shortForm ? "short_form_card_body" : ""}`}
            >
              <div className="container">
                <form id="contact-form" role="form" onSubmit={handleSubmit}>
                  <div className="controls">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group InputBox">
                          <div className="input-group">
                            <input
                              id="form_name"
                              type="text"
                              name="name"
                              className="form-control"
                              value={formDataState.name}
                              placeholder={fullName.placeholder}
                              onChange={handleInputChange}
                            />
                            <div className="input-group-icon">
                              {inputIconName}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group InputBox">
                          <div className="input-group">
                            <input
                              id="form_phonenumber"
                              type="text"
                              name="phonenumber"
                              className="form-control"
                              value={formDataState.phonenumber}
                              placeholder={phoneNumber.placeholder}
                              required
                              onChange={handleInputChange}
                            />
                            <div className="input-group-icon">
                              {inputIconPhoneNumber}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group InputBox">
                          <div className="input-group">
                            <input
                              id="form_idnumber"
                              type="text"
                              name="idnumber"
                              className="form-control"
                              value={formDataState.idnumber}
                              placeholder={idnumber.placeholder}
                              onChange={handleInputChange}
                            />
                            <div className="input-group-icon">
                              {inputIconEmail}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group InputBox">
                          <div className="input-group">
                            <input
                              id="form_email"
                              type="text"
                              name="email"
                              className="form-control"
                              value={formDataState.email}
                              placeholder={email.placeholder}
                              onChange={handleInputChange}
                            />
                            <div className="input-group-icon">
                              {inputIconEmail}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 pt-3">
                      <button
                        className="btn btn-success btn-send pt-2 btn-block"
                        type="submit"
                        disabled={isSubmitDisabled() || loading}
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        {loading ? "שולח..." : "שלח"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal contactId={contactId} />
    </div>
  );
};

export default Form;
