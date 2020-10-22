import React from 'react';
import { Icon } from '@material-ui/core';

function PRStatus(props){
    switch (props.status) {
        case 'merged':
            return (<Icon 
                className="fas fa-code-branch" 
                style={{ fontSize:16, color: 'purple' }} />);
        case 'closed':
            return (<Icon 
                className="fas fa-code-branch" 
                style={{ fontSize:16, color: 'red' }} />);
        case 'open':
            return (<Icon 
                className="fas fa-code-branch" 
                style={{ fontSize:16, color: 'green' }} />);
        default:
            return (<Icon 
                className="fas fa-code-branch" 
                style={{ fontSize:16, color: 'grey' }} />);
    }
}

export default PRStatus;