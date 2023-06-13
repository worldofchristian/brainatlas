import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const Home = () => {
  // initialize a ref for the learn more button 
  const learnRef = useRef(null);

  // state for the question tabs
  const [activeQuestion, setActiveQuestion] = useState('');

  // data for the question tabs
  const questions = [
  {
    question: 'What does BrainAtlas do?',
    answer: 'BrainSketch processes voxel data into a suitable format for 3D rendering.',
  },
  {
    question: 'Which file formats are supported?',
    answer: 'Only .nii files are supported.',
  },
  {
    question: 'Where can I get the app?',
    answer: 'The app will be available on iOS and Android early 2024. New features can be previewed on the live demo.',
  },
]

  // load to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // handler for learn more button
  const handleLearnMoreClick = () => {
    learnRef.current.scrollIntoView({ behavior: 'smooth' });
    };

  // handler for question tabs state
  const toggleQuestion = (question) => {
    setActiveQuestion((prevQuestion) => (prevQuestion === question ? '' : question));
    };

  return (
    <>
    <div 
    className="hero min-h-screen" 
    style={{ backgroundImage: `url("https://images.unsplash.com/photo-1522124624696-7ea32eb9592c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80")` }}>
      <div 
      className="hero-overlay bg-opacity-65"></div>
      <div 
      className="hero-content text-center text-neutral-content">
        <div 
        className="max-w-md">
          <h1 
          className="mb-8 text-5xl text-white font-black"
          >A visualization app for fMRI data</h1>
          
          <button 
          className="btn btn-primary"
          onClick={handleLearnMoreClick}
          >Learn more</button>
        </div>
      </div>
    </div>

    <div
    className='bg-gray-100'
    id='learn'
    ref={learnRef}>
      <div
      className='flex items-center justify-center p-4'>
        <div 
        className="max-w-md mt-20 mb-40">
          <Player
          autoplay
          speed={1}
          loop
          src="https://assets5.lottiefiles.com/packages/lf20_JOOrXc3YFe.json"
          style={{ height: '300px', width: '300px' }}>
          </Player>

          <h2 
          className="my-12 text-4xl text-slate-700 text-center font-black"
          >User-friendly brain imaging</h2>

          <p
          className='my-8 text-lg text-slate-700 text-center'
          >Upload a .nii file and view it as a 3D rendering, or browse from an open source library</p>
        </div>
      </div>
    </div>

    <div
    className='flex flex-col items-center justify-center'>
      <h2
      className="mt-40 text-4xl text-center font-black"
      >Try it out</h2>

      <p
      className='my-8 text-lg text-center'
      >See a live demo, no sign up required</p>

      <button
      className='btn btn-primary'
      >View demo</button>
    </div>

    <div
    className='flex items-center justify-center'>
        <div 
        className="container max-w-4xl mt-28 px-4 py-6">
        {questions.map((q, index) => (
            <div 
            key={index} 
            className="mb-6">
                <button
                className="flex items-center justify-between w-full bg-base-200 px-4 py-4 rounded-md"
                onClick={() => toggleQuestion(q.question)}>

                <span 
                className="text-lg font-medium"
                >{q.question}</span>
                
                <svg
                className={`w-6 h-6 transition-transform duration-300 transform ${
                    activeQuestion === q.question ? 'rotate-90' : 'rotate-0'
                    }`}
                    viewBox="0 0 24 24"
                    fill="currentColor">
                <path
                d="M9 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round" />
                </svg>
                </button>

                {activeQuestion === q.question && (
                <div 
                className="mt-2">
                  <div 
                  className="flex my-4 items-center justify-between">
                    <p 
                    className="text-lg text-center"
                    >{q.answer}</p>
                  </div>
                </div>
                )}
            </div>

        ))}
        </div>
    </div>
    </>
  )
}

export default Home