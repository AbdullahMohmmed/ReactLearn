import { useState } from "react";

function ButtonCount() {
    const [count, setCount] = useState(0)
    var countMin;

    if (count==0) {
        countMin = <button type="button" className="btn btn-outline-danger disabled">-</button>

        
    }
    else {

        countMin=   <button onClick={() => setCount((count) => count - 1)} type="button" className="btn btn-outline-danger">-</button>

    }

    return (





        <>

            <div className="btn-group" role="group" aria-label="Basic outlined example">
                {countMin}
                <button type="button" className="btn btn-outline-dark disabled">{count}</button>
                <button onClick={() => setCount((count) => count + 1)} type="button" className="btn btn-outline-dark">+</button>



            </div>
        </>



    )
}
export default ButtonCount;