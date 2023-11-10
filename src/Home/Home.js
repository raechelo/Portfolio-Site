import React from 'react';
import cactistreetart from '../assets/bg_images/cactistreetart.jpeg';


export default function Home() {
  return (
    <section className="Home">
      <nav>
        <hr className="horiz-line" />
        <h1>raechel odom</h1>
        <h2>front end engineer</h2>
        <hr className="horiz-line" />
      </nav>
      <img src={cactistreetart} alt="street art" className="Home-bg" />
    </section>
  )
}
