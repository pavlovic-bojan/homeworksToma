import React from "react";

interface ProductInterface{
    [key:string]:number
}

const products:ProductInterface = {
    'iPhone13': 1000,
    'iPhone14': 1100,
    'iPhone15': 1200,
    'iPhone16': 1300
};

function Products(props) {
    const pdv = props.pdv;
    return (
        <>
            <ul>
                {Object.entries(products).map(([product, price], index) => (
                    <li key={index}>
                        {product} - cena bez pdv: ${price} + pdv { pdv }%
                                    <br/>cena sa pdv: ${calculatePDV(price,pdv)}
                    </li>
                ))}
            </ul>
        </>
    );
}

function calculatePDV (price:number, pdv:number):number {
    return ((price * pdv)/100) + price
}

export default Products;
