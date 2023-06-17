import { useEffect } from "react"
import Aos from 'aos';
import 'aos/dist/aos.js';
import 'aos/dist/aos.css';
function Intro() {
    
    useEffect(() => {

        Aos.init();

    }, [])
    return (

        <>
        <div id="inrto" className="container   mb-5" data-aos="fade-up" >

            <div className="row">
            <div className="   col-sm-6 col-md-6	col-lg-7	col-xl-7	col-xxl-7">

                    <h1   >
                        Enjoy!

                    </h1>
                    <h3>

                        Indulge in a world of exceptional coffee at <span id="span">Café Matinal</span>, where convenience meets quality. Explore our curated collection of specialty beans, delivered straight to your doorstep, for a premium coffee experience at home.
                    </h3>
                </div>
                <div className="        col-sm-4 col-md-4	col-lg-5	col-xl-5	col-xxl-5">

                    <img className='contimg' src='images/intro1.svg' alt="" />

                </div>

            </div>
        </div>
</>
    );
}

export default Intro;

