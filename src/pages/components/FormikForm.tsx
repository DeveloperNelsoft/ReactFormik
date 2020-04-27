import React from 'react'
import  Modal from "@material-ui/core/Modal";
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';

export const FormikForm = (props:any) => {
  const {name, uri} = props;

  return (
    <Modal
        // aria-labelledby="transition-modal-title"
        // aria-describedby="transition-modal-description"
        style={{display: 'flex', alignItems: 'center', justifyContent: 'center', }}
        open={true}
        // onClose={this.closeModal}x
        // closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={true}>
        <div
        style={{height:'380px', width:'180px', textAlign:'center', color:'white',...props.style, border:'solid 5px white'}}
          // className="modal-paper-uploader"

            //   background-color: white;
            //   border: 1px solid;
            //   padding-top: 10px;
            //   padding-right: 10px;
            //   padding-bottom: 10px;
            //   padding-left: 10px;
            //   box-shadow: 5px 10px;
            //   height: 400px;
            //   width: 800px;
            //   overflow: scroll;


          >
                testin1..tesn 3
          </div>
        </Fade>
      </Modal>);
}
