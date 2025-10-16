import React, { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';

const DisplayCart = () => {
    const {cart,food_list}=useContext(StoreContext)
   
const filteredCart = food_list
  .filter((food) => cart[food._id])
  .map((food) => ({
    ...food,
    quantity: cart[food._id],
  }));
    return (
        <div>
            {
                filteredCart.map((C)=>{
                    return(
                        <div>{C.name }:{C.quantity}</div>
                    )
                })
            }
        </div>
    );
};

export default DisplayCart;