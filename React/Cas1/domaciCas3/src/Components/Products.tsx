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
    let [newProductName, setNewProductName] = useState<string>("");
    let [newProductPrice, setNewProductPrice] = useState<number>(0);
    let [editingProductName, setEditingProductName] = useState<string | null>(null);

    function changePdv(e: { target: { value: number; }; }){
        setPdv(e.target.value);
    }

    function deleteProduct(productName: string) {
        const updatedProducts = { ...productList };
        delete updatedProducts[productName];
        setProductList(updatedProducts);
    }

    function deleteAllProducts() {
        setProductList({});
    }

    function startEditingProduct(productName: string, productPrice: number) {
        setNewProductName(productName);
        setNewProductPrice(productPrice);
        setEditingProductName(productName);
    }

    function saveProduct() {
        if (newProductName && newProductPrice > 0) {
            let updatedProducts = { ...productList };

            if (editingProductName && editingProductName !== newProductName) {
                delete updatedProducts[editingProductName];
            }

            updatedProducts[newProductName] = newProductPrice;

            setProductList(updatedProducts);

            setNewProductName("");
            setNewProductPrice(0);
            setEditingProductName(null);
        } else {
            alert("Please provide a valid product name and price.");
        }
    }

    return (
        <>
        <ul>
            <h2>Add New Product Or Edit Existing Product</h2>
            <input
                type="text"
                placeholder="Product Name"
                value={newProductName}
                onInput={(e: { target: { value: string; }; }) => setNewProductName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Product Price"
                value={newProductPrice}
                onInput={(e: { target: { value: number; }; }) => setNewProductPrice(Number(e.target.value))}
            />
            <button onClick={saveProduct}>Save Product</button>
            <br/>
        <h1>Change Pdv tax</h1>
        <input type="number" placeholder="Change Pdv tax" onInput={changePdv}/>
        <br/>
        {Object.entries(productList).map(([product, price]: [string, number], index) => (
            <li key={index}>
                {product} - cena bez pdv: ${price} + pdv {pdv}%
                <br/>cena sa pdv: ${calculatePDV(price, pdv)}
                <button onClick={() => startEditingProduct(product, price)}>Edit</button>
                <button onClick={() => deleteProduct(product)}>Delete</button>
            </li>
        ))}
        </ul>
    <button onClick={deleteAllProducts}>Delete All Products</button>
</>
)
    ;
}

function calculatePDV(price: number, pdv: number): number {
    return ((price * pdv) / 100) + price
}

export default Products;
