import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import LogoWiti from './../../assets/LogoWiti.svg';
import { Link } from "react-router-dom";

export const Header = (props : any) => {
  return (
    <div style={{height:'120px', backgroundColor:'#131722', display:'flex', alignItems:'center', justifyContent:'space-around'}}>
     <div>
        <img src={LogoWiti} alt="imagen"/>
     </div>
     <div>
      <Link to="/">Home</Link>
      <Link style={{margin:'0em 3em'}} to="/about/123">About</Link>
      <Link to="/searchMovie">SearchMovie</Link>
     </div>
     <div>
      <SearchIcon style={{color:'white', fontSize:'50px'}} />
     </div>
    </div>
  );
}

