import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Mousewheel } from "swiper";

import "swiper/css";
import { reviewData } from 'Data/home/reviewData';
import ReviewCard from './ReviewCard';


function Review(props) {
    return (
        <section className='review'>
            <div className='container'>
                <div className='content'>
                    <div className='content_left'>
                        <h1 className='title is-2'>
                            <span id='count_user'>988,525</span>
                            명이
                            <br/>
                            인프런과 함께합니다.
                        </h1>
                        <div className='text is-1'>
                        인프런은 강의의 수강생수, 평점을 투명하게 공개합니다.
                        <br/>
                        실제로 많은 온오프라인 학원들은 단기적 성과를 높이기 위해 잘나온 특정 후기만 노출 하거나, 아예 숨겨버리는 경우가 많습니다.
                        <br/>
                        반면 인프런은 강의에 대한 후기, 학생수 등 정보를 투명하게 공개합니다. 신뢰성을 바탕으로 학습자들이 더 좋은 컨텐츠를 선택하고 교육의 질을 높입니다.
                        </div>
                        <div className='buttons'>
                            <Link className='button space-inset-stretch-5'
                            to='/community/reviews'>
                                <span>수강평 더보기</span>
                                <span className='icon'>
                                    <i className='fal fa-angle-right'>
                                        <FontAwesomeIcon icon={faAngleRight}/>
                                    </i>
                                </span>
                            </Link>
                            <Link className='button space-inset-stretch-5'
                            to='/request-to-inflearn'>
                                <span>기능/강좌 요청하기</span>
                                <span className='icon'>
                                    <i className='fal fa-angle-right'>
                                        <FontAwesomeIcon icon={faAngleRight}/>
                                    </i>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className='content_right'>
                        <Swiper
                        className='swiper-container review_swiper'
                        direction={"vertical"}
                        mousewheel={true}
                        grabCursor={true}
                        loop={true}
                        slidesPerView={"auto"}
                        centeredSlides={true}
                        modules={[Mousewheel]}
                        >
                            {
                                reviewData.map((item,i)=> {
                                    return (
                                        <SwiperSlide
                                        key={'reviewSlide' + i}
                                        className='box space-inset-8'>
                                            <ReviewCard
                                            nameText={item.nameText}
                                            timeText={item.timeText}
                                            linkSrc={item.linkSrc}
                                            lectureTitle={item.lectureTitle}
                                            reviewText={item.reviewText}/>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        <div className='swiper-mask'>

                        </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Review;