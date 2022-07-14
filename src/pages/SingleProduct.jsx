import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import '../assets/styles/single.css';
import {AiFillStar} from 'react-icons/ai'

const SingleProduct = ()=>{
    const{ id } = useParams();
    const[loading, setLoading] = useState(false)
    const[productDetails, setProductDetails] = useState(null)


    const fetchProducts = async()=>{
        setLoading(true)
        try{
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            if(response.status === 200){
                const data = await response.json()
                setProductDetails(data)
                setLoading(false)
            }else{
                setLoading(false)
                setProductDetails(null)
            }


        }catch(error){
            setLoading(false)
            setProductDetails(null)
            console.error(`Got this error which fetching products ${error}`)
        }
    }


    useEffect(()=>{
        fetchProducts()
    }, [])

    if(loading){
        return(
            <>
                <Header />
                <p className="loader">Please Wait...</p>
            </>
        )
    }

    return(
        <>
            <Header />
            <main className="main">
                {
                    productDetails
                    ?
                    <section className="prod">
                    <div className="prod__img-div">
                        <img src={ productDetails.image } alt="#" className="prod__img"/>
                    </div>
                    <div className="prod__detail">
                        <div>
                            <h3>{ productDetails.title }</h3>
                            <p> <AiFillStar size={20} className='star'/> { productDetails.rating.rate } Rating</p>
                        </div>
                        <div>
                            <h1><span style={{ fontSize: '16px' }}>R$</span>{ productDetails.price }</h1>
                        </div>
                        <div>
                            <p> { productDetails.description } </p>
                        </div>
                        <div>
                            <button className="cart-btn">Add To Cart</button>
                        </div>
                    </div>
                </section>
                    :
                    <h2>Something went wrong. Please try again!</h2>
                }
               

            </main>
        </>
    )
}



export default SingleProduct;