import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Images } from '../../utils/images';
import SGButton from '../Button';
import SGDropdown from '../Dropdown';
import './style.scss';
const SGFooter = () => {
  return (
    <Container className="sg-footer">
      <Row>
        <Col md={6} lg={3}>
          <p className="footer-title">PRODUCTS</p>
          <p><a href="/">Redeem Gift Cards</a></p>
          <p><a href="/">Types of Gift Card</a></p>
          <p><a href="/">Become a Merchant</a></p>
          <p><a href="/">Bulk Purchase</a></p>
          <p><a href="/">Group Gifting</a></p>
          <p><a href="/">Coperate Gifting</a></p>
        </Col>
        <Col md={6} lg={3}>
          <p className="footer-title">SUPPORT</p>
          <p><a href="/">How Gifts works</a></p>
          <p><a href="/">FAQs</a></p>
          <p><a href="/">Terms and cinditions</a></p>
          <p><a href="/">Delivery</a></p>
          <p><a href="/">Privacy Policy</a></p>
          <p><a href="/">Contact Us</a></p>
        </Col>
        <Col md={6} lg={2}>
          <p className="footer-title">COMPANY</p>
          <p><a href="/">About Gifts</a></p>
          <p><a href="/">Careers</a></p>
          <p><a href="/">Blog</a></p>
          <p><a href="/">Press Kit</a></p>
        </Col>
        <Col md={6} lg={4}>
          <p className="footer-title">NEWSLETTER</p>
          <p className="subscribe-title">Subscribe for more information</p>
          <p className="subscribe-description">Get daily information about our procut and services</p>
          <div className="send-email">
            <input placeholder="Enter email" className="email-input" />
            <SGButton type="gradient" text="Send" width={80} height={80} />
          </div>
          <Row className="languages">
            <SGDropdown
              className="picker"
              options={[
                { key: 'china', label: 'China' },
                { key: 'nigeria', label: 'Nigeria' },
                { key: 'japan', label: 'Japan' },
              ]}
              onSelect={(key) => console.log({ key })}
            >
              <span>English</span>
            </SGDropdown>
            <SGDropdown
              className="picker"
              options={[
                { key: 'china', label: 'China' },
                { key: 'nigeria', label: 'Nigeria' },
                { key: 'japan', label: 'Japan' },
              ]}
              onSelect={(key) => console.log({ key })}
            >
              <img src={Images.FlagNigeria} alt="flag-nigeria" className="flag" />
              <span>Nigeria</span>
            </SGDropdown>
          </Row>
        </Col>
      </Row>
      <Row className="terms-privacy">
        <Col>
          <p className="reversed">© 2020 Gifts. All Rights Reserved.</p>
        </Col>
        <Col xs="auto"></Col>
        <Col>
          <Row className="justify-content-end buttons">
            <SGButton text="Terms" br={18} />
            <p className="reversed">| </p>
            <SGButton text="Privacy Policy" br={18} />
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default SGFooter;