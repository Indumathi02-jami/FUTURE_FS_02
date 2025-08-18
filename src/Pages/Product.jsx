import React, {useContext} from 'react'
import {ShopContext} from '../Context/ShopContex'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrum/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import Description from '../Components/DescriptionBox/Description'
import RealtiveProducts from '../Components/RelativeProducts/RealtiveProducts'



const Product = () => {

  const {all_product} = useContext(ShopContext)
  const {productId} = useParams()
  const product = all_product.find((e)=> e.id=== Number(productId))
  return (
    <div>
      <Breadcrum product = {product}/>
      <ProductDisplay product={product}/>
      <Description/>
      <RealtiveProducts/>
    </div>
  )
}

export default Product