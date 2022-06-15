import React, { useState, useEffect } from 'react';
import { Stepper, Step, StepButton, Button, Snackbar, Alert, Grow, Box } from '@mui/material';
import { RestartAlt, ArrowBack, ArrowForward } from '@mui/icons-material';
import StepperContent from "../StepperContent/StepperContent";
import Score from "../Score/Score";
import './Calculator.css';


export default function Calculator(props) {
    var cvss = require('cvss');
    const steps = [
        "Attack Vector", "Attack Complexity", "Privileges Required", "User Interaction",
        "Scope", "Confidentiality Impact", "Integrity Impact", "Availability Impact"
    ];
    const [activeStep, setActiveStep] = useState(0);
    const [activeSnackbar, setActiveSnackbar] = useState(false);
    const [showScore, setShowScore] = useState(false);
    const [activeGrow, setActiveGrow] = useState(true);
    const [messageSnackbar, setMessageSnackbar] = useState("");
    const [calculatorData, setCalculatorData] = useState(
        [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
        ]
    );

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (index) => {
        setActiveStep(index);
    };

    const handleChange = (event, value) => {
        setCalculatorData(prevCalculatorData => {
            let tempArr = [...prevCalculatorData];
            tempArr[activeStep] = value;
            return tempArr;
        });
        value ? setMessageSnackbar(`${value} option selected`) : setMessageSnackbar(`Selected option discarded`);
        setActiveSnackbar(true)
    };

    const snackHandleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setActiveSnackbar(false);
    };

    const handleReset = () => {
        setActiveStep(0);
        setActiveGrow(false);
        setTimeout(() => {
            setCalculatorData([null, null, null, null, null, null, null, null]);
            setActiveGrow(true);
            setShowScore(false);
        }, 1000);
    }

    useEffect(() => {
        let isSelectionComplete = true;
        for (let calculatorElement of calculatorData) {
            if (!calculatorElement) {
                isSelectionComplete = false;
                break;
            }
        }
        if (isSelectionComplete) {
            setActiveGrow(false);
            //props.setScore(cvss.getScore(`CVSS:3.0/${calculatorData.join("/")}`))
            setTimeout(() => {
                setActiveGrow(true);
                setShowScore(true);
            }, 1000);
        }
    }, [calculatorData]);

    return (
        <>
            <Grow in={activeGrow} timeout={1000}>
                {
                    showScore ? (
                        <Box className="calculator--container">
                            <Score score={cvss.getScore(`CVSS:3.0/${calculatorData.join("/")}`)} />
                            <Button
                                className="stepper--reset--button"
                                color="warning"
                                onClick={() => handleReset()}
                                startIcon={<RestartAlt />}>
                                Reset
                            </Button>
                        </Box>
                    )
                        : (
                            <Box className="calculator--container">
                                <Stepper nonLinear alternativeLabel activeStep={activeStep}>
                                    {steps.map((label, index) => (
                                        <Step key={label} completed={Boolean(calculatorData[index])} >
                                            <StepButton
                                                className="stepper--top--buttons"
                                                onClick={() => handleStep(index)}>
                                                {label}
                                            </StepButton>
                                        </Step>
                                    ))}
                                </Stepper>
                                <div className="stepper--content">
                                    <StepperContent
                                        handleChange={handleChange}
                                        activeStep={activeStep}
                                        value={calculatorData[activeStep]}
                                    />
                                </div>
                                <div className='stepper--button--group'>
                                    <Button
                                        color="warning"
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        startIcon={<ArrowBack />}>
                                        Back
                                    </Button>
                                    <Button
                                        color="warning"
                                        disabled={activeStep === 7}
                                        onClick={handleNext}
                                        endIcon={<ArrowForward />}>
                                        Next
                                    </Button>
                                </div>
                            </Box>
                        )
                }
            </Grow>
            <Snackbar open={activeSnackbar} autoHideDuration={4000} onClose={snackHandleClose}>
                <Alert onClose={snackHandleClose} >
                    {messageSnackbar}
                </Alert>
            </Snackbar>
        </>
    );

}
