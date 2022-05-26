import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  
  const [nameState, setNameState] = useState('');
  const [emailState, setEmailState] = useState('');
  const [clientState, setClientState] = useState('');
  const changeName = (event)=>{
    setNameState(event.target.value);
  }
  const changeEmail = (event)=>{
    setEmailState(event.target.value);
  }
  const changeClient = (event)=>{
        console.log("Name : ",nameState," Email : ",emailState," Client : ",clientState);
    setClientState(event.target.value);
  }
  const sendForm = ()=>{
    console.log("Name : ",nameState," Email : ",emailState," Client : ",clientState);
  };
  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div
          className={innerClasses}
        >
          <div className="cta-slogan">
            <h3 className="m-0">
              Still Have Questions? Contact Me
              </h3>
          </div>
          <div className="cta-action">
            <Input onChange={changeName} value={nameState} className="my-1" id="Name"  label="Name" labelHidden placeholder="Name">
              
            </Input>
            <Input onChange={changeEmail} value={emailState} className="my-1"id="email"  label="email" labelHidden  placeholder="client@email.com">
              
            </Input>
            <Input onChange={changeClient} value={clientState} id="client" type="textarea" rows ="4" label="client" labelHidden hasIcon="right" placeholder="How can I help you?">
              <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg" onClick={sendForm}>
                <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
              </svg>
            </Input>
             
          </div>
          
        </div>
        
      </div>
      
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;