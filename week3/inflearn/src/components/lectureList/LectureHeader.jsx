import React from 'react';
import right from 'img/next_arrow_black.png'
import LectureBody from './LectureBody';
import RoadMapBody from './RoadMapBody';
import TitleTag from './TitleTag';
import ReadingBody from './ReadingBody';

function LectureHeader({href, title, text, isWhat, courseTag, cardList}) {
    
    const typeCheck = () => {
        if(isWhat===0){
            return (<LectureBody data={cardList}/>);
        }
        else if(isWhat===1){
            return (<RoadMapBody data={cardList}/>);
        }
        else if(isWhat===2){
            return (<ReadingBody data={cardList}/>);
        }
    }

    const titleTag = () => {
        if(courseTag!==""){
            return (<TitleTag text={courseTag}/>);
        }
        return;
    }

    const isText = () => {
        if(text !== ""){
            return (<p className='subtext is-2'>{text}</p>)
        }
        return;
    }
    
    return (
        <section className='lecture'>
            <div className='container-pd10'>
                <div className='main-course-list'>
                    <div className='header'>
                        <div className='courses-header'>
                            <a href={href}>
                                <h1 className='title is-4 is-spaced'>
                                    {title}
                                    {titleTag()}
                                    <span className='spanIcon'>
                                        <img className='spanIcon_arrow_right' src={right} alt="이동"/>
                                    </span>
                                </h1>
                            </a>
                            {isText()}
                        </div>
                    </div>
                    {typeCheck()}
                </div>
            </div>
        </section>
    );
}

export default LectureHeader;