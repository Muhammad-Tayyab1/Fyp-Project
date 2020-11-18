import React from 'react';
import CardData from './CardData';
import { Link, useHistory } from 'react-router-dom';

export default function ProductsCard() {
   
    const history = useHistory();
   const handleClick =(e)=> {
       e.preventDefault();
       history.push('/product')
   }
    return (
        <div className="cardTitle">
            
              <div className="title"> <h1 >BEST SELLERS</h1> </div>
          
           
                <div className="scCard" onClick={handleClick}>
                    
                    {CardData.products.map((product) => (
                        <li key={product._id}>
                            <div className="cardimg">
                                 <img  src={product.image} alt={product.image} 
                                style={{ width: ' 100%' }} />
                                <h4>{product.name}</h4>
                            </div>
                            <div className="price">
                                <h4>Price: ${product.price}</h4>
                            </div>
                        </li>
                    ))}
                    
                
                    
            </div>
                <div className="btnse" >
                    <button><Link to='/product'>See All Products</Link></button>
                    </div>
        </div>
    );
}
