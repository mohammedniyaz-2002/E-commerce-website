import React from 'react'
import './Home.css'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import img1 from '../img/boys-jacket-1000x1000-removebg-preview.png'
import img2 from '../img/headphone-blue_1-1000x1000-removebg-preview.png'

function Home() {
    const homestyle = {
        width: '100vw',
        height: '90vh',
    }
    return (
        <>
        <div className='flex' style={homestyle}>
            <div className='left w-2/4 flex justify-center items-center flex-col space-y-10 '>
                <h1 className='text-6xl font-extralight w-2/7 mt-20 ml-12 whitespace-pre-line'>Head Phones Running out off discount upto 50%</h1>
                <div className="empty bg-red-400 ">
                    <h2 className='z-50 text-4xl text-white font-extralight pb-14 '>Updated Prodects:</h2>
                    <div className="slide1 "></div>
                    <div className="slide2 "></div>
                    <div className="slide3 "></div>
                    <div className="slide4 "></div>
                </div>
            </div>
            <div className='right w-2/4 flex justify-center items-center'>
                <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay={{ delay: 2000 }}
                        loop={true}
                        // navigation
                        // pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        className='Swiper'
                        >
                        <SwiperSlide ><img src={img1} alt="" className='jacket'/></SwiperSlide>
                        <SwiperSlide ><img src={img2} alt="" className='headphone '/></SwiperSlide>
                        <SwiperSlide >Slide 3</SwiperSlide>
                        <SwiperSlide >Slide 4</SwiperSlide>
                        {/* ... */}
                </Swiper>
                {/* <img src={img2} alt="" /> */}
            </div>
        </div>
        {/* <div className='flex' style={homestyle}>
            <div className='left w-2/4 flex justify-center items-center flex-col '>
                <h1 className='text-6xl font-extralight w-2/7 mb-72 '>Head Phones Running out off discount upto 50%</h1>
                <div className="empty w-2/3 h-1/2 mr-96 bg-red-400 absolute bottom-0 rounded-t-full"></div>
            </div>
            <div className='right w-2/4 '>
                
            </div>
        </div> */}
        </>
    )
}

export default Home
