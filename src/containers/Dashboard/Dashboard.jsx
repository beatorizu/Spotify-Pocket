import React from 'react';
import PropTypes from "prop-types";

import './Dashboard.scss';
import { Player } from '../';
import { useSelector } from 'react-redux';

const Dashboard = ({ children }) => {
  const playerHeight = useSelector(state => state.content.playerHeight);

  return (
    <div className="dashboard" data-testid="dashboard" style={{paddingBottom: `${playerHeight}px`}}>
      {children}
      <Player />
    </div>
  );
};

Dashboard.defaultProps = {
  children: []
}

Dashboard.propTypes = {
  children: PropTypes.node
}

export default Dashboard;

