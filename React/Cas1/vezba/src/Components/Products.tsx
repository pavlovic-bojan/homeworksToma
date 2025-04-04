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
    let [editingProductName, setEditingProductName] = useState<string>("");
    let [editingProductPrice, setEditingProductPrice] = useState<number>(0);

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
        setEditingProductName(productName);
        setEditingProductPrice(productPrice);
    }

    function saveEditedProduct() {
        if (editingProductName && editingProductPrice > 0) {
            const updatedProducts = { ...productList, [editingProductName]: editingProductPrice };
            setProductList(updatedProducts);
            setEditingProductName("");
            setEditingProductPrice(0);
        } else {
            alert("Please provide a valid product name and price.");
        }
    }

    function addProduct() {
        if (newProductName && newProductPrice > 0) {
            const updatedProducts = { ...productList, [newProductName]: newProductPrice };
            setProductList(updatedProducts);
            setNewProductName("");
            setNewProductPrice(0);
        } else {
            alert("Please provide a valid product name and price.");
        }
    }

    return (
        <>
        <ul>
            <h2>Add New Product</h2>
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
            <button onClick={addProduct}>Add Product</button>
            <br/>
            <h2>Edit Product</h2>
            <input
                type="text"
                value={editingProductName}
                onInput={(e: { target: { value: string; }; }) => setEditingProductName(e.target.value)}
            />
            <input
                type="number"
                value={editingProductPrice}
                onInput={(e: { target: { value: number; }; }) => setEditingProductPrice(Number(e.target.value))}
            />
            <button onClick={saveEditedProduct}>Save Changes</button>
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
