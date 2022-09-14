import React from 'react';
import LectureBody from './LectureBody';
import RoadMapBody from './RoadMapBody';
import TitleTag from './TitleTag';
import ReadingBody from './ReadingBody';
import AngleRight from 'components/fontAwesome/AngleRight';
import { NavLink } from 'react-router-dom';

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
                            <NavLink to="/lectures">
                                <h1 className='title is-4 is-spaced'>
                                    {title}
                                    {titleTag()}
                                    <span className='spanIcon'>
                                        <AngleRight/>
                                    </span>
                                </h1>
                            </NavLink>
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