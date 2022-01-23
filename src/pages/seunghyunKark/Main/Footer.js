import React from 'react';
import './Footer.scss';
import { FOOTER_INFO } from './FOOTER_INFO';

function Footer(props) {
  return (
    <div className="footer">
      {FOOTER_INFO.map(info => {
        return (
          <li key={info.id} className="footerLinks">
            {info.content}
          </li>
        );
      })}
    </div>
  );
}

export default Footer;
