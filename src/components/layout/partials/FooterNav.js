import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="#0">About Me</Link>
        </li>
        <li>
          <Link to="#0">Buyers</Link>
        </li>
        <li>
          <Link to="#0">Sellers</Link>
        </li>
        <li>
          <Link to="#0">Contact</Link>
        </li>
       
      </ul>
    </nav>
  );
}

export default FooterNav;