import React, {useState} from "react"

import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography
} from "@material-ui/core"

const getSteps = () => ['Enter your recipe url', 'Clean up the ingredients', 'Use in your lists']

const getStepContent = (step) =>{
  switch(step){
    case 0:
      return "First step"
    case 1:
      return "Second step"
    case 2:
      return "Third step"
    default:
      return "Unknown step"
  }
}

const VerticalLinearStepper = () => {
  const [activeStep, setActiveStep] = useState(0)
  const steps = getSteps()

  const handleNext = () => setActiveStep((prevActiveStep)=>prevActiveStep+1)
  const handleBack = () => setActiveStep((prevActiveStep)=>prevActiveStep-1)

  return (
    <Stepper activeStep={activeStep} orientation="vertical">
      {steps.map((label, index)=>{
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
          <StepContent>
            <Typography>{getStepContent(index)}</Typography>
          </StepContent>
        </Step>
      })}
    </Stepper>
  )
}
