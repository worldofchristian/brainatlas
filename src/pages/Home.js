import React from 'react'

const Home = () => {
  return (
    <>
    <div 
    className="hero min-h-screen" 
    style={{ backgroundImage: `url("https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWJzdHJhY3QlMjBkYXJrfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60")` }}>
        <div 
        className="hero-overlay bg-opacity-60"></div>
        <div 
        className="hero-content text-center text-neutral-content">
            <div 
            className="max-w-md">
                <h1 
                className="mb-5 text-6xl font-bold"
                >Brain Atlas</h1>
                
                <p 
                className="mb-5 text-lg"
                >A visualization app for fMRI data</p>
                
                <div
                className='flex flex-col mt-12'>
                    <button 
                    className="btn btn-primary"
                    >Sign up</button>

                    <button
                    className='btn btn-secondary mt-4'
                    >Learn more</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home