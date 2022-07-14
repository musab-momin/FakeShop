import React from "react"
import { Link } from "react-router-dom"
import '../assets/styles/home.css'

const Product = ({ list })=>{
    return(
        <>
            {
                list.map(ele=>{
                    const{ id, title, description, image } = ele
                    return(
                        <Link to={`/product/${id}`} className="card" key={id} >
                            <div className="card__head">
                                <img src = { image }  alt="#" />
                            </div>
                            <div className="card__body">
                                <h3>{ title }</h3>
                                <div>
                                    <p> {description.substr(0, 130)} </p>
                                </div>
                            </div>
                        </Link>

                    )
                })
            }
        </>
    )
}


export default Product