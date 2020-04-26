import React from 'react'
import {ListOfCategory} from './ListOfCategory'

export const Categories = (props:any) => {
  const {data} = props;
  return (
    <div style={{display:'flex', flexDirection:'column'
    // , backgroundColor:'red'
    }} >
      {data.map((listOfCategory:{})=><ListOfCategory category={listOfCategory}/>)}
    </div>
  );
}