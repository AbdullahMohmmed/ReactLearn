import { useEffect, useState } from "react";
import ButtonCount from "./Button";
import useAos from "./hooks/useAos";

function Card(prpos) {
  const [Product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  useAos();
console.log(Product);
  return (
    <div className="row ">
      {Product.map((item) => (
        <div
          key={item.id}
          data-aos="fade-up"
          className="shadow card col-sm-3 col-md-3	col-lg-3 col-xl-3 col-xxl-3 m-5 mt-5"
        >
          <div>
            <img src={item.images} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <span>{item.price} $</span>
              <div className=" text-center">
                <ButtonCount />
              </div>
              <img id="cor" src="images/coffe.svg" alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Card;
