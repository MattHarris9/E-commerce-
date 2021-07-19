import React from 'react';
import { InputLable, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

import FormInput from "./CustomTextField";

const AddressForm = () => {
    const methods = useForm();
    

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit=''>
                    <Grid container spacing={3}>
                        <FormInput required name="firstname" label="First Name" />
                        <FormInput required name="lastname" label="Last Name" />
                        <FormInput required name="address1" label="Address" />
                        <FormInput required name="email" label="Email" />
                        <FormInput required name="city" label="City" />
                        <FormInput required name="zip" label="Zip / Postal code" />
                    </Grid>
                </form>
            </FormProvider>
        </React.Fragment>
    )
}

export default AddressForm;
