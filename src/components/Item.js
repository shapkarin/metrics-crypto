import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ index, style, data: { filter, getItemById, selected } }) => {
  const item = getItemById(index);

  return (
    <div
      style={style}
      onClick={() => filter(item)}
      className={`item ${item.name === selected ? 'active' : ''}`}
    >
      {item.full_name} – {item.name}
    </div>
  );
};

Item.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  data: PropTypes.shape({
    filter: PropTypes.func.isRequired,
    getItemById: PropTypes.func.isRequired,
    selected: PropTypes.string.isRequired,
  }).isRequired,
};

export default Item;
