import React ,{useState}from 'react'
import BtnRender from './BtnRender';


function ProductItem({product,isAdmin,deleteProduct,handleCheck}){
    
    return(
        <div className='product_card'>
        {
            isAdmin && <input type="checkbox" checked={product.checked}   
            onChange={()=>handleCheck(product._id)}
            />
        }
        <img src={product.images.url} alt="" />

        <div className='product_box'>
         <h3 title={product.title}>{product.title}</h3>
         <span>Rs.{product.price}</span>
         <p>{product.content}</p>
        </div>

       
        <BtnRender product={product} deleteProduct={deleteProduct}/>
        </div>
        
    );
}
    

export default ProductItem
