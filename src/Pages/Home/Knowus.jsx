import React from 'react'
import know from '../../assets/know.png'
import know1 from '../../assets/know1.png'
import know2 from '../../assets/know2.png'
import know3 from '../../assets/know3.png'
import know4 from '../../assets/know4.png'
import know5 from '../../assets/know5.png'
import know6 from '../../assets/know6.png'
import know7 from '../../assets/know7.png'

const Knowus = () => {
  return (
    <div className='knowus'>
        <div className="big-btn">
            <button>Know Us Better</button>
        </div>
        <div className="head-serve" style={{marginTop:"50px"}}>
          <div style={{width:"82%"}}>
          {/* <h1>Our Services</h1> */}
          <p>RoadJets places safety at the forefront of every journey, committed to delivering a secure and reliable travel experience. Our stringent safety measures, thorough driver vetting, and real-time monitoring ensure passengers can trust in the accountability of our service. With a dedication to excellence, RoadJets strives to set the highest standards for safety, making every road trip a dependable and worry-free adventure.</p>
          </div>
          <div>
            <button className='white-btn'>View All</button>
          </div>
        </div>
        <div className="knowmodel-cont">
        <div className="know-model mobile-yellow" id='know-model'>
          <div className="know1">
            <div className="know-img">
              {/* <img src={know} /> */}
              01
            </div>
            <p><span className='in-bold'>Expert Reliable Pilots </span> our pilots are more than drivers – they are dedicated professionals trained to provide a superior travel experience. Rigorous training programs ensure their expertise in safety, customer service, and efficient navigation.</p>
          </div>
          <div className="know2">
            <div className="expert">
            Expert Reliable Pilots 
            </div>
            <div className="read">
            Read Full Article
            </div>
          </div>

        </div>
        <div className="know-model mobile-white">
          <div className="know1">
            <div className="know-img">
              {/* <img src={know1} /> */}
              02
            </div>
            <p><span className='in-bold'> Proactive Issue Investigation </span> When an issue arises, be it minor inconveniences or unforeseen challenges, Roadjets is committed to investigating the matter promptly and comprehensively.</p>
          </div>
          <div className="know2">
            <div className="expert">
            Our Commitment in Times of Adversity            </div>
            <div className="read">
            Read Full Article
            </div>
          </div>

        </div>
        <div className="know-model mobile-yellow" >
          <div className="know1">
            <div className="know-img">
              {/* <img src={know2} /> */}
              03
            </div>
            <p><span className='in-bold'> Ensuring Women's Safety</span>  Roadjets is dedicated to ensuring the safety of all passengers, especially women. We recognize the concerns that women may have while traveling alone. the whole journey is monitored by CCTV’s</p>
          </div>
          <div className="know2">
            <div className="expert">
            Ensuring Women’s Safety           </div>
            <div className="read">
            Read Full Article
            </div>
          </div>

        </div>
        <div className="know-model mobile-white" id='know-model'>
          <div className="know1">
            <div className="know-img">
              {/* <img src={know3} /> */}
              04
            </div>
            <p><span className='in-bold'> Imposing Time Discipline </span>We take punctuality seriously and are unwavering in our commitment to providing punctual services. Our approach involves charging fines for both drivers and travelers in case of delays.</p>
          </div>
          <div className="know2">
            <div className="expert">
            Imposing Time Discipline            </div>
            <div className="read">
            Read Full Article
            </div>
          </div>

        </div>
        <div className="know-model mobile-yellow" id='know-model'> 
          <div className="know1">
            <div className="know-img">
              {/* <img src={know4} /> */}
              05
            </div>
            <p><span className='in-bold'> Compensation for Loss  </span>unexpected events can result in inconveniences and losses for passengers.we offer compensation for losses incurred due to issues that may arise during the journey.</p>
          </div>
          <div className="know2">
            <div className="expert">
            Compensation for Loss           </div>
            <div className="read">
            Read Full Article
            </div>
          </div>

        </div>
        <div className="know-model mobile-white">
          <div className="know1">
            <div className="know-img">
              {/* <img src={know5} /> */}
              06
            </div>
            <p><span className='in-bold'> Zero Tolerance For Disruptive Behaviour </span>By maintaining a "Zero Tolerance" approach towards disruptive behaviors, Roadjets aim to create a comfortable and respectful environment for all travelers.</p>
          </div>
          <div className="know2">
            <div className="expert">
            Zero Tolerance For Disruptive Behaviour            </div>
            <div className="read">
            Read Full Article
            </div>
          </div>

        </div>
        <div className="know-model mobile-yellow" >
          <div className="know1">
            <div className="know-img">
              {/* <img src={know6} /> */}
              07
            </div>
            <p><span className='in-bold'>  Personalized Experience </span> Roadjets recognizes the importance of a personalized experience. Passengers can specify their preferences for facilities, amenities, and any special requirements they may have.</p>
          </div>
          <div className="know2">
            <div className="expert">
            OPersonalized Experience             </div>
            <div className="read">
            Read Full Article
            </div>
          </div>

        </div>
        <div className="know-model mobile-white" id='know-model'>
          <div className="know1">
            <div className="know-img">
              {/* <img src={know7} /> */}
              08
            </div>
            <p><span className='in-bold'>  Immediate Response & Scheduling  </span>Roadjets place immense value on the immediate response and scheduling of rides,
recognizing that timely communication and efficient scheduling are crucial to delivering a top-tier experience</p>
          </div>
          <div className="know2">
            <div className="expert">
            Immediate Response & Scheduling            </div>
            <div className="read">
            Read Full Article
            </div>
          </div>

        </div>
        </div>
        
    </div>
  )
}

export default Knowus