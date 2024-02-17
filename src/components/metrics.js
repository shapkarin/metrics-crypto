import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { FixedSizeList as List } from 'react-window';

import Item from './Item';

const Metrics = inject(
  'metricsStore',
  'filtersStore',
)(
  observer(({ metricsStore, filtersStore }) => (
    <>
      <button onClick={() => filtersStore.reset('metrics')}>
        Reset List Filters
      </button>{' '}
      <br />
      <div>current asset: {filtersStore.assets.selectedMetric}</div>
      Filtered Len: {metricsStore.filtered.length}
      <br />
      <hr />
      <input
        type="text"
        value={filtersStore.metrics.query}
        onChange={({ target: { value } }) =>
          filtersStore.setQuery('metrics', value)
        }
      />
      <List
        className="list"
        style={{ marginTop: '23px' }}
        height={500}
        itemCount={metricsStore.filtered.length}
        itemSize={42}
        width={600}
        itemData={{
          filter: (item) => filtersStore.filterAssets(item),
          getItemById: (id) => metricsStore.filtered[id],
          selected: filtersStore.assets.selectedMetric,
        }}
      >
        {Item}
      </List>
    </>
  ))
);

Metrics.propTypes = {
  metricsStore: PropTypes.func,
  filtersStore: PropTypes.func,
};

export default Metrics;
