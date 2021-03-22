import React from 'react';
import SGButton from '../../../components/Button';
import { Images } from '../../../utils/images';

const ShareBar = () => {
  return (
    <div className="share">
      <img src={Images.Logo} alt="logo" className="logo" />
      <div className="button-list">
        <SGButton text="Social" />
        <SGButton type="icon" icon={Images.Minus} alt="share-minus" />
        <SGButton type="icon" icon={Images.Facebook} alt="share-facebook" />
        <SGButton type="icon" icon={Images.Instagram} alt="share-instagram" />
        <SGButton type="icon" icon={Images.Twitter} alt="share-twitter" />
      </div>
    </div>
  )
}

export default ShareBar;