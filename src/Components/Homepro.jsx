import React, { useRef } from 'react'
import './Homepro.css'
import img1 from '../img/boys-jacket-1000x1000-removebg-preview.png'

const Homepro = (props) => {

    const scrollreff = useRef(null);
    const stopanimation = () =>{
        scrollreff.current.style.animationPlayState = "paused";
    }
    return (
        <div style={props.style}>
            <div className="production text-black" >
                <h1 className='newprodect text-8xl font-extrabold '>New Prodected</h1>
                <p className='text-xl mt-10 font-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, aspernatur. Officiis accusamus quasi, corrupti atque saepe recusandae! Ipsa, nobis consequuntur?</p>
                <button className='btn1 '>Check out more!</button>
            </div>
            <div className="slider w-11/12 h-60 rounded-full bg-slate-200 gap-14 overflow-hidden flex justify-center items-center">
                <div className="sliderscroll"  ref={scrollreff}>
                    <img src={img1} alt="" onMouseMove={stopanimation}/>
                    <img src={img1} alt="" onMouseMove={stopanimation}/>
                    <img src={img1} alt="" onMouseMove={stopanimation}/>
                    <img src={img1} alt="" onMouseMove={stopanimation}/>
                    <img src={img1} alt="" onMouseMove={stopanimation}/>
                    <img src={img1} alt="" onMouseMove={stopanimation}/>
                    <img src={img1} alt="" onMouseMove={stopanimation}/>
                    <img src={img1} alt="" onMouseMove={stopanimation}/>
                    <img src={img1} alt="" onMouseMove={stopanimation}/>
                    <img src={img1} alt="" onMouseMove={stopanimation}/>
                    <img src={img1} alt="" onMouseMove={stopanimation}/>
                    <img src={img1} alt="" onMouseMove={stopanimation}/>
                </div>
            </div>
        </div>
    )
}

export default Homepro
