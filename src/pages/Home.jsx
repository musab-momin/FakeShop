import React, { useEffect, useRef, useState } from "react"
import Header from '../components/Header'
import {RiArrowDropDownLine} from 'react-icons/ri'
import Product from "../components/Product"
import '../assets/styles/home.css'

const Home = ()=>{

    const[loading, setLoading] = useState(false)
    const[allProducts, setAllProducts] = useState([])
    const[products, setProducts] = useState([])
    const[category, setCategory] = useState({ mens: false, womens: false, electronics: false, jewelery: false })
    const filters = useRef(null)

    const toggleFilters = ()=>{
        filters.current.classList.toggle('active')
    }

    const doFilter = ()=>{
        const filteredProducts = allProducts.filter((ele)=>{
            if(category.mens && ele.category === "men's clothing")
                return ele
                
            if(category.womens && ele.category === "women's clothing")
                return ele
                
            if(category.electronics && ele.category === "electronics")
                return ele
                
            if(category.jewelery && ele.category === "jewelery")
                return ele
                
            })
        filteredProducts.length > 0 ? setProducts(filteredProducts) :  setProducts(allProducts)
    }

    const handleChange = (evenet)=>{
        const{name} = evenet.target;
        setCategory({ ...category, [name]: !category[name] })
    }


    const fetchProducts = async()=>{
        setLoading(true)
        try{
            const response = await fetch('https://fakestoreapi.com/products')
            if(response.status === 200){
                const data = await response.json()
                setAllProducts(data)
                setProducts(data)
                setLoading(false)
            }else{
                setLoading(false)
            }


        }catch(error){
            setLoading(false)
            console.error(`Got this error which fetching products ${error}`)
        }
    }

    useEffect(()=>{
        fetchProducts()
    }, [])

    useEffect(()=>{
        doFilter()
    }, [category])

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
                <div className="filters active" ref={filters}>
                    <div className="filters__drop-down">
                        <h3>Filters</h3>
                        <RiArrowDropDownLine size={25} onClick={toggleFilters}/>
                    </div>
                    <div className="filters__checkboxes">
                        {
                            Object.keys(category).map(ele=>{
                                return(
                                    <div className="filters__checkbox" key={ele}>
                                        <input 
                                        type='checkbox' 
                                        id={ele}
                                        name={ele}
                                        value={category[ele]}
                                        checked={category[ele]}
                                        onChange={(event)=>{ handleChange(event)}}
                                        />
                                        <label htmlFor={ele} className='lbl'>{ele}</label>
                                    </div>
                                )
                            })

                        }
                    </div>
                </div>
                <div className="products">
                    {
                        allProducts.length > 0
                        ?
                        <Product list={ products } />
                        :
                        <h2>Something went wrong. Please try again!</h2>
                    }
                    
                </div>        
            </main>
        </>
    )
}



export default Home;