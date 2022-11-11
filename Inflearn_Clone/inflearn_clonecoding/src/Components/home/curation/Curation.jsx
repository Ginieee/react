import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { curationData } from 'Data/home/curationData';
import CurationCard from './CurationCard';

function Curation(props) {
    return (
        <section className='curation'>
            <div className='container'>
                <div className='header'>
                    <Link to='/pages'>
                        <h1 className='title is-4 is-spaced'>
                            읽어보기
                            <span className='icon'>
                                <i className='fal fa-angle-right'>
                                    <FontAwesomeIcon icon={faAngleRight}/>
                                </i>
                            </span>
                        </h1>
                    </Link>
                </div>
                <div className='content'>
                    <div className='curation_container'>
                        <div className='curation_wrapper'>
                            {
                                curationData.map((item,i)=>{
                                    return (
                                        <CurationCard
                                        linkSrc={item.linkSrc}
                                        imgSrc={item.imgSrc}
                                        title={item.title}
                                        text={item.text}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Curation;