import React, {useState} from "react";

interface ProductInterface{
    [key:string]:number
}

const products:ProductInterface = {
    'iPhone13': 1000,
    'iPhone14': 1100,
    'iPhone15': 1200,
    'iPhone16': 1300
};

function Products(props: { pdv: number; }) {
    let [pdv, setPdv] = useState(props.pdv)
    function changePdv(e){
        setPdv(e.target.value)
        console.log(pdv);
    }

    return (
        <>
            <ul>
                <h1>Change Pdv tax</h1>
                <input type="number" onInput={changePdv}/>
                {Object.entries(products).map(([product, price], index) => (
                    <li key={index}>
                        {product} - cena bez pdv: ${price} + pdv {pdv}%
                        <br/>cena sa pdv: ${calculatePDV(price, pdv)}
                    </li>
                ))}
            </ul>
        </>
    );
}

function calculatePDV(price: number, pdv: number): number {
    return ((price * pdv)/100) + price
}

export default Products;
