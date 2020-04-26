import React from 'react';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  & > svg {
    font-size:3em; 
    fill:#979797;
    margin:0em .5em 0em 0em;

  }
  & > div > label {color: #979797;}
  & > div > div {color: #979797;}
`

export const Search = (props : any) => {
  return (
      <Container>
            <SearchIcon />
            <TextField onChange={e => props.handlerInputState(e.target.value)} label="Buscar pelicula" />
      </Container>
  );
}