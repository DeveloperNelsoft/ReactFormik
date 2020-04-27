import React from 'react'
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
import { Form, Formik } from 'formik';
import Yup from '../../utils/yup';


export const FormikForm = (props:any) => {
  const {name, uri} = props;

  const initializeFormValues = (dynamicFieldsByIdWithProductName: any) => {
    let newFormFieldList = {};
    // eslint-disable-next-line array-callback-return
    // dynamicFieldsByIdWithProductName.map(field => {
    //   if(field.isRequired === true || this.FieldHasAnyValidation(field.validation) || field.inputType === 'NUMBER') {
    //     if(field.inputType !== 'GALLERY' || field.inputType !== 'MULTILIST' ||
    //       field.inputType !== 'MONEY' || field.inputType !== 'DATE' ){
    //         newFormFieldList[field.id] = '';
    //     }
    //   }
    // });
    return newFormFieldList;

  }

  const CreateDynamicSchema  = (dynamicFieldsByIdWithProductName: any) => {
    const requiredField = 'Required field';
    const validNumber = 'Must be a number';
    const phoneRegExp = /^(\+56)\D*([2-9])(\d{4}) (\d{4})$/
    const schema = dynamicFieldsByIdWithProductName.reduce((schema: any, field: any) => {
      switch (field.inputType) {
        // case 'GALLERY':
        //     return { ...schema, [field.id]: Yup.string().required(requiredField) };
        case 'COLOR':
            return field.isRequired === true ? { ...schema, [field.id]: Yup.string().required(requiredField) } : { ...schema, [field.id]: Yup.string() };
        case 'LIST':
            return field.isRequired === true ?  { ...schema, [field.id]: Yup.string().required(requiredField) } : { ...schema, [field.id]: Yup.string() };
        // case 'MULTILIST':
        //    return { ...schema, [field.id]: Yup.string().required(requiredField) };
        case 'TEXTAREA':
            return field.isRequired === true ?   { ...schema, [field.id]: Yup.string().required(requiredField) } : { ...schema, [field.id]: Yup.string() };
        case 'TEXT':
            switch (field.validation) {
              case 'REGEX':
                  return field.isRequired === true  ?   { ...schema, [field.id]: Yup.string().required(requiredField)
                                                              .test("OK", `Debe cumplirse: ${field.regex}`, (value: any) => {
                                                                    if(value !== undefined) {
                                                                      // eslint-disable-next-line no-new-func
                                                                      const result = new Function('value', field.regex);
                                                                      return result(value);
                                                                    }
                                                                })}
                                                     : { ...schema, [field.id]: Yup.string().test("OK", `Debe cumplirse: ${field.regex}`, (value:any) => {
                                                                                                if(value !== undefined) {
                                                                                                  // eslint-disable-next-line no-new-func
                                                                                                  const result = new Function('value', field.regex);
                                                                                                  return result(value);
                                                                                                }
                                                                                            })};

              case 'EMAIL':
                  return field.isRequired === true ?  { ...schema, [field.id]: Yup.string().email(`${field.name} debe ser un email valido`).required(requiredField) }
                                                    : { ...schema, [field.id]: Yup.string().email(`${field.name} debe ser un email valido`) } ;
              case 'URL':
                  return field.isRequired === true ? { ...schema, [field.id]: Yup.string().url(`${field.name} debe ser un url valido`).required(requiredField) }
                                                    : { ...schema, [field.id]: Yup.string().url(`${field.name} debe ser un url valido`) } ;
              case 'PHONE':
                  return field.isRequired === true ? { ...schema, [field.id]: Yup.string().matches(phoneRegExp, `${field.name} debe ser un phone valido +56 9XXXX XXXX`).required(requiredField) }
                                                    :{ ...schema, [field.id]: Yup.string().matches(phoneRegExp, `${field.name} debe ser un phone valido +56 9XXXX XXXX`) };
              default:
                  return field.isRequired === true ?  { ...schema, [field.id]: Yup.string().required(requiredField) } : { ...schema, [field.id]: Yup.string() };
            }
        // case 'MONEY':
        //     return { ...schema, [field.id]: Yup.string().required(requiredField) };
        case 'NUMBER':
            return field.isRequired === true ?  {...schema, [field.id]: Yup.number().typeError(`${field.name} ${validNumber}`).required(requiredField) }
                                                : { ...schema, [field.id]: Yup.number().typeError(`${field.name} ${validNumber}`) };
        // case 'DATE':
        //      return { ...schema, [field.id]: Yup.date().required(requiredField) };
        default:
            return {...schema };
      }
    }, {});

    return Yup.object().shape(schema);
  }

  const setPayloadFromDataForm = (dynamicStepsStructureByStep: any) => {
    // const  {onSubmitFunction } = this.props;
    // if (window.confirm('Guardar y Salir? (Si cancela se guardará localmente y podrá continuar al siguiente step)')) {
    //   onSubmitFunction(this.setPayloadFromDataFormByStep(dynamicStepsStructureByStep));
    // } else {
    //   this.setPayloadFromDataFormByStep(dynamicStepsStructureByStep);
    //   alert('Datos del step guardados localmente, puede continuar al siguiente step.');
    // }
  }

  const CreateDynamicField = (id: string, name: string, type: string, inputType: string, attributeOptions: string[]) => {
    return [{
      "id": id,
      "code": id,
      "name": name,
      "type": type,
      "validation": "",
      "regex": "",
      "position": 1,
      "width": 4,
      "status": "ENABLED",
      "createdAt": (new Date()),
      "updatedAt": null,
      "pointScore": 0,
      "isRequired": true,
      "isPinned": false,
      "inputType": inputType,
      "attributeOptions": attributeOptions !== undefined && attributeOptions.length > 0 ? [...attributeOptions] : ""}]
};

  const dynamicFieldsByIdWithProductName: never[] = [];

  return (
    <Modal
        // aria-labelledby="transition-modal-title"
        // aria-describedby="transition-modal-description"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}
        open={true}
        // onClose={this.closeModal}
        onClose={() => {alert('close')}}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={true}>
        <div
        style={{height:'600px', width:'800px', textAlign:'center', ...props.style,
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
                    <Formik
                        validationSchema={CreateDynamicSchema(dynamicFieldsByIdWithProductName)}
                        initialValues= { initializeFormValues(dynamicFieldsByIdWithProductName)}
                        onSubmit={(values, actions) => {
                                        setTimeout(() => {
                                          // setPayloadFromDataForm(dynamicStepsStructure)
                                        }, 1000)
                                      }
                                  }
                        render={({ errors, touched, isSubmitting }) => (
                            <Form >
                                     <Box
                                          style={{height:'60px',
                                            border:'solid 1px #ccc',
                                            borderRadius: '5px',
                                            padding: '5px',
                                            margin: '5px 5px',
                                            backgroundColor: '#ccc',
                                            boxShadow: '0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23)',

                                          }}
                                      >
                                            <h2>Formik Form - DataEntry Validations.</h2>
                                      </Box>
                                    <br></br>
                                    <br></br>
                                    <CardContent>
                                      <Grid>
                                          {/* {dynamicFieldsByIdWithProductName.map(content => this.createField(content, errors, touched))} */}
                                          <Grid item xs={12} sm={12} md={12}>
                                            {/* {formErrors && <Danger>{t(formErrors)}</Danger>} */}
                                          </Grid>
                                      </Grid>
                                    </CardContent>
                                    <br></br>
                                    <Box
                                          style={{height:'80px',
                                            border:'solid 1px #ccc',
                                            borderRadius: '5px',
                                            padding: '20px',
                                            margin: '10px 5px',
                                            backgroundColor: '#dae2e5',
                                            boxShadow: '0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23)',

                                          }}
                                      >
                                                  <Button type="submit" variant="contained" color="primary" size="small" className='step-button'
                                                        // disabled={this.state.addedDataInStep}
                                                        >
                                                    <Save />
                                                     Guardar y Salir
                                                  </Button>
                                                  <span>   </span>
                                                  <Button variant="contained" color="primary" size="small" className='step-button'>
                                                      <Cancel />
                                                       Cancelar
                                                  </Button>
                                      </Box>
                           </Form>
                        )}
                    />
                </Card>

          </div>
        </Fade>
      </Modal>);
}
