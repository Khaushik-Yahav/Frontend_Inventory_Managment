// ProductList.js
import React, { useContext } from 'react';
import { CustomerContext } from '../ContextApi/CustomerContext';
import '../CustomerPages_css/ProductList.scss'
import {Product} from '../CustomerPages/Product'
import Loading from '../Login _signup_pages/Loading';
const ProductList = () => {
  const { products, loading, error } = useContext(CustomerContext);
//  console.log(products);
  if (loading) return <Loading/>
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="items">
    {
        products.map((currpro)=>{
            return <Product key={currpro._id} {...currpro}/>
        })
    }
</div>
  );
};

export default ProductList;
