const products = {
    'iPhone13': 1000,
    'iPhone14': 1100,
    'iPhone15': 1200,
    'iPhone16': 1300
};

function Products(props) {
    const pdv = Number(props.pdv);
    return (
        <>
            <ul>
                {Object.entries(products).map(([product, price], index) => (
                    <li key={index}>
                        {product} - cena bez pdv: {price} + pdv = {pdv}
                                    <br/>cena sa pdv: {price + pdv}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Products;
