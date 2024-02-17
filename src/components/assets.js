import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { FixedSizeList as List } from 'react-window';

import Item from './Item';

const Assets = inject(
  'assetsStore',
  'filtersStore',
)(
  observer(({ assetsStore, filtersStore }) => {
    // not sure that it's a good feature
    // const listRef = useRef();
    // reaction(() => filtersStore.assets.metric, () => {
    //   listRef.current.scrollToItem(0, 'start');
    // });

    return (
      <>
        <button onClick={() => filtersStore.reset('assets')}>
          Reset List Filters
        </button>{' '}
        <br />
        <div>current asset: {filtersStore.metrics.selectedAsset}</div>
        Filtered Len: {assetsStore.filtered.length}
        <br />
        <hr />
        <input
          type="text"
          value={filtersStore.assets.query}
          // todo: update react and use onKeyUp
          onChange={({ target: { value } }) =>
            filtersStore.setQuery('assets', value)
          }
          data-test="assets-input"
        />
        <List
          className="list assets"
          style={{ marginTop: '23px' }}
          height={500}
          itemCount={assetsStore.filtered.length}
          itemSize={35}
          width={500}
          itemData={{
            filter: (item) => filtersStore.filterMetrics(item),
            getItemById: (id) => assetsStore.filtered[id],
            selected: filtersStore.metrics.selectedAsset,
          }}
          // ref={listRef}
        >
          {Item}
        </List>
      </>
    );
  }),
);

Assets.propTypes = {
  assetsStore: PropTypes.func,
  filtersStore: PropTypes.func,
};

export default Assets;
