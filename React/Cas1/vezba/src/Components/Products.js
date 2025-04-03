
const products = ['iPhone13','iPhone14','iPhone15','iPhone16']

function Products() {
    return (
        <>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product}</li>
                ))}
            </ul>
        </>
    );
}

export default Products;