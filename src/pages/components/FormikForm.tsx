
import React, {Component} from 'react'
import {
  CardHeader,
  Card,
  CardContent,
    Modal,
    Fade,
    Backdrop,
    Button,
    Grid,
    Box,

}  from "@material-ui/core";
import {
  Save,
  Cancel,


} from '@material-ui/icons';
import { withFormik, FormikProps } from "formik";
import * as Yup from "yup";

import Wrapper from "./styledComponentsFormik/Wrapper";
import InputWrapper from "./styledComponentsFormik/InputWrapper";
import Input from "./styledComponentsFormik/Input";
import Label from "./styledComponentsFormik/Label";

interface FormValues {
    email: string;
    password: string;
    initialSize: string;
}

interface OtherProps {
    title?: string;
}

interface MyFormProps {
    initialEmail?: string;
    initialPassword?: string;
    initialSize?: string;
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        title
    } = props;



    return (
      <Modal
                // aria-labelledby="transition-modal-title"
                // aria-describedby="transition-modal-description"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}
                open={true}
                // onClose={this.closeModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={true}>
                <div
                style={{height:'600px', width:'800px', textAlign:'center',
                        color:'white',
                        border:'solid 5px white',
                        paddingTop: '10px',
                        paddingRight: '10px',
                        paddingBottom: '10px',
                        paddingLeft: '10px',
                        backgroundColor: 'white',
                        overflow: 'scroll',
                      }}
                  >

                         <Card>

                                              <CardContent>
                                                            <Wrapper>
                                                                 <h1>{'Class4: Formik + Type script'}</h1>
                                                                 <form onSubmit={handleSubmit}>
                                                                     <InputWrapper>
                                                                        <Label>Email</Label>
                                                                        <Input
                                                                            width={50}
                                                                            // casod e prueba type = email.
                                                                            type="text"
                                                                            name="email"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.email}
                                                                        />
                                                                        <Label  style={{ color: 'red' }}>{errors.email }</Label>
                                                                    </InputWrapper>
                                                                    <InputWrapper>
                                                                        <Label>Password</Label>
                                                                        <Input
                                                                            width={50}
                                                                            type="text"
                                                                            name="password"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.password }
                                                                        />
                                                                        <Label  style={{ color: 'red' }}>{errors.password }</Label>
                                                                    </InputWrapper>
                                                                    <InputWrapper>
                                                                        <Label>initialSize</Label>
                                                                        <Input
                                                                            width={50}
                                                                            type="text"
                                                                            name="initialSize"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.initialSize }
                                                                        />
                                                                        <Label  style={{ color: 'red' }}>{errors.initialSize }</Label>
                                                                    </InputWrapper>

                                                                    <Box
                                                                                  style={{height:'60px',
                                                                                    border:'solid 1px #ccc',
                                                                                    borderRadius: '5px',
                                                                                    padding: '10px',
                                                                                    margin: '10px 5px',
                                                                                    backgroundColor: 'white',
                                                                                    boxShadow: '0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23)',
                                                                                  }}>

                                                                                  <button
                                                                                      color="primary"  className='step-button'
                                                                                      type="submit"
                                                                                      disabled={
                                                                                        //  isSubmitting
                                                                                        // caso de prueba con solo isSubmitting
                                                                                           isSubmitting ||
                                                                                          !!(errors.email && touched.email) ||
                                                                                          !!(errors.password && touched.password) ||
                                                                                            !!(errors.initialSize && touched.initialSize)
                                                                                      }
                                                                                      >
                                                                                        <Save /> Sign In
                                                                                  </button>
                                                                          </Box>
                                                                </form>
                                                            </Wrapper>
                                            </CardContent>
                             </Card>

                  </div>
                </Fade>
              </Modal>


    );
};

const FormikForm = withFormik<MyFormProps, FormValues>({
    mapPropsToValues: props => ({
        email: props.initialEmail || '',
        password: props.initialPassword || '',
        initialSize: props.initialSize || '',
    }),

    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email("Email not valid")
            .required("Email is required"),
        password: Yup.string().required("Password is required"),
        initialSize: Yup.string().required("Size is required"),
    }),

    handleSubmit(
        { email, password }: FormValues,
        { props, setSubmitting, setErrors }
    ) {
        console.log(email, password);
    }
})(InnerForm);

export default FormikForm;

