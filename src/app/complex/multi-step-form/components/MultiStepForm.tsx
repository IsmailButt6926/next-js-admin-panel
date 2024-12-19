"use client"
import React, { useState } from "react";
import StepA from "./StepA";
import StepB from "./StepB";
import StepC from "./StepC";
import StepD from "./StepD";
import StepFinal from "./StepFinal";

type Props = {
  showStepNumber: boolean;
};

const initialFormData = {
  firstName: "",
  lastName: "",
  businessName: "",
  businessCity: "",
  businessWebsite: "",
  businessEmail: "",
  incomePerMonth: 0,
  taxPercentage: 0,
  agreeToTerms: false,
};

const stepsArray = ["A", "B", "C", "D"];

const MultiStepForm = (props: Props) => {
  const { showStepNumber } = props;

  const [step, setStep] = useState("A")
  const [formData, setFormData] = useState(initialFormData)

  //we need a method to go to the next step
  const handleNextStep = () => {
    if(step === "A") setStep("B")
    else if (step === "B") setStep("C")
    else if (step === "C") setStep("D")
  }

  //we need a method to go the pervious step
  const handlePreviousStep = () =>{
    if(step === "D") setStep("C")
      else if (step === "C") setStep("B")
    else if (step === "B") setStep("A")
  }

  //we need a method to update formData
  const handleInputChange = (event:any ) => {
    const fieldName = event.target.name
    let fieldValue;
    if(fieldName === "agreeToTerms") {
      fieldValue = event.target.checked
    }else {
      fieldValue = event.target.value
    }

    setFormData({
      ...formData,
      [fieldName] : fieldValue
    })

  }

  //we need a method to do final operation
  const handleSubmitFormData  = () => {
    if(!formData?.agreeToTerms){
      alert("Error!!! You must agree to Terms of Services!!!")
    }else{
      setStep("Final")
    }
  }

  //section for render StepNumbers
  const renderTopStepNumbers  = () => {
    if(!showStepNumber || step === "Final" ) {
      return null
    }
    return (
      <section className="mt-2 mb-4 flex justify-between">
        {
          stepsArray?.map((item) => (
            <div 
            key={item}
            className={`w-8 h-8 flex justify-center items-center border-2 border-gray-600 rounded-full cursor-pointer ${item === step ? "bg-blue-500" : ""}`}
            onClick={() => setStep(item)}
            >
              
              {item}
            </div>
          ) )
        }

      </section>
    )
  }
  return <div className="w-[600px] max-w-full px-6 py-1 rounded-lg border-2 border-dotted border-sky-300">
    {renderTopStepNumbers()}

    {/* Render Steps */}
    {step === "A" ? <StepA 
    formData={formData}
    handleInputChange={handleInputChange}
    handleNextStep={handleNextStep}
    /> : null}
    {step === "B" ? <StepB 
     formData={formData}
     handleInputChange={handleInputChange}
     handlePreviousStep={handlePreviousStep}
     handleNextStep={handleNextStep}
    /> : null}
    {step === "C" ? <StepC
        formData={formData}
        handleInputChange={handleInputChange}
        handlePreviousStep={handlePreviousStep}
        handleNextStep={handleNextStep}
    /> : null}
    {step === "D" ? <StepD
        formData={formData}
        handleInputChange={handleInputChange}
        handlePreviousStep={handlePreviousStep}
        handleSubmitFormData={handleSubmitFormData}
    /> : null}
    {step === "Final" ? <StepFinal/> : null}


  </div>;
};

export default MultiStepForm;
