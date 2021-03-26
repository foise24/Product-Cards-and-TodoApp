import React from 'react';
import './product-card.css'
const products=[
    {
        id: "product1",
        title: "Lorus Ipsum1",
        price: "$500",
        imgUrl: "./iphone_12_pro.jpg"  
    },
    {
        id: "product2",
        title: "Lorus Ipsum2",
        price: "$600",
        imgUrl: "./iphone_12.jpg"  
    },
    {
        id: "product3",
        title: "Lorus Ipsum3",
        price: "$700",
        imgUrl: "iphone_se.jpg"  
    }
]
class Productcard extends React.Component{
    render(){
        return(
            products.map((items) => {
                return(
                    <div className="product-card" key={items.id}>
                        <div className="cards">
                        <img src={items.imgUrl} alt="img" />
                        <h1>{items.title}</h1>
                        <p><strong>{items.price}</strong></p>
                        <button>Add to Cart</button>
                        </div>
                    </div>
                );
            })
        );
    }
} 
export default Productcard;