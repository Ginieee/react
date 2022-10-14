import React from 'react';
import { useParams } from 'react-router-dom';

function Community(props) {

    const params = useParams();

    return (
        <div>
            <h1>Community 입니다.</h1>
            <h2>{params.content} 입니다.</h2>

        </div>
    );
}

export default Community;