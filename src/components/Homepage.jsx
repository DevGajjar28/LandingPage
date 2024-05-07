import React from 'react'
import {NavLink} from 'react-router-dom';
import i1 from '../assets/img1.jpg'
import i2 from '../assets/img2.jpg'
import i3 from '../assets/img3.jpg'


function Homepage() {
  return (
    <>
    <div className='bg'> 

    <div className='box words '>With every adventure, find yourself anew and create a
       tapestry of memories that will weave the story of your life.
       <button type='box-button' id='box-button'><NavLink to={"/Explore"}>Explore</NavLink></button>
       </div>
       </div>


       <div className='mid-content'>
    <main>
      <div className='content'>
        <span>discover</span>
        <h1>Top 5 places </h1>
        <hr/>
        <p>Beauty and mystery are hidden
           under the sea. Explore with our 
           application to know about Aquatic Animals.

        </p>
        <NavLink to={'/explore'}>Explore</NavLink>
      </div>
    </main>
    <div className='container'>
      <div className='carousel-container'>
        {/* image slider */}

       <div className='slider-frame'>
          <div className='slide-images'>
            <div className='img-container' >
              <img src={i1} style={{height:'100%',width:'100%',objectFit:'contain'}}></img>
            </div>
            <div className='img-container'>
              <img src={i2} style={{height:'100%',width:'100%',objectFit:'contain'}} ></img>
            </div>
            <div className='img-container'>
              <img src={i3}  style={{height:'100%',width:'100%',objectFit:'contain'}}></img>
            </div>

          </div>
       </div>

      </div>
    </div>
    </div>

{/* **************************Mid section ***********************************/}
<h4>Top Places</h4>
    <div className='mid'>
     
                <div className='boxmid'>
                  <img src="/images/paris.jpg" className='abc' style={{height:'100%',width:'100%',objectFit:'cover'}}/><h3>Paris</h3>
                  
                </div>
                <div className='boxmid'>
               <img src="/images/Bora Bora.jpg" className='abc' style={{height:'100%',width:'100%',objectFit:'cover'}}/><h3>bora bora</h3>
                </div>
                
                <div className='boxmid'>
               <img src="/images/national.jpg" className='abc' style={{height:'100%',width:'100%' ,objectFit:'cover'}}/><h3>Glacier National Park</h3>
                </div>
                <div className='boxmid'>
              <img src="/images/rome.jpg" className='abc' style={{height:'100%',width:'100%',objectFit:'cover'}}/><h3>rome</h3>
                </div>
                <div className='boxmid'>
              <img src="/images/maui.jpg" className='abc' style={{height:'100%',width:'90%',objectFit:'cover'}}/><h3>maui</h3>
                </div>
                <div className='boxmid'>
              <img src="/images/london.jpg" className='abc' style={{height:'100%',width:'100%',objectFit:'cover'}}/><h3>London</h3>
                </div>
                <div className='boxmid'>
                <img src="/images/tokyo.jpg" className='abc' style={{height:'100%',width:'100%',objectFit:'cover'}}/><h3>Tokyo</h3>
                </div>
                <div className='boxmid'>
                <img src="/images/Phuket.jpg" className='abc' style={{height:'100%',width:'100%',objectFit:'cover'}}/><h3>Phuket</h3>
                </div>
                <div className='boxmid'>
                <img src="/images/Costa Rica.jpg" className='abc' style={{height:'100%',width:'100%',objectFit:'cover'}}/><h3>Costa Rica</h3>
                </div>
                <div className='boxmid'>
                <img src="/images/Banff.jpg" className='abc' style={{height:'100%',width:'90%',objectFit:'cover'}}/><h3>Banff</h3>
                </div>

            </div>


            <div className='contact-container'>
      <div className='img_help'>
        <NavLink to={'/Homepage'} ></NavLink>
        <div className='contact'>
        <h2>get in touch</h2>
          <span>feel free to contact us if you have question,comments or suggestion</span>
          <div className='email'>
        <input type='email' id='mail' name='email' placeholder='Email' required></input>
        <button className='enter'>Enter</button>
       </div>
          </div>
       {/* <div className='email'>
        <input type='email' id='mail' name='email' placeholder='Email' required></input>
        <button className='enter'>Enter</button>
       </div> */}
      </div>

    </div>
    </>
  )
}

export default Homepage