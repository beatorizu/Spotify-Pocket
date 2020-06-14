import React  from 'react';
import PropTypes from 'prop-types';

import { Loading } from '../../components';

import CategoryItem from './CategoryItem';

import './Categories.scss';

const Categories = ({ data, isLoading, url }) => (
  <div className="categories" data-testid="categories">
    <div className="container">
      <h3 className="categories__title">Categorias</h3>
      {isLoading
        ?<Loading text="Carregando..." />
        : <div className="categories__content">
          {data?.map(category => <CategoryItem icon={category.icons[0]} id={category.id} name={category.name} url={url} key={category.id} />)}
        </div>
      }
    </div>
  </div>
);

CategoryItem.defaultProps = {
  isLoading: false
}

CategoryItem.propTypes = {
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  url: PropTypes.string.isRequired,
}

export default Categories;

