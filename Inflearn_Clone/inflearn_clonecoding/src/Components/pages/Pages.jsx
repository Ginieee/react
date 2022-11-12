import React from 'react';
import { useParams } from 'react-router-dom';

function Pages(props) {

    const params = useParams();

    return (
        <div>
            <h1>Pages : 인프런 스토리 입니다.</h1>
            <h3>title : {params.title} 입니다.</h3>
        </div>
    );
}

export default Pages;