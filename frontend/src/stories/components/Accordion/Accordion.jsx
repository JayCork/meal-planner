import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';



const AccordionStyled = styled.div`
display: flex;
flex-direction: column;
`;

const AccordionButton= styled.button`
display: flex;
flex-direction: column;
`;

const AccordionContent = styled.div`
display: flex;
flex-direction: column;
color: ${props => props.$expanded ? "white" : "#BF4F74"};

  font-size: 1em;
`;


export const Accordion = props => {
  const {
    name,
    children,
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <AccordionStyled>
      <AccordionButton onClick={toggleOpen}>
        {name}
      </AccordionButton>
      <AccordionContent
        aria-expanded={isOpen}
        aria-hidden={!isOpen}
        role="region"
        hidden={!isOpen}

      >
        {children}
      </AccordionContent>
    </AccordionStyled>
  )
}

Accordion.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};


