import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function PizzaBlock({items, index, types, name, imageUrl, sizes, onClick, price, id, onClickAddPizza}) {
    
    const availableSizes = sizes;
    const availableTypes = ["thin dough","thick dough"];
    const [activeType, setActiveType] = React.useState(types[0]);
    const [activeSize, setActiveSize] = React.useState(sizes[0])
   
    function setType(index) {
       setActiveType(index)
    };
    function setSize(item) {
        setActiveSize(item)
    };
    function onAddPizza() {
      const obj = {
        id,
        name,
        imageUrl,
        price,
        size: activeSize,
        type: availableTypes[activeType],
      };
      onClickAddPizza(obj);
    };
    
    
    return (
      <div className="pizza-block">
        <Link to="./pizzas_description">
          <img
            onClick={onClick}
            className="pizza-block__image"
            src={imageUrl}
            alt="Pizza"
          />
        </Link>
        <h4 className="pizza-block__title" onClick={onClick}>
          {name}
        </h4>
        <div className="pizza-block__selector">
          <ul>
            {availableTypes.map((item, index) => {
              return (
                <li
                  key={`${item}_${index}`}
                  onClick={() => setType(index)}
                  className={classNames({
                    active: activeType === index,
                    disabled: !types.includes(index),
                  })}>
                  {item}
                </li>
              );
            })}
          </ul>
          <ul>
            {availableSizes.map((item, index) => {
              return (
                <li
                  key={`${item}_${index}`}
                  onClick={() => setSize(item)}
                  className={classNames({
                    active: activeSize === item,
                    disabled: !sizes.includes(item),
                  })}>
                  {item} cm
                </li>
              );
            })}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">{price} $</div>
          <div onClick={onAddPizza} className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Add</span>
            <i>0</i>
          </div>
        </div>
      </div>
    );
}

PizzaBlock.propTypes = {
    name:PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    types: PropTypes.arrayOf(PropTypes.number).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
}

PizzaBlock.defaultProps = {
    name:'',
    imageUrl: '',
    price: 0,
    types: [],
    sizes: [],
}


export default PizzaBlock
