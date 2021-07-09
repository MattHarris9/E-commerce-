import React from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

import FormInput from './CustomTextField';

const AddressForm = () => {
    const methods = useForm();
    
    
    return (
        <React.Fragment>
          <Typography varient="h6" gutterBottom>Shipping Address</Typography>   
          <FormProvider {...methods}>
                <form onSumbmit=''>
                    <Grid container spacing={3}>
                        <FormInput  required name="firstName" label ='First name' />
                    </Grid>
                </form>
          </FormProvider>
        </React.Fragment>
    )
}

export default AddressForm;
