import React from 'react';
import { Container, CardDeck, Row } from 'react-bootstrap';
import { RecipePreview } from './RecipePreview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface RecipeResultsProps {
  recipes: Array<Recipe>;
  previousRecipeResults: PreviousRecipeResults;
  nextRecipeResults: NextRecipeResults;
}

export const RecipeResults: React.FC<RecipeResultsProps> = ({
  recipes,
  previousRecipeResults,
  nextRecipeResults,
}) => {
  return (
    <Container fluid className='my-3'>
      <h3>Search Results</h3>

      <hr />
      <CardDeck>
        <Row>
          {recipes.map((recipe, key) => (
            <RecipePreview key={key} recipe={recipe} />
          ))}
        </Row>
      </CardDeck>

      <hr />

      <div className='d-block test'>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className='icon float-left'
          onClick={previousRecipeResults}
        />
        <FontAwesomeIcon
          icon={faArrowRight}
          className='icon float-right'
          onClick={nextRecipeResults}
        />
      </div>
    </Container>
  );
};