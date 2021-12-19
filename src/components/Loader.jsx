import React from 'react';
import ContentLoader from "react-content-loader";

function Loader() {
    return (
        <ContentLoader 
            className='pizza-block'    
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#fdefdd"
            foregroundColor="#fbf4f4"
        >
            <rect x="37" y="287" rx="8" ry="8" width="200" height="24" /> 
            <rect x="11" y="325" rx="7" ry="7" width="255" height="77" /> 
            <rect x="10" y="420" rx="4" ry="4" width="90" height="25" /> 
            <rect x="122" y="410" rx="21" ry="21" width="150" height="45" /> 
            <rect x="13" y="333" rx="0" ry="0" width="79" height="26" /> 
            <circle cx="134" cy="132" r="120" />
        </ContentLoader>
    )
}

export default Loader
