import React from 'react'
import RateReview from "@material-ui/icons/StarRate";
import Button from "@material-ui/core/Button";

export const Movie = (props:any) => {
  const {name, uri} = props;
  return (
    <div style={{height:'380px', width:'180px', textAlign:'center', color:'white',...props.style, border:'solid 5px white'}} >
      <img style={{width:'100%'}} src={uri} alt=""/>
      <span>{name}</span>
      <br></br>
      <span><RateReview></RateReview> rate: {7.0}  </span>
      <br></br>
      <span>
          <Button
              size="small"
              style={{height:'40px', width:'120px', textAlign:'center', color:'white',...props.style, border:'solid 2px red'}}
              onClick={() => alert("Aca editar solo el nombre del producto")}
          >Change <RateReview></RateReview>
          </Button>
      </span>
    </div>
  );
}
