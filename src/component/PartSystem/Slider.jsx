// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import 'bootstrap'
import { Swiper,useSwiper  ,SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper';
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import 'swiper/swiper-bundle.min.css;'
import 'swiper/css/scrollbar';
import { EffectCards,EffectCoverflow } from 'swiper';
import 'swiper/css/effect-cards';
import { useEffect, useState } from 'react';





function Slider(props) {

    const [img,setImg]=useState([])

    const slider = props.srcImg.map((item) => {
        // console.log(item);
        return (

            <SwiperSlide ><img loading="lazy" src={item} /></SwiperSlide>

        )})

    const swiper = useSwiper();

    return (


        <>
  <div className="container">
      <h1 className="heading">Flower Gallery</h1>

<Swiper
  effect={'coverflow'}
  grabCursor={true}
  centeredSlides={true}
  loop={true}
  slidesPerView={'auto'}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 80,
    modifier: 2.5,
    }}
    pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
    }} modules={[EffectCoverflow, Pagination, Navigation]}
    className="swiper_container"

     
    >
        
{slider}
     
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
    </Swiper>      
    </div>  </>
    );
}

export default Slider;