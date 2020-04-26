import React, { Component } from 'react'
import img from './../../../assets/imgAboutExample.svg'
import movieExample from './../../../assets/imgExampleMovie.svg'
export default class index extends Component<any, any> {
  render() {
    console.log(this.props.match.params.id);
    
    return (
      <div style={{display:'flex', flexDirection:'column', height:'80vh', background:'#1C212E'}}>
        <div style={{height:'30%', background:'red'}}>
          <img style={{width:'100%'}} src={img} alt=""/>
        </div>
        <div style={{background:'#1C212E', display:'flex', alignItems:'center', justifyContent:'center', paddingTop:'2em'}}>
          <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <div>
              <img src={movieExample} alt=""/>
            </div>
            <div style={{marginTop:'1em'}}>
              <button className='btn btn-info pl-5 pr-5'>Ver</button>
            </div>
          </div>
          <div style={{marginLeft:'2em', width:'50em'}}>
            <h3 style={{color:'white'}}>General</h3>
            <p style={{color:'white'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
