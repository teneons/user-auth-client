import React, { Component } from 'react';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';


export default class Body extends Component {

  render() {

    return (
      <div className='container-fluid bg-secondary d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
       
        <div className="accordion accordion-flush container rounded bg-dark col-5 shadow-lg" id="accordionFlushExample">

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button className="accordion-button collapsed fw-bold text-white" type="button" data-toggle="collapse" data-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Sign Up
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-parent="#accordionFlushExample">
              <div className='d-flex justify-content-center'>
                <div className="accordion-body col-10">
                  <SignUp />
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed fw-bold text-white" type="button" data-toggle="collapse" data-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Sign In
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-parent="#accordionFlushExample">
              <div className='d-flex justify-content-center'>
                <div className="accordion-body col-8">
                  <SignIn />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    )
  }
}