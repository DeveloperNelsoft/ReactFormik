import React, { useState } from "react";
import RateReview from "@material-ui/icons/StarRate";
import  Button  from "@material-ui/core/Button";
import  Modal from "@material-ui/core/Modal";
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import { render } from '@testing-library/react';
import FormikForm  from './FormikForm'

export const Movie = (props:any) => {

    const [rateValue, setRateValue] = useState(0);
    const [showModal, setShowModal] = useState(false);

      return (

        <div style={{height:'380px', width:'180px', textAlign:'center', color:'white',...props.style, border:'solid 5px white'}} >
          <img style={{width:'100%'}} src={props.uri} alt=""/>
          <span>{props.name}</span>
          <br></br>
          <span><RateReview></RateReview> rate: {rateValue}  </span>
          <br></br>
          <span>
              <Button
                  size="small"
                  style={{height:'40px', width:'120px', textAlign:'center', color:'white',...props.style, border:'solid 2px red'}}
                  onClick={() => setShowModal(true)}
              >Change <RateReview></RateReview>
              </Button>
          </span>
           {showModal && (
                <FormikForm onCloseRequest={() => setShowModal(false)} onSetRateValueFromFormik={(val: any) => setRateValue(val)} > </FormikForm>
            )}
        </div>
       )
}
