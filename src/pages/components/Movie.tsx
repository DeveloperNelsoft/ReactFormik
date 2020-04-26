import React from 'react'

export const Movie = (props:any) => {
  const {name, uri} = props;
  return (
    <div style={{height:'300px', width:'180px', textAlign:'center', color:'white',...props.style, border:'solid 5px white'}} >
      <img style={{width:'100%'}} src={uri} alt=""/>
      <span>{name}</span>
    </div>
  );
}