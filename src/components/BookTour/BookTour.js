import React from 'react';
import FramerSlide from '../Common/FramerSlide'
import { desktopStyles, mobileStyles } from '../../configuration/framer-slide-styles';
import './BookTour.css';
import Footer from '../Footer/Footer';

export default function BookTour() {
  return (
    <div style={{ textAlign: 'center' }}>
      <FramerSlide text="Book A Tour" desktopTextStyles={desktopStyles} mobileTextStyles={mobileStyles} />
        <div className="book-a-tour-container" style={{ position: 'relative', paddingBottom: '50%', height: 0, overflow: 'hidden' }}>
          <iframe
            title="Calendly"
            src="https://calendly.com/ana-aquabayonne"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ position: 'absolute', top: 0, left: 0 }}
          ></iframe>
        </div>
        <Footer />
    </div>
  );
}
