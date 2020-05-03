import React, { Component } from 'react'
import {Search} from '../../components/Search'
import {peliculas} from '../../../api/dataToSearch.json'
// import Movie  from './../../components/Movie'
import {Movie}  from './../../components/Movie'

export default class SearchMovie extends Component<any, any> {
  state={
    data : peliculas,
  }
  handlerInputState = (valueInput:any) => {
    if(!valueInput.length) return this.setState({data:peliculas})
    const pelisculasFiltradas = peliculas.filter(({name}) => name === valueInput)
    this.setState({data:pelisculasFiltradas});
  }

  render() {
    return (
      <div>
        <div style={{background:'#1C212E', height:'80px', display:'flex', alignItems:'center', padding:'0em 12%'}}>
          <Search handlerInputState={this.handlerInputState}/>
        </div>
        <div style={{backgroundColor:'#131722', height:'100%', display:'flex',flexWrap:'wrap', padding:'0em 8em'}}>
        {
        this.state.data.length > 0
          ? this.state.data.map(item => <div style={{width:'25%', display:'flex', justifyContent:'center', padding:'1em 0em'}}>
          <Movie {...item}/>
        </div>
        )
        :
          <h1 style={{color:'white', textAlign:'center'}}>No se encontraron datos {'😅'}</h1>
      }
        </div>
      </div>
    )
  }
}
