// Imports
import React from 'react';
import { Background } from './styled';
import { Description } from './styled';
import { FunctionButtons } from './styled';
import { LeftButton } from './styled';
import { RightButton } from './styled';
import { DownArrow } from './styled';
import { Buttons } from './styled';
import { Fade } from 'react-reveal';

// Display Car Component
function ShowRoom({ id, title, description, image }) {
  return (
    <Background key={id} image={image}>
      <Fade bottom duration={1700}>
        <Description>
          <h1 className="montserrat-m font-40">{title}</h1>
          <h3 className="montserrat-l font-15">{description}</h3>
        </Description>
        <Buttons>
          <FunctionButtons className="montserrat-m font-12">
            <LeftButton>{id < 4 ? `Custom Order` : `Order Now`}</LeftButton>
            <RightButton>
              {id < 4 ? `Existing Inventory` : `Learn More`}
            </RightButton>
          </FunctionButtons>
          <DownArrow src={id == 0 ? `/images/down-arrow.svg` : ''} />
        </Buttons>
      </Fade>
    </Background>
  );
}

export default ShowRoom;
