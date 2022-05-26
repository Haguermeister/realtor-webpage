import React from 'react';

import Cta from '../components/sections/Cta';
import GenericSection from '../components/sections/GenericSection'
import Image from '../components/elements/Image';
const AboutMe = () => {

  return (
    <>
        <GenericSection >
            <Image
                className="has-shadow"
                src={require('./../assets/images/Headshot-Placeholder.jpg')}
                alt="Hero"
                width={445}
                height={227} 
                />

        </GenericSection>
      <Cta split />
    </>
  );
}

export default AboutMe;