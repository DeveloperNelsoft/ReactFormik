import React from 'react'
import { Movie } from './Movie'

export const ListOfCategory = (props:any) => {
  const {category} = props;
  return (
    <div style={{
      // border:'solid 2px blue'
      }}>
      <div style={{height:'450px', width:'100%', display:'flex', alignItems:'start', justifyContent:'center', flexDirection:'column', padding:'0px 15em'}} >
        <h3 className='text-capitalize' style={{color:'white', margin:'2em 0px'}}>{category.categoria}</h3>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', width:'inherit' }}>
          {category.peliculas.map((item:{})=><Movie {...item}/>)}
        </div>
      </div>
    </div>
  );
}
