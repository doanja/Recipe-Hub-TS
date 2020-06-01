import React from 'react';
import { Ingredient } from './';
import { ListGroup } from 'react-bootstrap';
import '../App.css';

interface IngredientsProps {
  title?: string;
  ingredients?: Array<ExtendedIngredients>;
}

const Ingredients: React.FC<IngredientsProps> = ({ title, ingredients }) => {
  return (
    <ListGroup className='card-shadow'>
      <ListGroup.Item className='ingredient bg-dark mt-3'>
        <p className='d-inline text-light'>Ingredients for {title}</p>
      </ListGroup.Item>

      {ingredients?.map((ingredient, index) => (
        <Ingredient key={index} ingredient={ingredient.originalString} />
      ))}
    </ListGroup>
  );
};

export default Ingredients;
