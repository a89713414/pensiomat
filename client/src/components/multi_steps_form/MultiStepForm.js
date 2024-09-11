/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import MultiStepProgressBar from "./MultiStepProgressBar";
import config from "./formConfig.json";
import { createNotification } from "../notifay/Notify";

const MasterForm = ({ contactId }) => {
  const { steps } = config;
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    legal_status: "",
    employment_duration: "",
    withdrawal_history: "",
  });
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setIsNextDisabled(false); // Enable Next button once an option is selected
  };

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const data = {
      contactId: contactId,
      surveyData: formData,
    };

    try {
      const response = await axios.post(
        "https://www.pensiomat.com/api/contact/survey",
        data
      );

      if (response?.status === 200) {
        createNotification("success");
      }
    } catch (error) {
      console.error(error);
      createNotification("error");
    } finally {
      setFormData({
        legal_status: "",
        employment_duration: "",
        withdrawal_history: "",
      });
      setCurrentStep(1);
      setIsNextDisabled(true); // Disable Next button after submission
    }
  });

  const handleNext = () => {
    const currentFieldName = steps[currentStep - 1].fields[0]?.name;
    if (formData[currentFieldName]) {
      setCurrentStep((prev) =>
        prev >= steps.length ? steps.length : prev + 1
      );
      setIsNextDisabled(!formData[steps[currentStep].fields[0]?.name]); // Check if the next step has an option selected
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => (prev <= 1 ? 1 : prev - 1));
    const previousFieldName = steps[currentStep - 2]?.fields[0]?.name;
    if (previousFieldName) {
      setIsNextDisabled(!formData[previousFieldName]); // Check if the previous step had an option selected
    }
  };

  return (
    <div className="container mt-5">
      <form>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              <MultiStepProgressBar currentStep={currentStep} />
            </h5>
            {steps.map(
              (step) =>
                step.id === currentStep && (
                  <div key={step.id}>
                    <p>{step.title && step.title}</p>
                    {step.fields.map((field) => (
                      <div className="form-group" key={field.name}>
                        <label htmlFor={field.name}>{field.label}</label>
                        {field.options.map((option) => (
                          <div className="form-check" key={option}>
                            <input
                              type="radio"
                              className="form-check-input"
                              id={option}
                              name={field.name}
                              value={option}
                              checked={formData[field.name] === option}
                              onChange={handleChange}
                              required
                            />
                            <label
                              className="form-check-label pr-4"
                              htmlFor={option}
                            >
                              {option}
                            </label>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )
            )}
          </div>
          <div className="card-footer">
            {currentStep !== 1 && (
              <button
                className="btn btn-secondary float-left"
                type="button"
                onClick={handlePrevious}
              >
                קודם
              </button>
            )}
            {currentStep < steps.length && (
              <button
                className="btn btn-primary float-right"
                type="button"
                onClick={handleNext}
                disabled={isNextDisabled} // Disable Next button if no option is selected
              >
                הבא
              </button>
            )}
            {currentStep === steps.length && (
              <button
                className="btn btn-primary float-right"
                type="submit"
                data-dismiss="modal"
                onClick={handleSubmit}
              >
                שלח
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default MasterForm;
