import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import style from './SavedJobs.css'
import Share from './Assets/ShareiconBlack.png'
import Save from './Assets/SaveiconBlue.png'
import Save2 from './Assets/SaveiconBlack.png'
import Google from './Assets/Google.png'
import Twitter from './Assets/TwitterX.png'
import Amazon from './Assets/Amazon.png'
import LinkedIn from './Assets/LinkedIn.png'


const SavedJobs = () => {
  return (
    <div className="wrapper">
        <div className="container">
            <div className="Title-text">
                <h1 className='TitleText'>Saved</h1>
            </div>
            <div className="Content">
                <div className="Card">
                  <div className="Company_Logo">
                    <img src= {Google} width={70}/>
                  </div>
                  <div className="card_content">
                    <div className="details">
                      <h3>Senior UI Designer</h3>
                      <h4 className='CompanyName'>Google</h4>
                      <p className='JobRole'>We are looking for a young trained designer to help us to create stunning websites and apps</p>
                      <div className="btn">
                        <button>Apply Now</button>
                        <img src={Save} width={65} height={65}/>
                      </div>
                    </div>
                    <div className="Right_Content">
                      <div className="Icons">
                        <img src={Share} width={50} />
                      </div>
                      <div className="Time">
                        <h3 className='Time'>20hrs ago</h3>
                      </div>
                    </div>
                  </div>
                </div> 
                <div className="Card">
                  <div className="Company_Logo">
                    <img src= {Twitter} width={330}/>
                  </div>
                  <div className="card_content">
                    <div className="details">
                      <h3>UI/UX Designer</h3>
                      <h4 className='CompanyName'>Twitter</h4>
                      <p className='JobRole'>We are looking for a young trained designer to help us to create stunning websites and apps</p>
                      <div className="btn">
                        <button>Apply Now</button>
                        <img src={Save} width={65} height={65}/>
                      </div>
                    </div>
                    <div className="Right_Content">
                      <div className="Icons">
                        <img src={Share} width={50} />
                      </div>
                      <div className="Time">
                        <h3 className='Time'>4 Days ago</h3>
                      </div>
                    </div>
                  </div>
                </div> 
                <div className="Card">
                  <div className="Company_Logo">
                    <img src= {Amazon} width={330}/>
                  </div>
                  <div className="card_content">
                    <div className="details">
                      <h3>Junior UI/UX Desiner</h3>
                      <h4 className='CompanyName'>Amazon</h4>
                      <p className='JobRole'>We are looking for a young trained designer to help us to create stunning websites and apps</p>
                      <div className="btn">
                        <button>Apply Now</button>
                        <img src={Save} width={65} height={65}/>
                      </div>
                    </div>
                    <div className="Right_Content">
                      <div className="Icons">
                        <img src={Share} width={50} />
                      </div>
                      <div className="Time">
                        <h3 className='Time'>20hrs ago</h3>
                      </div>
                    </div>
                  </div>
                </div> 
                <div className="Card">
                  <div className="Company_Logo">
                    <img src= {LinkedIn} width={280}/>
                  </div>
                  <div className="card_content">
                    <div className="details">
                      <h3>UI Developer</h3>
                      <h4 className='CompanyName'>LinkedIn</h4>
                      <p className='JobRole'>We are looking for a young trained designer to help us to create stunning websites and apps</p>
                      <div className="btn">
                        <button>Apply Now</button>
                        <img src={Save} width={65} height={65}/>
                      </div>
                    </div>
                    <div className="Right_Content">
                      <div className="Icons">
                        <img src={Share} width={50} />
                      </div>
                      <div className="Time">
                        <h3 className='Time'>20hrs ago</h3>
                      </div>
                    </div>
                  </div>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default SavedJobs