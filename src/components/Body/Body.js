import React, { Component } from 'react';


export default class Body extends Component {

  render() {

    return (
      <div className='container-fluid bg-light d-flex justify-content-center align-items-center' style={{height: '100vh'}}>
        <div className='bg-secondary container d-flex justify-content-evenly'>
          <div class="row">
            <div class="col-sm">
              Hello
            </div>
            <div class="col-sm">
              Login
            </div>
          </div>
        </div>
      </div>
    )
  }
}