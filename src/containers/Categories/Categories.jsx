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
        : <div>Batata</div>
      }
    </div>
  </div>
);

export default Categories;

