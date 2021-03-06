import React from 'react';
import { Ingredient } from './';
import { ListGroup } from 'react-bootstrap';

interface IngredientsProps {
  ingredients: ExtendedIngredients[];
}

const Ingredients: React.FC<IngredientsProps> = ({ ingredients }) => {
  return (
    <ListGroup className='mt-3 recipe-detailed'>
      <ListGroup.Item className='bg-dark'>
        <p className='d-inline text-light'>Ingredients</p>
      </ListGroup.Item>

      {ingredients.map((ingredient, index) => (
        <Ingredient key={index} ingredient={ingredient.originalString} />
      ))}
    </ListGroup>
  );
};

export default Ingredients;
