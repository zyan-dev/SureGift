import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Images } from '../../utils/images';
import SGButton from '../Button';
import SGDropdown from '../Dropdown';
import './style.scss';

const SGHeader = ({ authorized = false }) => {
  return (
    <Container className="sg-header">
      <div className="logo-menu">
        <Link to="/">
          <img src={Images.Logo} alt="logo" className="logo" />
        </Link>
        <Link to="home" className="nav-btn focused">Homepage</Link>
        <Link to="airtime" className="nav-btn">Airtime</Link>
        <Link to="pay-bill" className="nav-btn">Pay bills</Link>
        <Link to="business" className="nav-btn">Suregifts business</Link>
        <Link to="merchants" className="nav-btn">Merchants</Link>
      </div>
      <div className="language-auth">
        {authorized ? (
          <>
            <div className="welcome-back">
              <p className="welcome-title">Welcome back,</p>
              <p className="welcome-name">Guy Hawkins</p>
            </div>
            <Link to="profile">
              <img src={Images.DefaultAvatar} alt="header-avatar" className="header-avatar" />
            </Link>
            <Link to="shop">
              <img src={Images.ShopBag} alt="shop-bag" className="shop-bag" />
            </Link>
          </>
        ) : (
            <>
              <SGDropdown
                options={[
                  { key: 'en', label: 'English' },
                  { key: 'ch', label: 'Chinese' },
                  { key: 'jp', label: 'Japanese' },
                  { key: 'kr', label: 'Korean' },
                ]}
                onSelect={(key) => console.log({ key })}
                showArrow={false}
                className="language-picker"
              >
                <span>En</span>
              </SGDropdown>
              <SGDropdown
                options={[
                  { key: 'china', label: 'China' },
                  { key: 'nigeria', label: 'Nigeria' },
                  { key: 'japan', label: 'Japan' },
                ]}
                onSelect={(key) => console.log({ key })}
                className="country-picker"
              >
                <img src={Images.FlagNigeria} alt="flag-nigeria" className="flag" />
                <span>Nigeria</span>
              </SGDropdown>
              <SGButton text="Sign in" type="gradient" className="sign-in-button" />
            </>
          )}
      </div>
    </Container >
  )
}

export default SGHeader;