import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import FramerSlide from '../Common/FramerSlide'
import '../../styles/ContactUs.css'
import InformationPage from '../Common/InformationPage';

import MapImg from '../../img/AquaMap.png'
import Footer from '../Footer/Footer';
function ContactUsForm() {

  // Styles for transition page
  const baseStyles = {
    color: "transparent",
    textTransform: "uppercase",
    fontWeight: "700",
    WebkitTextStroke: "3px #D0D3D4",
    textStroke: "3px #D0D3D4"
  }

  const desktopStyles = {
    ...baseStyles,
    fontSize: "8rem"
  }

  const mobileStyles = {
    ...baseStyles,
    fontSize: "3rem"
  }

  // State to hold form values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    bedrooms: {
      studio: false,
      oneBed: false,
      twoBed: false,
    },
    leaseStartDate: '',
    pets: {
      yes: false,
      no: false
    },
    parking: {
      yes: false,
      no: false,
    },
    attribution: '',
  });

  // Handle input change for text, email, and select fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle checkbox changes (bedrooms selection)
  const handleCheckboxChange = (e) => {
    const { name, checked, id } = e.target;
    console.log(id)
    console.log(name)
    console.log(checked)
    setFormData((prevData) => ({
      ...prevData,
      [id]: {
        ...prevData[id],
        [name]: checked,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log(formData);
    // Reset form after submission (optional)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      budget: '',
      bedrooms: {
        studio: false,
        oneBed: false,
        twoBed: false,
      },
      leaseStartDate: '',
    });
  };

  return (
    <AnimatePresence mode='wait'>
      <FramerSlide text="Contact Us" desktopTextStyles={desktopStyles} mobileTextStyles={mobileStyles} />
      <Row className="contact-us-container">
        <Col xs={12} md={12} lg={6} xl={6} className="contact-us-col contact-us-col-left">
        <h1 className="contact-us-title">Contact Us</h1>
        {/* <h1 className="contact-us-address">54 Flagship Street, Bayonne, NJ 07002</h1> */}
         {/* Form */}
         <Form onSubmit={handleSubmit}>
              {/* Name */}
              <Form.Group controlId="Name">
                <Form.Control
                  type="text"
                  placeholder="Name*"
                  name="name"
                  className="contact-us-form-control"
                  value={formData.name}
                  onChange={handleInputChange}
                  required={true}
                />
              </Form.Group>

              {/* Email */}
              <Form.Group controlId="email">
                <Form.Control
                  type="email"
                  placeholder="Email*"
                  name="email"
                  className="contact-us-form-control"
                  value={formData.email}
                  onChange={handleInputChange}
                  required={true}
                />
              </Form.Group>

              {/* Phone */}
              <Form.Group controlId="phone">
                <Form.Control
                  type="text"
                  placeholder="Phone Number*"
                  name="phone"
                  className="contact-us-form-control"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              {/* Budget */}
              <Form.Group controlId="budget">
                <Form.Control
                  as="select"
                  name="budget"
                  className='contact-us-form-control'
                  value={formData.budget}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Your Budget*</option>
                  <option value="500">$2,000-$2,500</option>
                  <option value="1000">$2,500-$3,000</option>
                  <option value="1500">$3,000-$3,500</option>
                  <option value="2000">$3,500-$4,000</option>
                  <option value="2000">$4,000+</option>
                </Form.Control>
              </Form.Group>

              {/* Bedrooms */}
              <Form.Group controlId="bedrooms">
                <Form.Label className="contact-us-form-label">What Apartment Are You Interested In?*</Form.Label>
                <div className="d-flex">
                  <Form.Check
                    type="checkbox"
                    label="Studio"
                    name="studio"
                    className='contact-us-form-control'
                    checked={formData.bedrooms.studio}
                    onChange={handleCheckboxChange}
                    inline
                    required
                  />
                  <Form.Check
                    type="checkbox"
                    label="1-Bed"
                    name="oneBed"
                    className='contact-us-form-control'
                    checked={formData.bedrooms.oneBed}
                    onChange={handleCheckboxChange}
                    inline
                  />
                  <Form.Check
                    type="checkbox"
                    label="2-Bed"
                    name="twoBed"
                    className='contact-us-form-control'
                    checked={formData.bedrooms.twoBed}
                    onChange={handleCheckboxChange}
                    inline
                  />
                </div>
              </Form.Group>

              {/* Pets */}
              <Form.Group controlId="pets">
                <Form.Label className="contact-us-form-label">Do You Have Any Pets?</Form.Label>
                <div className="d-flex">
                  <Form.Check
                    type="checkbox"
                    label="Yes"
                    name="yes"
                    className='contact-us-form-control'
                    checked={formData.pets.yes}
                    onChange={handleCheckboxChange}
                    inline
                  />
                  <Form.Check
                    type="checkbox"
                    label="No"
                    name="no"
                    className='contact-us-form-control'
                    checked={formData.pets.no}
                    onChange={handleCheckboxChange}
                    inline
                  />
                </div>
              </Form.Group>

              {/* Parking */}
              <Form.Group controlId="parking">
                <Form.Label className="contact-us-form-label">Do You Need Parking?</Form.Label>
                <div className="d-flex">
                  <Form.Check
                    type="checkbox"
                    label="Yes"
                    name="yes"
                    className='contact-us-form-control'
                    checked={formData.parking.yes}
                    onChange={handleCheckboxChange}
                    inline
                  />
                  <Form.Check
                    type="checkbox"
                    label="No"
                    name="no"
                    className='contact-us-form-control'
                    checked={formData.parking.no}
                    onChange={handleCheckboxChange}
                    inline
                  />
                </div>
              </Form.Group>

              {/* Lease Start Date */}
              <Form.Group controlId="leaseStartDate">
                <Form.Label className="contact-us-form-label">Preferred Move-In Date*</Form.Label>
                <Form.Control
                  type="date"
                  name="leaseStartDate"
                  className='contact-us-form-control'
                  value={formData.leaseStartDate}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              {/* How did you hear about us? */}
              <Form.Group controlId="attribution">
                <Form.Control
                  as="select"
                  name="attribution"
                  className='contact-us-form-control'
                  value={formData.attribution}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">How Did You Hear About Us?</option>
                  <option value="REFERRAL">REFERRAL</option>
                  <option value="SOCIAL MEDIA">SOCIAL MEDIA</option>
                  <option value="REALTOR">REALTOR</option>
                  <option value="OTHER">OTHER</option>
                </Form.Control>
              </Form.Group>

              {/* Submit Button */}
              <Button variant="primary" type="submit" className="contact-us-submit-button">
                Submit
              </Button>
            </Form>
        
        </Col>
        <Col xs={12} md={12} lg={6} xl={6} className="contact-us-col contact-us-col-right">
          <div className="contact-us-map">
            <iframe width="100%" height="100%" frameborder="0" allowFullScreen="true" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=1000&amp;hl=en&amp;q=54%20Flagship%20Street,%20Bayonne%20NJ+(Aqua)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
        </Col>
      </Row>
      <Footer />
    </AnimatePresence>
  );
}

export default ContactUsForm;