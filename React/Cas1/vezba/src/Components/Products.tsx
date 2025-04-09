import React, {useState} from "react";

interface ProductInterface {
    [key: string]: number
}

const products: ProductInterface = {
    'iPhone13': 1000,
    'iPhone14': 1100,
    'iPhone15': 1200,
    'iPhone16': 1300
};

function Products(props: { pdv: number; }) {
    let [search, setSearch] = useState<string>("")
    let [searchResult, setSearchResult] = useState<boolean | null>(null)
    let [pdv, setPdv] = useState(props.pdv)
    let [newProductName, setNewProductName] = useState("")
    let [newProductPrice, setNewProductPrice] = useState<number>(0)
    let [editingProductName, setEditingProductName] = useState<string | null>(null)
    let [productList, setProductList] = useState<ProductInterface>(products)

    function updateProductList(callback: (products: ProductInterface) => ProductInterface) {
        setProductList((prev) => callback({...prev}))
    }

    function searchField(e: React.ChangeEvent<HTMLInputElement>) {
        search = e.currentTarget.value
        setSearch(search)

        const exists = Object.keys(productList).some(
            (product) => product.toLowerCase() === search.toLowerCase()
        )
        setSearchResult(search ? exists : null)
        console.log(exists)
    }

    function changePdv(e: React.ChangeEvent<HTMLInputElement>) {
        pdv = e.currentTarget.value
        setPdv(pdv)
    }

    function deleteProduct(productName: string) {
        updateProductList((products) => {
            delete products[productName]
            return products
        })
    }

    function deleteAllProducts() {
        updateProductList(() => ({}))
    }

    function startEditingProduct(productName: string, productPrice: number) {
        setNewProductName(productName)
        setNewProductPrice(productPrice)
        setEditingProductName(productName)
    }

    function saveProduct() {
        if (newProductName && newProductPrice > 0) {
            updateProductList((products) => {
                if (editingProductName && editingProductName !== newProductName) {
                    delete products[editingProductName]
                }
                products[newProductName] = newProductPrice
                return products
            })

            setNewProductName("")
            setNewProductPrice(0)
            setEditingProductName(null)
        } else {
            alert("Please provide a valid product name and price.")
        }
    }

    return (
        <>
            <div className="d-flex flex-column align-items-center">
                <h1 className="mb-3">Add New Product Or Edit Existing Product</h1>

                <div className="mb-3 w-50">
                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Product Name"
                        value={newProductName}
                        onChange={(e) => setNewProductName(e.target.value)}
                    />
                    <input
                        type="number"
                        className="form-control mb-3"
                        placeholder="Product Price"
                        value={newProductPrice}
                        onChange={(e) => setNewProductPrice(Number(e.target.value))}
                    />
                    <button className="btn btn-success w-100" onClick={saveProduct}>
                        Save Product
                    </button>
                    <hr/>
                    <h2 className="mb-4">Change PDV tax</h2>
                    <input
                        type="number"
                        className="form-control mb-4"
                        placeholder="Change PDV tax"
                        value={pdv}
                        onChange={changePdv}
                    />
                    <hr/>
                    <h2 className="mb-4">SearchBar Product</h2>
                    {searchResult !== null && (
                        <div className={`alert ${searchResult ? "alert-success" : "alert-danger"}`} role="alert">
                            {searchResult
                                ? "You have successfully found the product."
                                : "You did not find the product."}
                        </div>
                    )}
                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Insert key word for SearchBar"
                        value={search}
                        onChange={searchField}
                    />
                    <hr/>
                    <button className="btn btn-danger w-100" onClick={deleteAllProducts}>
                        Delete All Products
                    </button>
                </div>
                <div className="d-flex flex-wrap justify-content-center w-100">
                    {Object.entries(productList).map(([product, price], index) => (
                        <div key={index} className="card m-3 p-3" style={{width: "18rem"}}>
                            <h5 className="card-title">{product}</h5>
                            <p className="card-text">Cena bez pdv: ${price} + pdv {pdv}%</p>
                            <p className="card-text">Cena sa pdv: ${calculatePDV(price as number, pdv)}</p>
                            <div className="d-flex justify-content-between">
                                <button className="btn btn-primary"
                                        onClick={() => startEditingProduct(product, price as number)}>
                                    Edit
                                </button>
                                <button className="btn btn-danger" onClick={() => deleteProduct(product)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}

function calculatePDV(price: number, pdv: number): number {
    return ((price * pdv) / 100) + price
}

export default Products