import React from 'react';

const Rainbow = (WrappedComponent) => {
    const colors = ['red', 'blue', 'yellow', 'pink', 'green', 'orange']
    const randomColor = colors[(Math.floor(Math.random() *5))]
    
    const className = {
        color:  randomColor, 
    }
    
    return (props) => {
        return(
            <div style={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default Rainbow;