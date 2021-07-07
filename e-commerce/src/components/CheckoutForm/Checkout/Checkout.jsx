import React, { useState } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';

import useStyles from './styles';

const steps = ['Shipping adress', 'Payment details'];

const Checkout = () => {
    const [activeStep, setActiveStep] = useState(0);
    const classes = useStyles();
    
    const Form = () => activeStep === 0
        ? <AddressForm />
        : <PaymentForm />

    return (
        <React.Fragment>
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography varient="h4" align="center">Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) =>(
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : <Form />}
                </Paper>
            </main>
            
        </React.Fragment>
    )
}

export default Checkout
