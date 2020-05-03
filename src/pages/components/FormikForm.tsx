
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
import isNil from "lodash/isNil";

interface FormValues {
    email: string;
    password: string;
    initialSize: string;
}

interface OtherProps {
    title?: string;
    onCloseRequest: () => void;
}

interface MyFormProps {
    initialEmail?: string;
    initialPassword?: string;
    initialSize?: string;
    onCloseRequest: () => void;
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
    } = props;

    const modal = useRef(null);

    // const handleKeyUp = useCallback(
    //   (e: any) => {
    //     const keys = {
    //       27: () => {
    //         e.preventDefault();
    //         onCloseRequest();
    //         window.removeEventListener("keyup", handleKeyUp, false);
    //       }
    //     };

    //     if (keys[e.keyCode]) {
    //       keys[e.keyCode]();
    //     }
    //   },
    //   [onCloseRequest]
    // );

    const handleOutsideClick = useCallback(
      (e: any) => {
        if (!isNil(modal)) {
          if (modal !== null) {
            // if (!modal.current.contains(e.target)) {
              onCloseRequest();
              document.removeEventListener("click", handleOutsideClick, false);
            // }
          }
        }
      },
      [onCloseRequest]
    );

    useEffect(() => {
      // window.addEventListener("keyup", handleKeyUp, false);
      // document.addEventListener("click", handleOutsideClick, false);

      return () => {
        // window.removeEventListener("keyup", handleKeyUp, false);
        // document.removeEventListener("click", handleOutsideClick, false);
      };
    }, [handleOutsideClick]);


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
                style={{height:'700px', width:'700px', textAlign:'center',
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
                                                                   <Grid container spacing={5} >
                                                                          < Grid item xs={6}>
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
                                                                          < Grid item xs={6}>
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
                                                                          < Grid item xs={6}>
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
                                                                                            !!(errors.initialSize && touched.initialSize)
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

    // REPO : https://github.com/DeveloperNelsoft/Class4
    handleSubmit( { email, password }: FormValues,{ props, setSubmitting, setErrors }) {
       alert ('handleSubmit clicked.');
    }


})(InnerForm);

export default FormikForm;

