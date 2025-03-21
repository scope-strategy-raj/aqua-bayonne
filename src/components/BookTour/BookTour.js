import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import FramerSlide from '../Common/FramerSlide'

const BookTour = () => {

  const baseStyles = {
    color: "transparent", 
    "text-transform": "uppercase",
    "font-weight": "700",
    "-webkit-text-stroke": "3px #D0D3D4",
    "text-stroke": "3px #D0D3D4"
  }

  const desktopStyles = {
    ...baseStyles,
    "font-size": "8rem"
  }

  const mobileStyles = {
    ...baseStyles,
    "font-size": "3rem"
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '0px' }}>
      <FramerSlide text="Book A Tour" desktopTextStyles={desktopStyles} mobileTextStyles={mobileStyles} />
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
          <iframe
            title="Calendly"
            src="https://calendly.com/raj-scopestrategy"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ position: 'absolute', top: 0, left: 0 }}
          ></iframe>
        </div>
    </div>
  );
};

export default BookTour;
