import React from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import "./MultiStepProgressBar.css";

const MultiStepProgressBar = ({ currentStep }) => {
  const stepPercentage = ((currentStep - 1) / 3) * 100; // Adjust based on the number of steps

  return (
    <ProgressBar percent={stepPercentage}>
      <Step>
        {({ accomplished, index }) => (
          <div className={`indexedStep ${accomplished ? "accomplished" : ""}`}>
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div className={`indexedStep ${accomplished ? "accomplished" : ""}`}>
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div className={`indexedStep ${accomplished ? "accomplished" : ""}`}>
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div className={`indexedStep ${accomplished ? "accomplished" : ""}`}>
            {index + 1}
          </div>
        )}
      </Step>
    </ProgressBar>
  );
};

export default MultiStepProgressBar;
