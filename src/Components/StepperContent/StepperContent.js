import React from 'react';
import './StepperContent.css';
import StepperData from './StepperData'
import { ToggleButtonGroup, ToggleButton, Tooltip } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';


export default function StepperContent(props) {

    return (
        <>
            <h4>{StepperData[props.activeStep].title}</h4>
            <p>{StepperData[props.activeStep].description}</p>
            Please select your option:
            <br />
            <br />
            <ToggleButtonGroup
                color="primary"
                value={props.value}
                exclusive
                onChange={(event, value) => props.handleChange(event, value)}>
                {
                    StepperData[props.activeStep].toggleButtons.map(buttonData => {
                        return (
                            <ToggleButton value={buttonData.value} color="warning" key={buttonData.value}>
                                {buttonData.buttontext}
                                <Tooltip title={buttonData.tooltipText}>
                                    <InfoIcon />
                                </Tooltip>
                            </ToggleButton>
                        );
                    })
                }
            </ToggleButtonGroup>
        </>
    );
}
