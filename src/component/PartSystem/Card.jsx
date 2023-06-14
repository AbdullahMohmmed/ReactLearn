import { useEffect, useState } from "react";
import ButtonCount from "./Button";


function Card(prpos) {
    const [Product, setProduct] = useState([])
    useEffect(() => {
        fetch(' https://api.escuelajs.co/api/v1/products').then((res=> res.json())).then((data) => setProduct(data))
        // console.log(product);

    })
    const store = Product.map((item) => {
        return (
            <>
                <div className="shadow card col-sm-4 col-md-5 col-lg-3 m-5 mt-5">

                    <div key={item.id
                    } >
                        <img src={item.images} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <span>{item.price} $</span>
                            <div class=" text-center">
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