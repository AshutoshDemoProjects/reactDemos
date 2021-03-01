import React, { useEffect, useState } from 'react'

export default function AddOrEdit(props) {
    const [title, setTitle] = useState('');
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [edit, setEdit] = useState(false);
    useEffect(() => {
        if (props.product && props.product.id === null) {
            setId('');
            setName('');
            setPrice('');
            setTitle('Add');
        } else {
            setId(props.product.id);
            setName(props.product.name);
            setPrice(props.product.price);
            setTitle('Edit');
            setEdit(true);
        }
    }, [props.product]);
    const addClickHandler = () => {
        props.addHandler({ id, name, price });
    }
    const editClickHandler = () => {
        props.editHandler({ id, name, price });
    }
    return (
        <div className="w-50 m-auto p-5 shadow-lg bg-white">
            <h3>{title} Product</h3>
            <hr></hr>
            <div className="form-group row">
                <label htmlFor="inputId" className="col-sm-2 col-form-label">Id</label>
                <div className="col-sm-10">
                    <input type="type" className="form-control" id="inputId" disabled={edit} placeholder="Product Id" onChange={e => setId(e.target.value)} value={id} />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input type="type" className="form-control" id="inputName" placeholder="Product Name" onChange={e => setName(e.target.value)} value={name} />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="inputPrice" className="col-sm-2 col-form-label">Price</label>
                <div className="col-sm-10">
                    <input type="type" className="form-control" id="inputPrice" placeholder="Product Name" onChange={e => setPrice(e.target.value)} value={price} />
                </div>
            </div>
            {!edit ?
                <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={addClickHandler}>Submit</button> :
                <button type="submit" className="btn btn-danger btn-lg btn-block" onClick={editClickHandler}>Submit</button>
            }
        </div>
    )
}
