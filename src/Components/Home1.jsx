import React,{ useRef } from 'react'
import './Home1.css';

function Home1() {
    const style = {
        width: '130vw',
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'black',
        transform: 'translateX(7%)',
        color:'white',
        perspective: '1000px',
    }

    const reffer1 = useRef(null);
    const reffer2 = useRef(null);
    const reffer3 = useRef(null);
    const reffer4 = useRef(null);
    const reffer5 = useRef(null);
    const reffer6 = useRef(null);
    
    const shadow = useRef(null);

    const transform1 = () =>{
        reffer1.current.style.transform = "translateZ(250px)";
        reffer2.current.style.transform = "translateY(-250px) rotateX(90deg)";
        reffer3.current.style.transform = "translateY(250px) rotateX(-90deg)";
        reffer4.current.style.transform = "translateZ(-250px) rotateY(-180deg)";
        reffer5.current.style.transform = "translateX(-250px) rotateY(-90deg)";
        reffer6.current.style.transform = "translateX(250px) rotateY(90deg)";
        reffer1.current.style.transition = "0.5s";
        reffer3.current.style.transition = "0.5s";
        reffer4.current.style.transition = "0.5s";
        reffer5.current.style.transition = "0.5s";
        reffer2.current.style.transition = "0.5s";
        reffer6.current.style.transition = "0.5s";

        shadow.current.style.transform = 'translateY(350px) rotateX(90deg)'
        shadow.current.style.perspective = '1000px'
    }

    const displayelement = useRef(null)
    const boxdisable = useRef(null)
    const onclickdisable = () =>{
            setTimeout(()=>{
                boxdisable.current.style.display = "none";
                shadow.current.style.display = "none";
                displayelement.current.classList.toggle('prodectionactive')
                // displayelement.current.style.transform = 'translateY(100px)'
                displayelement.current.style.transition = '2s'
            },1000)
    }
    return (
        <>
        <div className='container' style={style}>
            <div className="box" ref={boxdisable}>
                <div className="front" ref={reffer1}>
                    <h2><i className="fa-solid fa-question fa-xl"></i></h2>
                </div>
                <div className="top"  ref={reffer2}>
                    <h2><i className="fa-solid fa-question fa-xl"></i></h2>
                </div>
                <div className="bottom"  ref={reffer3}>
                    <h2><i className="fa-solid fa-question fa-xl"></i></h2>
                </div>
                <div className="back"  ref={reffer4}>
                    <h2><i className="fa-solid fa-question fa-xl"></i></h2>
                </div>
                <div className="right"  ref={reffer5}>
                    <h2><i className="fa-solid fa-question fa-xl"></i></h2>
                </div>
                <div className="left" ref={reffer6}>
                    <h2><i className="fa-solid fa-question fa-xl"></i></h2>
                </div>
            </div>
            <div className="box2" ref={shadow}></div>
            <div className="openBox" onClick={()=>{transform1();onclickdisable();}}></div>
            <div className="production text-black" ref={displayelement}>
                <h1 className='newprodect text-8xl font-extrabold '>New Prodected</h1>
                <p className='text-xl mt-10 font-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, aspernatur. Officiis accusamus quasi, corrupti atque saepe recusandae! Ipsa, nobis consequuntur?</p>
                <button className='btn1 '>Check out more!</button>
            </div>
        </div>
        {/* <div className="container2">
            
        </div> */}
        </>
    )
}

export default Home1
