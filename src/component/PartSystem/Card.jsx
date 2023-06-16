import { useEffect, useState } from "react";
import ButtonCount from "./Button";
import Aos from 'aos';
import 'aos/dist/aos.js';
import 'aos/dist/aos.css';


function Card(prpos) {
    const [Product, setProduct] = useState([])
    useEffect(() => {
       
        fetch(' https://api.escuelajs.co/api/v1/products').then((res=> res.json())).then((data) => setProduct(data))
        Aos.init();

    },[])
    const store = Product.map((item) => {
        // console.log(item);

        return (
            <>
                <div  key={item.id} data-aos="fade-up" className="shadow card col-sm-4 col-md-5 col-lg-3 m-5 mt-5">

                    <div >
                        <img src={item.images} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <span>{item.price} $</span>
                            <div className=" text-center">
                                <ButtonCount />
                            </div>
                        </div>
                    </div>
                </div>          </>)


    })



    return (

        <div className="row">

        {store}
    </div>       
    )


}
export default Card;