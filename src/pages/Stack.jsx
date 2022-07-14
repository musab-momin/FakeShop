import React from "react"
import Header from "../components/Header";
import '../assets/styles/stack.css'
import {FaAngleDoubleRight } from 'react-icons/fa'

const Stack = ()=>{

    const tech = [
        {name: 'HTML', info: 'All the pages are HTML based.'},
        {name: 'CSS', info: 'I did not used Bootstrap here because I feel there is no need of it. I build this whole UI with CSS only and It is responsive.'},
        {name: 'React', info: 'I build these web pages with React. I used ReactIcons for icons and ReactRouterDom to make it one page application.'}
    ]



    return(
        <>
            <Header />
            <main className="container">
                <div className="wrapper">
                    <h2 className="heading">Tech<span style={{ color: 'var(--green500)' }}>Stack</span> </h2>
                    <div className="underline"></div>
                </div>
                <div className="info">
                    {
                        tech.map(ele=>{
                            const{name, info} = ele
                            return(
                                <p> 
                                    <FaAngleDoubleRight style={{ color:'var(--green500)'}}/>
                                    <span style={{ fontSize: 'var(--fs-600)', fontWeight: '500' }}>{name}</span> : {info}
                                </p>
                                  
                            )
                        })
                    }
    
                </div>
            </main>
        </>
    )
}



export default Stack;