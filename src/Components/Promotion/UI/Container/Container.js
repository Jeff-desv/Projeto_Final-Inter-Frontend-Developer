import React from "react";

const UIContainer = ({ children }) => (
    <div 
            
    style={{
        maxWidth: 800,
        margin: '30px auto'
    }}>
        {children}
    </div>
);

export default UIContainer;