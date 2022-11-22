import { useState } from 'react';
import Pc from "../Img/pcportable.jpg"
import Velo from "../Img/velo.jpg"
import Xbox from "../Img/xbox.jpg"
import Ps5 from "../Img/ps5.jpg"


const ProductList = () => {


  const [items] = useState([
    {
      id: 1,
      name: "PcPortable",
      price: 108,
     imgUrl: Pc,
    },
    {
      id: 2,
      name: "Velo",
      price: 1400,
      imgUrl: Velo,
    },
    {
      id: 3,
      name: "Xbox",
      price: 300,
      imgUrl: Xbox,
    },
    {
      id: 4,
      name: "Ps5",
      price: 1000,
      imgUrl: Ps5,
    },
    {
        id: 5,
        name: "PcPortable",
        price: 108,
       imgUrl: Pc,
      },
      {
        id: 6,
        name: "Velo",
        price: 1400,
        imgUrl: Velo,
      },
      {
        id: 7,
        name: "Xbox",
        price: 300,
        imgUrl: Xbox,
      },
      {
        id: 8,
        name: "Ps5",
        price: 1000,
        imgUrl: Ps5,
      },
      {
        id: 9,
        name: "Xbox",
        price: 1000,
        imgUrl: Xbox,
      },
   ]);
  
   return(
    <div >
 
<div className="products">
 {items.map((item)=>(
 
 
 <div className="product" >
  
   
    <h3>{item.name}</h3>
   <img src={item.imgUrl}/> 
    <h4>{item.price} $</h4>
  
    
</div>
 ))}

</div>

</div>

   
  )

  
};
  


  

  export default ProductList;