import React from 'react';
import { Images } from '../../../utils/images';

const HomeCardBack = () => (
  <>
    <div className="home-card-empty home-card-empty-1" />
    <div className="home-card-empty home-card-empty-2" />
    <div className="home-card-empty home-card-empty-3" />
    <div className="home-card-empty home-card-empty-4" />
    <img src={Images.HomeCardNew} className="home-card-new" alt="home-card-new" />
    <div className="home-card-new-container" />
    <img src={Images.HomeCardShared} className="home-card-shared" alt="home-card-shared" />
    <img src={Images.HomeCardChat} className="home-card-chat" alt="home-card-chat" />
  </>
)


export default HomeCardBack;