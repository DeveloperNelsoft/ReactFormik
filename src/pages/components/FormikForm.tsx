
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
import Select from "react-select";


interface FormValues {
    fullName: string;
    address: string;
    phone: string;
    urlField: string;
    email: string;
    password: string;
    initialSize: string;
    rate: string;
    topicSelect: string;
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
  topicSelect?: string;

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
    const optionsValues = ['Food', 'water'];

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
                                                                              <Label>topics</Label>
                                                                              {/* <Input
                                                                                  width={100}
                                                                                  type="text"
                                                                                  name="password"
                                                                                  onChange={handleChange}
                                                                                  onBlur={handleBlur}
                                                                                  value={values.password }
                                                                              /> */}
                                                                                   <select
                                                                                      id="topicSelect"
                                                                                      name="topicSelect"
                                                                                      onChange={handleChange}
                                                                                      onBlur={handleBlur}
                                                                                      style={{height:'50px', width:'180px',
                                                                                            color:'blue',
                                                                                            border:'solid 2px grey',
                                                                                            backgroundColor: 'white',
                                                                                        }}
                                                                                    >
                                                                                          <option value="0"></option>
                                                                                          <option value="1">QA Tester</option>
                                                                                          <option value="2">Developer</option>
                                                                                    </select>
                                                                              <Label  style={{ color: 'red' }}>{errors.topicSelect }</Label>
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

  const phoneRegEx =  /^(\+56)\D*([2-9])(\d{4}) (\d{4})$/;
  const initialSizeFunct = 'if (value.length > 5) { return true; } else { return false; } ';
  const initialSizeFunctMessage = 'minimum 5 digits';
  const addressFunct = 'if (value.length > 15) { return false; } else { return true; } ';
  const addressFunctMessage = 'max 15 characters';
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
      topicSelect:         props.topicSelect || '',

    }),

    validationSchema: Yup.object().shape({

      fullName:Yup.string().required("fullName is required"),

      address:Yup.string().required("address is required")
            .test("OK", addressFunctMessage, value => {
              if(value !== undefined) {
                const result = new Function('value', addressFunct);
                return result(value);
              }
          }),
      // phone:Yup.string().required("phone is required"),
      phone:Yup.string().matches(phoneRegEx, 'valid +56 9XXXX XXXX').required("phone is required"),

      urlField:Yup.string().url('url invalid').required("url is required"),
      email: Yup.string().email("Email not valid").required("Email is required"),

      // topicSelect: Yup.string().oneOf(['1', '2']).required("topic is required"),
      // topicSelect: Yup.string().oneOf([ '2'],'only for developer').required("topic is required"),

      topicSelect: Yup.string().notOneOf(['0', '1'],'only for Developer').required("topic is required"),

      //topicSelect:  Yup.string().notOneOf([Yup.ref('topicSelect'), null], 'Flavors must not match.'),


      // rate: Yup.string().required("rate is required"),
      rate: Yup.number().typeError('only Number').required("rate is required"),
      // initialSize: Yup.string().required("Size is required"),
      initialSize: Yup.string().required("Size is required")
          .test("OK", initialSizeFunctMessage, value => {
            if(value !== undefined) {
              const result = new Function('value', initialSizeFunct);
              return result(value);
            }
        }),
    }),

    // REPO : https://github.com/DeveloperNelsoft/Class4
    handleSubmit( { email, password, rate }: FormValues,{ props, setSubmitting, setErrors }) {
      alert('Ha pasado las validaciones de los campos de entrada, se actualizara ratio de esta movie.');
       props.onSetRateValueFromFormik(rate);
       props.onCloseRequest();
    }


})(InnerForm);

export default FormikForm;

