import React from 'react';
import { useState } from 'react';
import './App.css';
import AddOrEdit from './componnet/AddOrEdit';
import ListProduct from './componnet/ListProduct';

function App() {
  const [Products, setProducts] = useState([
    { id: 101, name: 'chocolate', price: 50 },
    { id: 102, name: 'chips', price: 30 },
    { id: 103, name: 'cake', price: 300 },
    { id: 104, name: 'ice cream', price: 100 },
  ]);
  const [addOrEdit, setAddOrEdit] = useState(false)
  const [product, setProduct] = useState({
    id: null,
    name: '',
    price: null
  });
  const deleteHandler = (id) => {
    const afterDeleteProduct = Products.filter(product => product.id !== id);
    setProducts(afterDeleteProduct);
  }
  const editFormHandler = (id) => {
    const index = Products.findIndex(prod => prod.id === id);
    const prod = { ...Products[index] };
    setProduct(prod);
    setAddOrEdit(true);
  }
  const editProductHandler = (prod) => {

    const plist = Products.map(p => p.id === prod.id ? prod : p);
    setProducts(plist);
    setAddOrEdit(false);
  }
  const addFormHandler = () => {
    const prod = { id: null, name: '', price: null };
    setProduct(prod);
    setAddOrEdit(true);
  }
  const addProductHandler = (prod) => {
    const addProd = [...Products, prod];
    setProducts(addProd);
    setAddOrEdit(false);
  }

  return (
    <div className="container jumbotron">
      {addOrEdit ?
        <AddOrEdit product={product} addHandler={addProductHandler} editHandler={editProductHandler} />
        :
        <React.Fragment>
          <button className="btn btn-success" onClick={addFormHandler}>Add Product</button>
          <br />
          <br />
          <ListProduct products={Products} onDelete={deleteHandler} onEdit={editFormHandler} />
        </React.Fragment>
      }
    </div>
  );
}

export default App;
