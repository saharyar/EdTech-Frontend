import React from 'react'
import image1 from "../assets/image-1.png"
import Group1 from "../assets/Group-1.png"
import Group2 from '../assets/Group2.png'
import Elipse1 from '../assets/Ellipse1.png'
import Elipse2 from '../assets/Ellipse2.png'
import Elipse3 from '../assets/Ellipse3.png'
import Rate1 from '../assets/rate1.png'


const Home = () => {
  return (
    <section className="w-full bg-[#D2E6E4] relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:px-6 py-6 flex flex-col lg:flex-row items-center">
    
    {/* Left Content */}
    <div className="lg:w-1/2 flex flex-col gap-4 text-center lg:text-left">
      <span className="lg:w-[200px] bg-white px-3 py-1 rounded-md text-sm font-medium">Never stop learning</span>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B7077] leading-tight">
        Crack IELTS with Confidence
      </h1>
      <h2 className="text-3xl sm:text-2xl lg:text-3xl font-bold text-[#0B7077] leading-tight">
        Live classes, expert feedback, and AI-powered band prediction
      </h2>
       <div className="flex items-center gap-2">
      <button className=" lg:w-[200px] mt-4 px-6 py-3 bg-[#FD661F] text-white rounded-md font-semibold hover:bg-[#e65512] transition">
        ENROLL NOW
      </button>

      {/* Student avatars + reviews */}
    <div class="relative w-full h-10">
  <img src={Elipse1} class="absolute left-0 top-0 w-20 h-20 object-cover rounded-lg z-10"/>
  <img src={Elipse2} class="absolute left-15 top-0 w-20 h-20 object-cover rounded-lg z-10"/>
  <img src={Elipse3} class="absolute left-27 top-0 w-20 h-20 object-cover rounded-lg z-10"/>
  <img className='absolute left-50 h-15 gap-0' src={Rate1} alt='rate'/>
  </div>

      </div>
    </div>

    {/* Right Content */}
    <div className=" lg:w-1/2 mt-0 lg:mt-0 relative flex justify-center lg:justify-end">
      <img src={image1} className="w-[280px] sm:w-[400px] md:w-[500px] lg:w-[550px] h-auto rounded-[40px]" />

      {/* Overlay Card */}
      <div className="absolute top-70 left-0 px-4 py-2 rounded-lg  flex items-center gap-2">
     <img src={Group2} className="w-[200px] h-[70px] left-[720px] top-[442px]"/>
      </div>
    </div>
  </div>

  {/* Bottom Center Play Circle */}
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-8 w-24 h-24 bg-[#0B7077] rounded-full flex items-center justify-center text-white text-sm font-medium">
<img src={Group1} alt=''/>
  </div>
</section>

  )
}

export default Home
