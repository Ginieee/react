import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';

function MentorCard({id, title, job, time, now, imgSrc, linkSrc, mentorName, ratingNumber}) {

    const isJob = () => {
        if(job !== '') {
            return (
                <div>
                    <dt>직무</dt>
                    <dd>{job}</dd>
                </div>
            );
        }
        return;
    }

    const isTime = () => {
        if(time !== '') {
            return (
                <div>
                    <dt>경력</dt>
                    <dd>{time}</dd>
                </div>
            );
        }
        return;
    }

    const isNow = () => {
        if(now !== '') {
            return (
                <div>
                    <dt>현직</dt>
                    <dd className='mentor-card__company-name'>{now}</dd>
                </div>
            );
        }
        return;
    }

    const isRating = () => {
        if(ratingNumber !== '') {
            return (
                <>
                <span className='rating-number'>{ratingNumber}</span>
                <i className='fal fa-chevron-right'>
                    <FontAwesomeIcon icon={faChevronRight}/>
                </i>
                </>
            );
        }
        return;
    }

    return (
        <section className='mentor-card e-mentoring' id={id}>
            <div className='mentor-card__top'>
                <h3 className='mentor-card__title'>{title}</h3>
                <div className='mentor-card__job-wrapper'>
                    <dl className='mentor-card__job-info-list'>
                        {isJob()}
                        {isTime()}
                        {isNow()}
                    </dl>
                    <figure className='mentor-card__thumbnail'>
                        <img src={imgSrc} alt='멘토 이미지'/>
                    </figure>
                </div>
            </div>
            <div className='mentor-card__bottom'>
                <div>
                    <Link to={linkSrc} className='mentor-card__name'>{mentorName}</Link>
                    <button className='mentor-card__rating e-show-reviews'>
                        <span className='has-icon rating-star'>
                            <i className='fas fa-star'>
                                <FontAwesomeIcon icon={faStar}/>
                            </i>
                        </span>
                        {isRating()}
                    </button>
                </div>
            </div>
        </section>
    );
}

export default MentorCard;