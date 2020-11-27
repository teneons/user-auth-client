import React, { Component } from 'react';
import SignIn from '../SignIn/SignIn';

export default class Body extends Component {

  render() {

    return (
      <div className='container-fluid bg-light d-flex justify-content-center align-items-center' style={{height: '100vh'}}>
        <div className='container rounded bg-secondary'>
          <div className="row">
            <div className="col-sm">
              Hello
            </div>
            <div className="col-sm">
              <SignIn />
            </div>
          </div>
        </div>
      </div>
    )
  }
}