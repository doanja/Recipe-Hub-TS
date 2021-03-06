import React from 'react';
import { RecipeContainer } from './';
import { Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface SearchResultsProps {
  recipes: Recipe[];
  loadRecipe: LoadRecipe;
  loadPrevious: LoadPrevious;
  loadNext: LoadNext;
  getSimilarRecipes: GetSimilarRecipes;
}

const SearchResults: React.FC<SearchResultsProps> = ({ recipes, loadRecipe, loadPrevious, loadNext, getSimilarRecipes }) => {
  return (
    <div className='search-results'>
      {recipes.length > 0 ? (
        <div className='mb-3 clearfix'>
          {recipes.map((recipe, key) => (
            <RecipeContainer key={key} recipe={recipe} loadRecipe={loadRecipe} preview={true} getSimilarRecipes={getSimilarRecipes} />
          ))}

          <FontAwesomeIcon icon={faArrowLeft} size='1x' className='icon float-left' onClick={loadPrevious} />
          <FontAwesomeIcon icon={faArrowRight} size='1x' className='icon float-right' onClick={loadNext} />
        </div>
      ) : (
        <div className='icon-spinner'>
          <Spinner animation='border' variant='light' />
        </div>
      )}
    </div>
  );
};

export default SearchResults;
