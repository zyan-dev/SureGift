import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import classnames from 'classnames';
import SGButton from '../../components/Button';
import SGDropdown from '../../components/Dropdown';
import SGHeader from '../../components/Header';
import { CardBackgroundList } from '../../utils/constants';
import { Images } from '../../utils/images';
import { checkClosestElement } from '../../utils/element';
import TextToolbar from './components/TextToolbar';
import './style.scss';

const CustomCardPage = () => {
  const [cardImage, selectCardImage] = useState(Images.CardBack2);
  const [toolbar, toggleToolbar] = useState(false);

  const handleClickTextarea = (event) => {
    event.preventDefault();
    if (event.target.id === 'card_text' || checkClosestElement(event.target, '#text_toolbar')) {
      toggleToolbar(true);
    } else {
      toggleToolbar(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickTextarea);

    return () => {
      document.removeEventListener('click', handleClickTextarea)
    }
  }, []);



  return (
    <Container className="custom-card-page">
      <SGHeader authorized />
      <Row>
        <Col md={2}>
          <p className="category">Category</p>
          <SGDropdown
            className="category-picker"
            options={[
              { key: 'birthday', label: 'Birthday' },
              { key: 'shop', label: 'Shop' },
              { key: 'business', label: 'Business' },
            ]}
            onSelect={(key) => console.log({ key })}
            arrowCustom={false}
          >
            <span>Birthday</span>
          </SGDropdown>
        </Col>
        <Col md={10}>
          <Slider
            dots={false}
            infinite
            autoplay
            autoplaySpeed={2000}
            arrows={false}
            centerMode
            variableWidth
            slidesToScroll={1}
            className="card-background-templates"
          >
            {
              CardBackgroundList.map((image, index) => (
                <img
                  src={image}
                  alt="card-background"
                  className={classnames("item", cardImage === image && 'selected')}
                  key={index}
                  onClick={() => selectCardImage(image)}
                />
              ))
            }
          </Slider>
        </Col>
      </Row>
      <div className="card-editor">
        <div className="icon-view">
          <img src={cardImage} alt="card-editor-icon" className="card-editor-icon" />
        </div>
        <div className="editor">
          <div className="text-editor">
            <textarea
              multiple
              className="card-text-input"
              defaultValue="Enjoy this lovely day as lovely as you are!"
              id="card_text"
            />
          </div>
          {toolbar && (
            <TextToolbar />
          )}
          <div className="card-uploader">
            <img src={Images.CardUpload} alt="card-uploader" />
            <p className="card-uploader-text">Add photo or video</p>
          </div>
        </div>
      </div>
      <Row className="card-editor-status">
        <Col md={3} className="card-status">
          <img src={Images.DefaultCard} alt="card-template" />
          <div>
            <p className="card-name">Lavien Spa</p>
            <p className="card-balance">$ 300</p>
          </div>
        </Col>
        <Col md={6} className="card-steps">
          <div className="card-step">
            <img src={Images.CardPersonalize} alt="card-personalize" />
            <div>
              <p className="card-step-num">Step1</p>
              <p className="card-step-name selected">Personalize</p>
            </div>
          </div>
          <div className="card-step">
            <img src={Images.CardDelivery} alt="card-personalize" />
            <div>
              <p className="card-step-num">Step2</p>
              <p className="card-step-name">Delivery</p>
            </div>
          </div>
          <div className="card-step">
            <img src={Images.CardPayment} alt="card-personalize" />
            <div>
              <p className="card-step-num">Step3</p>
              <p className="card-step-name">Payment</p>
            </div>
          </div>
        </Col>
        <Col md={3} className="action-buttons">
          <SGButton
            text="Change Gift"
            background="#17171C"
            width={150}
            height={50}
            className="change-gift"
          />
          <SGButton
            text="Choose Delivery"
            background="#FFFFFF"
            width={150}
            height={50}
            className="choose-delivery"
          />
        </Col>
      </Row>
    </Container>
  )
}

export default CustomCardPage;