import React from 'react';
import './ShadowOffset.css';
import PropTypes from 'prop-types';

const shadowOffset =({handleDrawerClose})=>{
    return (
        <div className="shadowOffset" onClick={handleDrawerClose} />
    );
}

shadowOffset.propTypes = {
    handleDrawerClose: PropTypes.func.isRequired
};

export default shadowOffset;