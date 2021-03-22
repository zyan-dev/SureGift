import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { ReactSVG } from 'react-svg';
import SGButton from '../../../components/Button';
import SGDropdown from '../../../components/Dropdown';
import { FontList, FontSizeList, FontWeightList } from '../../../utils/constants';
import Italic from '../../../assets/svgs/Italic.svg';
import { Images } from '../../../utils/images';

const TextToolbar = () => {
  return (
    <div className="toolbar" id="text_toolbar">
      <Row>
        <Col md={3} className="font block">
          <SGDropdown
            className="font-picker"
            options={FontList}
            onSelect={(key) => console.log({ key })}
            arrowCustom={false}
          >
            <span style={{ fontFamily: 'Cookie' }}>Cookie</span>
          </SGDropdown>
        </Col>
        <Col md={3} className="block">
          <SGDropdown
            className="weight-picker"
            options={FontWeightList}
            onSelect={(key) => console.log({ key })}
            arrowCustom={false}
          >
            <span>Regular</span>
          </SGDropdown>
        </Col>
        <Col md={2} className="block">
          <SGDropdown
            className="fontsize-picker"
            options={FontSizeList.map(i => ({ key: i, label: i }))}
            onSelect={(key) => console.log({ key })}
            arrowCustom={false}
          >
            <span>15</span>
          </SGDropdown>
        </Col>
        <Col md={3} className="block font-style">
          <SGButton text="B" className="bold" />
          <button className="italic-icon">
            <ReactSVG
              src={Italic}
              beforeInjection={(svg) => {
                svg.classList.add('vector-1')
              }}
              className="vector-1-wrapper"
            />
          </button>
          <SGButton text="U" className="underline" />
        </Col>
        <Col md={1} className="block paint">
          <SGButton type="icon" icon={Images.Paint} />
        </Col>
      </Row>
    </div>
  )
}

export default TextToolbar;