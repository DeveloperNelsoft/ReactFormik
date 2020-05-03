import React, { Component, useState } from "react";
import RateReview from "@material-ui/icons/StarRate";
import  Button  from "@material-ui/core/Button";
import  Modal from "@material-ui/core/Modal";
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import { render } from '@testing-library/react';
import FormikForm  from './FormikForm'

// export default class Movie extends Component<any, any> {
export const Movie = (props:any) => {
//  class Movie extends Component<any, any> {

    // const {name, uri} = props;
    // let  isModalVisible = false;
    // constructor(props: any) {
    //   super(props);
      // this.state = {
      //   isModalVisible: false,
      // };
    // }

    const onClickForShowModal =(e:any) => {
        // alert('onClickForShowModal');
        // this.setState({isModalVisible: true,});

    }

    // render() {
      // const {name, uri} = this.props;
      // const {isModalVisible} = this.state;
      const [showModal, setShowModal] = useState(false);

      return (

        <div style={{height:'380px', width:'180px', textAlign:'center', color:'white',...props.style, border:'solid 5px white'}} >
          <img style={{width:'100%'}} src={props.uri} alt=""/>
          <span>{props.name}</span>
          <br></br>
          <span><RateReview></RateReview> rate: {0}  </span>
          <br></br>
          <span>
              <Button
                  size="small"
                  style={{height:'40px', width:'120px', textAlign:'center', color:'white',...props.style, border:'solid 2px red'}}
                  // onClick={(e) => {this.onClickForShowModal(e)}}
                  onClick={() => setShowModal(true)}
              >Change <RateReview></RateReview>
              </Button>
          </span>
          {/* {isModalVisible ?
              <FormikForm {...this.props}> </FormikForm>
          : null} */}
           {showModal && (
                <FormikForm onCloseRequest={() => setShowModal(false)} > </FormikForm>
                // <Modal onCloseRequest={() => setShowModal(false)}>{children}</Modal>
            )}
        </div>
       )

    // }

}
