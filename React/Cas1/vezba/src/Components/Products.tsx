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

    let [productList, setProductList] = useState<ProductInterface>(products);


    function changePdv(e: { target: { value: number; }; }){
        setPdv(e.target.value);
    }

    function deleteProduct(productName: string) {
        const updatedProducts = { ...productList };
        delete updatedProducts[productName];
        setProductList(updatedProducts);
    }

    return (
        <>
            <ul>
                <h1>Change Pdv tax</h1>
                <input type="number" onInput={changePdv}/>
                {Object.entries(productList).map(([product, price]: [string, number], index) => (
                    <li key={index}>
                        {product} - cena bez pdv: ${price} + pdv {pdv}%
                        <br/>cena sa pdv: ${calculatePDV(price, pdv)}
                        <button onClick={() => deleteProduct(product)}>Delete</button>
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
