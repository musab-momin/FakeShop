import React from "react"
import Header from "../components/Header";
import {FaAngleDoubleRight } from 'react-icons/fa'



const About = ()=>{
    return(
        <>
            <Header />
            <main className="container">
                <div className="wrapper">
                    <h2 className="heading">About<span style={{ color: 'var(--green500)' }}>Me</span> </h2>
                    <div className="underline"></div>
                </div>
                <div className="info">
                        Hi there my name is Musab Momin I completed my graduation in
                        <b> Computer Science</b> in 2021 during my college years I did several certification courses like
                        java, python, javascript, Linux and couple off more.
                        After my graduation I got Internship as a <b>React developer.</b> My responsibilities were<br/>
                        
                        <p> 
                            <FaAngleDoubleRight style={{ color:'var(--green500)'}}/> Create well-designed, tested code using best practices for website development, including mobile and responsive site design.<br />
                        </p>
                        <p>
                        <FaAngleDoubleRight style={{ color:'var(--green500)'}}/> Create websites and user interfaces, using standard HTML/CSS practices, while incorporating data from back-end databases and services. <br />
                        </p>
                        <p>
                        <FaAngleDoubleRight style={{ color:'var(--green500)'}}/> Working with react framework.<br />
                        </p>
                        <p>
                        <FaAngleDoubleRight style={{ color:'var(--green500)'}}/> I build a chrome extension.<br />
                        </p>



                </div>
            </main>
        </>
    )
}



export default About;