import React, { Component, Fragment } from 'react';
import Carousel from '../../components/Carousel'
import {caregories} from '../../../api/data.json'
import { Categories } from '../../components/Categories'


export default class index extends Component<any, any> {

  constructor(props:{}){
    super(props)
    this.state = {
      callApi: caregories,
      photosCarousel:[
        'https://firebasestorage.googleapis.com/v0/b/hroproyect.appspot.com/o/casa1.jpg?alt=media&token=98a7f1cf-bf69-4ae5-a237-eea69e2d20e5',
        'https://firebasestorage.googleapis.com/v0/b/hroproyect.appspot.com/o/netflix2.jpg?alt=media&token=1a49e258-8ff8-4ab3-839a-58a88b9b8ee5',
        'https://firebasestorage.googleapis.com/v0/b/hroproyect.appspot.com/o/auto1.jpg?alt=media&token=ea52b4fb-eb48-49f6-b1dc-1fc5e3414e1d'
      ]
    }
  }
  render() {
    console.log(this.props);
    
    return (
      <Fragment>
        <Carousel photosCarousel={this.state.photosCarousel} style={{height:'30em'}}/>
        <Categories data={this.state.callApi}/>
      </Fragment>
    );
  }



}
