import React from 'react';

import { Assets, Metrics } from '../components';
import filtersStore from '../stores/filters';

// not sure that I need to use inject
// const Main = inject('filtersStore')(({ filtersStore }) => (
const Main = () => (
  <>
    <button
      onClick={() => {
        filtersStore.reset('assets');
        filtersStore.reset('metrics');
      }}
    >
      reset all filters
    </button>{' '}
    <br />
    <br />
    <div className="main">
      <div className="col">
        <div className="title">Assets</div>
        <Assets />
      </div>
      <div className="col">
        <div className="title">Metrics</div>
        <Metrics />
      </div>
    </div>
  </>
);

export default Main;
