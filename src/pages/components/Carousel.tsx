import React, {useState} from 'react';

const Carousel = (props : any) => {
  const [photoSelected, setphotoSelected] = useState(0)
  return (
      <div className="carousel slide" data-ride="carousel" style={props.style}>
        <ol className="carousel-indicators">
        {props.photosCarousel.map((url : string, i : number) => <li
        onClick={()=>setphotoSelected(i)} 
        data-target="#carouselExampleIndicators" data-slide-to="0" className={`${photoSelected === i && 'active'}`}/>)}
        </ol>
        <div style={{height: 'inherit'}}  className="carousel-inner">
          {props.photosCarousel.map((url : string, i : number) => <div style={{    height: 'inherit'}} className={`carousel-item ${photoSelected === i && 'active'}`}>
            <img src={url} style={{    height: 'inherit', objectFit: 'cover'}} className="d-block w-100" alt="..."/>
          </div>)}
        </div>
        <div className="carousel-control-prev" role="button" data-slide="prev">
          <span onClick={()=>photoSelected !== 0 ? setphotoSelected(photoSelected - 1) : setphotoSelected(2)} className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </div>
        <div className="carousel-control-next" role="button" data-slide="next">
          <span onClick={()=>( photoSelected !== props.photosCarousel.length - 1 ) ? setphotoSelected(photoSelected + 1): setphotoSelected(0)} className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </div>
      </div>
  );
}

export default Carousel;
