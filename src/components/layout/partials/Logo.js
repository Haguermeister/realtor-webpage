import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h5 className="m-0 ">
        <Link to="/" className="d-flex justify-content-around">
          <Image
            src={require('./../../../assets/images/logo.svg')}
            alt="Open"
            width={32}
            height={32} /> 
        </Link>
      </h5>
    </div>
  );
}

export default Logo;