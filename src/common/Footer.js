import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-tab">
        <span>首页</span>
      </div>
      <div className="footer-tab">
        <span>写作训练</span>
      </div>
      <div className="footer-tab">
        <span>口语训练</span>
      </div>
      <div className="footer-tab">
        <span>我的</span>
      </div>
    </div>
  );
};

export default Footer;