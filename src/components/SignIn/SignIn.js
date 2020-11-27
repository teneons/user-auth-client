import React, { Component } from 'react'


export default class SignIn extends Component {

  render() {

    const svgSgnIn = <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-door-open" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M1 15.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM11.5 2H11V1h.5A1.5 1.5 0 0 1 13 2.5V15h-1V2.5a.5.5 0 0 0-.5-.5z"/>
    <path fillRule="evenodd" d="M10.828.122A.5.5 0 0 1 11 .5V15h-1V1.077l-6 .857V15H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117z"/>
    <path d="M8 9c0 .552.224 1 .5 1s.5-.448.5-1-.224-1-.5-1-.5.448-.5 1z"/>
  </svg>

    return (
      <form>
        <div className='d-flex justify-content-center m-2'>
          <span className='display-6 text-white'>Sign <span className="badge bg-white text-secondary">In</span></span>
        </div>
        <div className="mt-3 form-floating">
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email address" />
          <label htmlFor="floatingInputGrid">Email address</label>
        </div>
        <div className="mt-3 form-floating">
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          <label htmlFor="floatingInputGrid">Password</label>
        </div>
        <div className='d-flex justify-content-center m-2'>
          <button type="submit" className="btn btn-outline-light">Sign in{svgSgnIn}</button>
        </div>
        </form>
    )
  }
}