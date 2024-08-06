import React from 'react'

function Navbar() {
    return (
        <>
        <div className='navbar w-full h-20'>
            <nav className=' h-20 flex flex-row items-center px-10 justify-between'>
                <h1 className='font-extrabold text-2xl'>Title</h1>
                <input type="search" name="" id="" placeholder='Search' className='w-2/6 translate-x-24 h-10 rounded-3xl px-4 text-sm border-solid border-2 border-blue-400' />
                <div className="section flex space-x-4">
                    <div className="cart1 px-5 py-2 bg-blue-400 rounded-3xl text-lg font-semibold text-white">
                        <a href="/">Logout</a>
                    </div>
                    <div className="cart2 px-4 py-3 bg-blue-400 rounded-3xl">
                        <i class="fa-solid fa-cart-shopping fa-lg text-white"></i>
                    </div>
                    <div className="cart3 px-4 py-3 bg-blue-400 rounded-3xl">
                        <i class="fa-solid fa-user fa-lg text-white"></i>
                    </div>
                </div>
            </nav>
        </div>
        </>
    )
}

export default Navbar
