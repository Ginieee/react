import React from 'react';
import { useParams } from 'react-router-dom';

function Roadmaps(props) {

    const params = useParams();

    return (
        <div>
            <h1>Roadmaps 입니다.</h1>
            <h3>number : {params.idx} 입니다.</h3>
        </div>
    );
}

export default Roadmaps;<h1>Roadmaps 입니다.</h1>