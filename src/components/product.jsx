import React, { useState } from 'react'
function Product() {
    const  [state,setState] = useState(0)
    const cardShop ={
        title:"iphoe 11",
        price:"250$",
        max:"10ta qolgan"
    }
    const dicrement = () =>{
        setState(state + 1);
    }
    const increment = () =>{
        setState(state - 1);
    }
  return (
    <div className='container'>
        <div className="card">
            <div className="card-shop">
                <h1>{cardShop.title}</h1>
                <p>{cardShop.price}</p>
                <h3>{cardShop.max}</h3>
                <div className="btn">
                <button
                className='green'
                disabled={state >=10 ? true : false }
                onClick={dicrement}>click me +</button>
                <button className='red'
                onClick={increment}>click me -</button>
                </div>
            </div>
            <div className="card-shop">
                <h1>{cardShop.title}</h1>
                <p>{cardShop.price}</p>
                <h3>{cardShop.max}</h3>
                <div className="btn">
                <button
                className='green'
                disabled={state >=10 ? true : false }
                onClick={dicrement}>click me +</button>
                <button className='red'
                onClick={increment}>click me -</button>
                </div>
            </div> <div className="card-shop">
                <h1>{cardShop.title}</h1>
                <p>{cardShop.price}</p>
                <h3>{cardShop.max}</h3>
                <div className="btn">
                <button
                className='green'
                disabled={state >=10 ? true : false }
                onClick={dicrement}>click me +</button>
                <button className='red'
                onClick={increment}>click me -</button>
                </div>
                
            </div>
        </div>
   
    <span>{state}</span>
    </div>
  );
}

export default Product;