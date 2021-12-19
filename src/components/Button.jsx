import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Button({ onClick, outline, children , }) {
    return (
            <button
                onClick={onClick} 
                className={classNames(
                    'button',
                    {'button--cart':outline}
                    )
                }>{children}</button>
        )
}

Button.propTypes = {
    onClick:PropTypes.func.isRequired,
}

export default Button;