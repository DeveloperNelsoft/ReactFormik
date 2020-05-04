
import React, { useEffect, useRef, useCallback, KeyboardEvent} from "react";
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
  Close,


} from '@material-ui/icons';
import { withFormik, FormikProps } from "formik";
import * as Yup from "yup";

import Wrapper from "./styledComponentsFormik/Wrapper";
import InputWrapper from "./styledComponentsFormik/InputWrapper";
import Input from "./styledComponentsFormik/Input";
import Label from "./styledComponentsFormik/Label";

interface FormValues {
    fullName: string;
    address: string;
    phone: string;
    urlField: string;
    email: string;
    password: string;
    initialSize: string;
    rate: string;
}

interface OtherProps {
    title?: string;
    onCloseRequest: () => void;
    onSetRateValueFromFormik: (val:any) => void;
}

interface MyFormProps {
  fullNameInit?: string;
  addressInit?: string;
  phoneInit?: string;
  urlFieldInit?: string;
  emailInit?: string;
  passwordInit?: string;
  initialSizeInit?: string;
  rateInit?: string;
  onCloseRequest: () => void;
  onSetRateValueFromFormik: (val:any) => void;
}

// REPO : https://github.com/DeveloperNelsoft/Class4
const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        title,
        onCloseRequest,
        onSetRateValueFromFormik,
    } = props;

    const modal = useRef(null);

    // const handleOutsideClick = useCallback(
    //   (e: any) => {
    //     if (!isNil(modal)) {
    //       if (modal !== null) {
    //         // if (!modal.current.contains(e.target)) {
    //           onCloseRequest();
    //           document.removeEventListener("click", handleOutsideClick, false);
    //         // }
    //       }
    //     }
    //   },
    //   [onCloseRequest]
    // );

    useEffect(() => {
      // window.addEventListener("keyup", handleKeyUp, false);
      // document.addEventListener("click", handleOutsideClick, false);

      return () => {
        // window.removeEventListener("keyup", handleKeyUp, false);
        // document.removeEventListener("click", handleOutsideClick, false);
      };

    },);
    // }, [handleOutsideClick]);


    return (
      <Modal ref={modal}
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
                              <Grid container spacing={8} >
                                      < Grid item xs={10}>
                                            <h3>{'Class 4: Formik Form'}</h3>
                                      </Grid>
                                      < Grid item xs={2}>
                                          <button
                                              color="primary"  className='step-button'
                                               onClick={(e: any) => onCloseRequest()}
                                            >
                                                <Close />
                                          </button>
                                      </Grid>
                                </Grid>

                                              <CardContent>
                                                            <Wrapper>
                                                                 <form onSubmit={handleSubmit}>
                                                                   <Grid container spacing={3} >
                                                                          < Grid item xs={12}>
                                                                              <Label>fullName</Label>
                                                                              <Input
                                                                                  width={100}
                                                                                  // casod e prueba type = email.
                                                                                  type="text"
                                                                                  name="fullName"
                                                                                  onChange={handleChange}
                                                                                  onBlur={handleBlur}
                                                                                  value={values.fullName}
                                                                              />
                                                                                <Label  style={{ color: 'red' }}>{errors.fullName }</Label>
                                                                          </Grid>
                                                                          < Grid item xs={12}>
                                                                              <Label>address</Label>
                                                                              <Input
                                                                                  width={100}
                                                                                  // casod e prueba type = email.
                                                                                  type="text"
                                                                                  name="address"
                                                                                  onChange={handleChange}
                                                                                  onBlur={handleBlur}
                                                                                  value={values.address}
                                                                              />
                                                                                <Label  style={{ color: 'red' }}>{errors.address }</Label>
                                                                          </Grid>
                                                                          < Grid item xs={4}>
                                                                              <Label>phone</Label>
                                                                              <Input
                                                                                  width={100}
                                                                                  // casod e prueba type = email.
                                                                                  type="text"
                                                                                  name="phone"
                                                                                  onChange={handleChange}
                                                                                  onBlur={handleBlur}
                                                                                  value={values.phone}
                                                                              />
                                                                                <Label  style={{ color: 'red' }}>{errors.phone }</Label>
                                                                          </Grid>
                                                                          < Grid item xs={4}>
                                                                              <Label>urlField</Label>
                                                                              <Input
                                                                                  width={100}
                                                                                  // casod e prueba type = email.
                                                                                  type="text"
                                                                                  name="urlField"
                                                                                  onChange={handleChange}
                                                                                  onBlur={handleBlur}
                                                                                  value={values.urlField}
                                                                              />
                                                                                <Label  style={{ color: 'red' }}>{errors.urlField }</Label>
                                                                          </Grid>
                                                                          < Grid item xs={4}>
                                                                              <Label>Email</Label>
                                                                              <Input
                                                                                  width={100}
                                                                                  // casod e prueba type = email.
                                                                                  type="text"
                                                                                  name="email"
                                                                                  onChange={handleChange}
                                                                                  onBlur={handleBlur}
                                                                                  value={values.email}
                                                                              />
                                                                                <Label  style={{ color: 'red' }}>{errors.email }</Label>
                                                                          </Grid>
                                                                          < Grid item xs={4}>
                                                                              <Label>Password</Label>
                                                                              <Input
                                                                                  width={100}
                                                                                  type="text"
                                                                                  name="password"
                                                                                  onChange={handleChange}
                                                                                  onBlur={handleBlur}
                                                                                  value={values.password }
                                                                              />
                                                                              <Label  style={{ color: 'red' }}>{errors.password }</Label>
                                                                          </Grid>
                                                                          < Grid item xs={4}>
                                                                                <Label>initialSize</Label>
                                                                                <Input
                                                                                    width={100}
                                                                                    type="text"
                                                                                    name="initialSize"
                                                                                    onChange={handleChange}
                                                                                    onBlur={handleBlur}
                                                                                    value={values.initialSize }
                                                                                />
                                                                                <Label  style={{ color: 'red' }}>{errors.initialSize }</Label>
                                                                          </Grid>
                                                                          < Grid item xs={4}>
                                                                                <Label>rate</Label>
                                                                                <Input
                                                                                    width={100}
                                                                                    type="text"
                                                                                    name="rate"
                                                                                    onChange={handleChange}
                                                                                    onBlur={handleBlur}
                                                                                    value={values.rate }
                                                                                />
                                                                                <Label  style={{ color: 'red' }}>{errors.rate }</Label>
                                                                          </Grid>
                                                                   </Grid>
                                                                  < Grid container spacing={3}>
                                                                          < Grid item xs={12}>
                                                                              <Box
                                                                                  style={{height:'50px',
                                                                                    width:'120px',
                                                                                    border:' 1px #ccc',
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
                                                                                            !!(errors.initialSize && touched.initialSize) ||
                                                                                            !!(errors.rate && touched.rate)
                                                                                      }
                                                                                      >
                                                                                        <Save /> Sign In
                                                                                  </button>


                                                                          </Box>
                                                                          </Grid>
                                                                  </Grid>
                                                                </form>
                                                            </Wrapper>
                                            </CardContent>
                             </Card>

                  </div>
                </Fade>
              </Modal>
    );
};


// REPO : https://github.com/DeveloperNelsoft/Class4
const FormikForm = withFormik<MyFormProps, FormValues>({

    mapPropsToValues: props => ({
      fullName:     props.fullNameInit || '',
      address:      props.addressInit || '',
      phone:        props.phoneInit || '',
      urlField:     props.urlFieldInit || '',
      email:        props.emailInit || '',
      password:     props.passwordInit || '',
      initialSize:  props.initialSizeInit || '',
      rate:         props.rateInit || '',

    }),

    validationSchema: Yup.object().shape({
      fullName:Yup.string().required("fullName is required"),
      address:Yup.string().required("address is required"),
      phone:Yup.string().required("phone is required"),
      urlField:Yup.string().required("urlField is required"),
        email: Yup.string()
            .email("Email not valid")
            .required("Email is required"),
        password: Yup.string().required("Password is required"),
        initialSize: Yup.string().required("Size is required"),
        // rate: Yup.string().required("rate is required"),
        rate: Yup.number().typeError('solo se aceptan numeros').required("rate is required"),
    }),

    // REPO : https://github.com/DeveloperNelsoft/Class4
    handleSubmit( { email, password, rate }: FormValues,{ props, setSubmitting, setErrors }) {
      alert('Ha pasado las validaciones de los campos de entrada, se actualizara ratio de esta movie.');
       props.onSetRateValueFromFormik(rate);
       props.onCloseRequest();
    }


})(InnerForm);

export default FormikForm;

