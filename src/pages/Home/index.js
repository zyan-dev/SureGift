import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ReactSVG } from 'react-svg'
import Slider from "react-slick";
import { useHistory } from 'react-router-dom';
import SGButton from '../../components/Button';
import SGHeader from '../../components/Header';
import { Images } from '../../utils/images';
import HomeCardBack from './components/CardBack';
import HowItWorksVector1 from '../../assets/images/how-it-works/vector-1.svg';
import HowItWorksVector2 from '../../assets/images/how-it-works/vector-2.svg';
import BuyCard from '../../assets/svgs/buy-card.svg';
import SGFooter from '../../components/Footer';
import ShareBar from './components/Share';
import './style.scss';
import { EmployeeList } from '../../utils/constants';

const HomePage = () => {
  const history = useHistory();
  const onPressShopNow = () => {
    history.push('custom-card');
  }

  return (
    <Container className="home-page">
      <HomeCardBack />
      <SGHeader />
      <Row>
        <Col md={6}>
          <p className="title">The perfect Gift for Everyone</p>
          <p className="sub-title">Gifts makes it easy for you to give the perfect gift catd</p>
          <SGButton type="gradient" text="Shop Now" className="show-now" blur height={80} width={270} onClick={onPressShopNow} />
        </Col>
      </Row>
      <div className="how-it-work">
        <img src={Images.ArrowDown} alt="arrow-down" className="arrow-down" />
        <p className="how-it-works">How it works</p>
        <p className="how-it-works-desc">Buy and send gift cards from over 200 merchants across Nigeria in 3 easy steps.</p>
        <div className="step-container">
          <div className="first">
            <div className="icon-wrapper">
              <img src={Images.HowItWorksIcon1} alt="step-1" />
            </div>
            <p className="description">Choose gift card from popular brands</p>
          </div>
          <ReactSVG
            src={HowItWorksVector1}
            beforeInjection={(svg) => {
              svg.classList.add('vector-1')
            }}
            className="vector-1-wrapper"
          />
          <div className="second">
            <div className="icon-wrapper">
              <img src={Images.HowItWorksIcon2} alt="step-1" />
            </div>
            <p className="description">Personalize by adding message, photo or video</p>
          </div>
          <ReactSVG
            src={HowItWorksVector2}
            beforeInjection={(svg) => {
              svg.classList.add('vector-2')
            }}
            className="vector-2-wrapper"
          />
          <div className="third">
            <div className="icon-wrapper">
              <img src={Images.HowItWorksIcon3} alt="step-1" />
            </div>
            <p className="description">Personalize by adding message, photo or video</p>
          </div>
        </div>
      </div>
      <div className="buy-gift-card">
        <div className="description">
          <p className="buy-title">Gift Cards from</p>
          <p className="buy-title">over 200 merchants</p>
          <div className="sub">
            <p className="buy-title">in Nigeria</p>
            <span>
              They will try to close the door on you, just open it. They don’t want us to win. The key to more success is ti get a massage once a week, very important
            </span>
          </div>
          <SGButton type="gradient" text="Buy a Gift Card" className="buy-card" blur height={80} width={270} />
        </div>
        <ReactSVG
          src={BuyCard}
          beforeInjection={(svg) => {
            svg.classList.add('vector-1')
          }}
          className="buy-card-icon"
        />
      </div>
      <Slider
        dots={false}
        infinite
        autoplay
        autoplaySpeed={2000}
        arrows={false}
        centerMode
        variableWidth
        slidesToScroll={1}
        className="merchant-agency-list"
      >
        <div className="item">
          <img src={Images.Merchant_JUMIA} alt="merchant-jumia" className="jumia" />
          <img src={Images.Merchant_SAMSUNG} alt="merchant-samsung" className="samsung" />
        </div>
        <div className="item">
          <img src={Images.Merchant_SPAR} alt="merchant-spar" className="spar" />
        </div>
        <div className="item">
          <img src={Images.Merchant_Phone} alt="merchant-phone" className="phone" />
          <img src={Images.Merchant_H2M} alt="merchant-h2m" className="h2m" />
        </div>
        <div className="item">
          <img src={Images.Merchant_SPAR} alt="merchant-spar" className="spar" />
        </div>
        <div className="item">
          <img src={Images.Merchant_JUMIA} alt="merchant-jumia" className="jumia" />
          <img src={Images.Merchant_SAMSUNG} alt="merchant-samsung" className="samsung" />
        </div>
        <div className="item">
          <img src={Images.Merchant_SPAR} alt="merchant-spar" className="spar" />
        </div>
        <div className="item">
          <img src={Images.Merchant_Phone} alt="merchant-phone" className="phone" />
          <img src={Images.Merchant_H2M} alt="merchant-h2m" className="h2m" />
        </div>
      </Slider>
      <div className="become-merchant">
        <img src={Images.Merchant_Chart} alt="merchant-chart" />
        <div className="become-merchant-content">
          <p className="become-title">Have Product or Service? Become a Merchant</p>
          <span className="become-description">
            I pick my choice, squeaky clean. The key to more success is to get massage once a week, very important, major key, cloth talk
          </span>
          <SGButton text="Become a Merchant" className="become-a-merchant" height={80} width={270} background="white" />
        </div>
      </div>
      <div className="learn-more">
        <p className="reward-title">Reward your employees, consumers and fans with gift cards</p>
        <span className="reward-description">
          They will try to clise the door on you, just open it. They don’t want us to win. The key to more success is to get a massage once a week, very important
        </span>
        <SGButton text="Learn More" className="become-a-merchant" height={60} width={240} background="white" />
      </div>
      <Row className="employees">
        {EmployeeList.map(employee => (
          <Col key={employee.index} md={2} lg={3} className="employee-avatar">
            <img src={employee.image} alt={`employee-${employee.index}`} />
          </Col>
        ))}
      </Row>
      <ShareBar />
      <SGFooter />
    </Container>
  )
}

export default HomePage;