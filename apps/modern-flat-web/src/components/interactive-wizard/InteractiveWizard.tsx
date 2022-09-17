import React, {useState} from 'react';
import {InteractiveWizardProps} from './InteractiveWizard.types';

export function InteractiveWizard({ steps, onQuit, onFinish }: InteractiveWizardProps) {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = steps[activeStep]!;

  const CAN_GO_BACK = activeStep >= 0;

  const goBack = () => {
    if (!CAN_GO_BACK) {
      return;
    }
    setActiveStep(_ => _ -1);
  }

  const CAN_GO_FORWARD = activeStep <= steps.length

  const goForward = () => {
    if (!CAN_GO_FORWARD) {
      return;
    }
    setActiveStep(_ => _ + 1);
  }

  console.log(activeStep, steps);

  return (
    <div className="content-box" id="step-1">
      <div className="title-box">
        <div className="title">{steps[activeStep].label}</div>
        <div className="steps">{activeStep + 1} / {steps.length}</div>
      </div>
      <div className="png20">
        <div className="row">
          <div className="col-12">
            {steps[activeStep].view}
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            {
              activeStep === 0
                ? <button className="btn red" onClick={onQuit}>Quit</button>
                : <button className="btn red" onClick={goBack} disabled={!CAN_GO_BACK}>Back</button>
            }
          </div>
          <div className="col-6" style={{textAlign: 'right'}}>
            {
              (activeStep + 1) === steps.length
                ? <button className="btn green" onClick={onFinish}>Finish</button>
                : <button className="btn green" onClick={goForward} disabled={!CAN_GO_FORWARD}>Next</button>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
