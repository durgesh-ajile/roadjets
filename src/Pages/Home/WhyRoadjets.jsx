import React from 'react'
import icon from '../../assets/Icon.svg'
const WhyRoadjets = () => {
  return (
    <div className='whyroadjets'>
        <div className="head-serve">
          <div>
          <h1>Why Choose RoadJets</h1>
          <p> At Roadjets, we stand as more than just a connecting platform – we are a service provider<br/>
with a deep commitment</p>
          </div>
          <div>
            <button className='white-btn'>View All</button>
          </div>
        </div>
        <div className="why-all">
            <div className="why-model">
                <div className="number">
                    01
                </div>
                <div className="why-layer2">
                    <h3>
                    Door-Step Services 
                    </h3>
                    <p>At Roadjets, we understand that the journey begins and ends at your doorstep.</p>
                </div>
                <div className='arrow-img'>
                    <img src={icon}/>
                </div>
            </div>
            <div className="why-model"  id='white-back'>
                <div className="number">
                    02
                </div>
                <div className="why-layer2">
                    <h3>
                    Revolutionizing The Route</h3>
                    <p>We understand travelers value ORR, as they offer respite from traffic noise and air pollution.</p>
                </div>
                <div className='arrow-img'>
                    <img src={icon}/>
                </div>
            </div>
            <div className="why-model" >
                <div className="number">
                    03
                </div>
                <div className="why-layer2">
                    <h3>
                    Zero Minute Waiting</h3>
                    <p>Once a ride is booked, passengers can expect an immediate departure.</p>
                </div>
                <div className='arrow-img'>
                    <img src={icon}/>
                </div>
            </div>
            <div className="why-model" id='white-back'>
                <div className="number">
                    04
                </div>
                <div className="why-layer2">
                    <h3>
                    Money-Back For Cancellations</h3>
                    <p>Passengers can trust that their payment will be promptly refunded.</p>
                </div>
                <div className='arrow-img'>
                    <img src={icon}/>
                </div>
            </div>
            <div className="why-model">
                <div className="number">
                    05
                </div>
                <div className="why-layer2">
                    <h3>
                    Free Ride Guarantee</h3>
                    <p>We go a step further by offering a free ride in case of any cancellations.</p>
                </div>
                <div className='arrow-img'>
                    <img src={icon}/>
                </div>
            </div>
            <div className="why-model"  id='white-back'>
                <div className="number">
                    06
                </div>
                <div className="why-layer2">
                    <h3>
                    Ensuring Definite Ride</h3>
                    <p>once we confirm a ride, we ensure passengers reach their destination.</p>
                </div>
                <div className='arrow-img'>
                    <img src={icon}/>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default WhyRoadjets