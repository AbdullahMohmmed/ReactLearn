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
import { EffectCards } from 'swiper';
import 'swiper/css/effect-cards';




function Slider(props) {

    const swiper = useSwiper();

    return (


        <>
  <div className="container">
      <h1 className="heading">Flower Gallery</h1>

<Swiper
    modules={[EffectCards, Pagination, Navigation]}

    effect={'cards'}
    grabCursor={true}
    centeredSlides={true}
    loop={true}
    slidesPerView={'auto'}
    coverflowEffect={{
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 0.5,
    }}
    pagination={{ el: '.swiper-pagination', clickable: true }}
    navigation={{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      clickable: true,
    }}

     
    >
                <SwiperSlide><img src={props.images} style={{width:'100%', height:'100vh'}} /></SwiperSlide>

        <SwiperSlide><img src="images/img2.jpg "style={{width:'100%', height:'100vh'}} /></SwiperSlide>
        <SwiperSlide><img src="images/img3.jpg "style={{width:'100%', height:'100vh'}} /></SwiperSlide>
        <SwiperSlide><img src="images/img4.jpg "style={{width:'100%', height:'100vh'}} /></SwiperSlide>
        <SwiperSlide><img src="images/img1.jpg "style={{width:'100%', height:'100vh'}} /></SwiperSlide>
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