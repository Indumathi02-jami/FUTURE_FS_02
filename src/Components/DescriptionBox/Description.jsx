import React from 'react'
import './Description.css'


const Description = () => {
  return (
    <div className='description'>
        <div className="description-navigator">
            <div className="description-nav-box">Description  </div>
            <div className="description-nav-box fade">Reviews (121)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
                An eCommerce website is a digital platform that enables businesses 
                and individuals to buy and sell products or services online. It offers
                 a convenient, 24/7 shopping experience where customers can browse categories,
                view detailed product descriptions and images, add items to a virtual cart, and 
                securely complete transactions using various payment methods. Behind the scenes, 
                eCommerce websites often include features like inventory management, order tracking, 
                user authentication, and personalized recommendations. By eliminating geographical barriers, 
                these websites expand market reach, reduce 
                operational costs, and provide valuable insights into customer behavior through analytics tools.
            </p>
            <p>An eCommerce website allows users to buy and sell products or services
                 online. It provides features like product listings, shopping carts, secure 
                 payments, and order tracking. Customers can shop anytime from anywhere, 
                 making it highly convenient. Businesses benefit by reaching a wider audience 
                 and reducing physical store costs.
            </p>
        </div>
    </div>
  )
}

export default Description