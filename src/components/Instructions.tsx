import React from 'react';
import { Instruction } from './';
import { ListGroup } from 'react-bootstrap';
import '../App.css';

interface InstructionsProps {
  instructions?: Array<string>;
}

const Instructions: React.FC<InstructionsProps> = ({ instructions }) => {
  return (
    <ListGroup className='recipe-detailed'>
      <ListGroup.Item className='mt-3 bg-dark'>
        <p className='d-inline text-light'>Instructions</p>
      </ListGroup.Item>

      {instructions?.map((instructions, index) => (
        <Instruction key={index} instruction={instructions} />
      ))}
    </ListGroup>
  );
};

export default Instructions;