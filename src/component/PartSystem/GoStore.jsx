import { useEffect } from "react"
import Aos from 'aos';
import 'aos/dist/aos.js';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";


function Intro2() {


    useEffect(() => {

        Aos.init();

    }, [])
    return (
        <>
            <div id="inrto" className="container" data-aos="fade-up" >

                <div className="row">
                    <div className="   mt-5     col-sm-4 col-md-4	col-lg-5	col-xl-5	col-xxl-5
">
                        <img className='contimg' src='images/drink.svg' alt="" />


                    </div>
                    <div className=" etxt  col-sm-6 col-md-6	col-lg-7	col-xl-7	col-xxl-7">

                        <h1   >
                            shopping!

                        </h1>
                        <h3>

                            Visit our website and explore our online store for a delightful
                            coffee shopping experience. Find your perfect brew and have it
                            conveniently delivered to your doorstep   <Link className="btn bg-dark text-light" to={'store'}    ><strong> Vist <span id="span">Café Matinal</span> Store.  </strong></Link></h3>


                    </div>

                </div>
            </div>
        </>

    );
}


export default Intro2;