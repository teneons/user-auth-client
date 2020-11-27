import React, { Component } from 'react';
import SignIn from '../SignIn/SignIn';

export default class Body extends Component {

  render() {

    return (
      <div className='container-fluid bg-light d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
        <div class="accordion accordion-flush container rounded bg-secondary col-6" id="accordionFlushExample">

          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button class="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Hello
              </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-parent="#accordionFlushExample">
              <div className='d-flex justify-content-center'>
                <div class="accordion-body col-9">
                  Hello
                </div>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button class="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Sign In
              </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-parent="#accordionFlushExample">
              <div className='d-flex justify-content-center'>
                <div class="accordion-body col-7">
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