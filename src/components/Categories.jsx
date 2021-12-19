import React from 'react';
import PropTypes from 'prop-types';



export default function Categories({ items, onClickCategory, activeCategory }) {
    
    return (
        <>
            <div className="categories">
              <ul>
                {items && items.map((item, index) => (
                    <li 
                        className={activeCategory === index ? "active" : ""} 
                        onClick={() => onClickCategory(index)} 
                        key={`${item}_${index}`}>{item}</li>
                ))}
              </ul>
            </div>   
        </>
    );
} ;


Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = { activeCategory: 0, items: [] };

/* class Categories extends React.Component {
    state = {
        activeItem: null,
    }

    render() {
        const { items } = this.props;

        return (
            <div className="categories">
              <ul>
                {items.map((item, index) => (
                    <li 
                        className={this.state.activeItem === index ? "active" : ""} 
                        onClick={() => this.setState({activeItem: index})}
                        key={`${item}_${index}`}>{item}</li>
                ))}
              </ul>
            </div>   
        );
    }
}

export default Categories; */



