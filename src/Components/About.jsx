import React, { useRef } from 'react'
import './About.css'

function About() {
    const reff = useRef(null);
    const a = ()=>{
        console.log(reff.current)
    }
    // const colorest = ()=>{
    //     setColor({
    //         backgroundColor:'red',
    //     })
    // }
    return (
        <div >
            <h1 className='about' ref={reff}>Hi i am About!</h1>
            <button onClick={a}>click here</button>
        </div>
    )
}

export default About
