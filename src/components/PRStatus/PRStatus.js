import React from 'react';
import { IconGitPullRequest, IconGitMerge } from 'tabler-icons';

function PRStatus(props){
    const iconSize = 20;
    switch (props.status) {
        case 'merged':
            return (<IconGitMerge size={iconSize} color='#6f42c1' />);
        case 'closed':
            return (<IconGitPullRequest size={iconSize} color='#d73a49' />);
            case 'open':
            return (<IconGitPullRequest size={iconSize} color='#28a745' />);
        default:
            return (<IconGitPullRequest size={iconSize} color='#6a737d' />);

    }
}

export default PRStatus;