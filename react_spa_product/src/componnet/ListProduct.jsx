import React from 'react'

export default function ListProduct(props) {

    return (
        <React.Fragment>
            {props.products && props.products.length > 0 ? <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.products.map(product =>
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td><button className="btn btn-warning" onClick={() => props.onEdit(product.id)}>edit</button> /
                                    <button className="btn btn-danger" onClick={() => props.onDelete(product.id)}>delete</button></td>
                            </tr>
                        )}
                </tbody>
            </table> : <h1>No Products in List</h1>}
        </React.Fragment>
    )
}
