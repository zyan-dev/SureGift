import React from 'react';
import { Dropdown } from 'react-bootstrap';
import classnames from 'classnames';
import { Images } from '../../utils/images';
import './style.scss';

const SGDropdown = ({ className, options = [], onSelect, showArrow = true, arrowCustom = true, children }) => {
  return (
    <Dropdown className={className}>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdown-picker">
        <div className="sg-dropdown-header">
          <div className="header-content">{children}</div>
          {showArrow && <img src={arrowCustom ? Images.Arrow : Images.ArrowCommon} alt="dropdown-arrow" className={classnames(arrowCustom ? 'arrow-custom' : 'arrow')} />}
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {
          options.map((option) => (
            <Dropdown.Item key={option.key} onClick={() => onSelect(option.key)}>{option.label}</Dropdown.Item>
          ))
        }
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default SGDropdown;