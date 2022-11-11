import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide} from 'swiper/react';
import FreeCoursesSlide from './FreeCoursesSlide';
import { freeCoursesData } from 'Data/home/freeCoursesData';

// Import Swiper styles
import "swiper/css";

function FreeCourses(props) {

    const totalCnt = freeCoursesData.length;

    const swiperRef = useRef(null);

    const [nextAble, setNextAble] = useState(true);
    const [prevAble, setPrevAble] = useState(false);
    const [viewCnt, setViewCnt] = useState(5);

    const nextSlide = () => {
        swiperRef.current.slideNext();
    }

    const prevSlide = () => {
        swiperRef.current.slidePrev();
    }

    const checkNextAble = (index) => {

        if((totalCnt - index) <= viewCnt ) {
            console.log('false');
            setNextAble(false);

        } 
        else {
            console.log('true');
            setNextAble(true);
        }
    }

    const checkPrevAble = (index) => {
        if(index === 0 ) {
            console.log('false');
            setPrevAble(false);

        } 
        else {
            console.log('true');
            setPrevAble(true);
        }
    }

    const checkViewCnt = () => {
        console.log('innerwidth ' + window.innerWidth )
        if(window.innerWidth >= 1240) {
            setViewCnt(5);
        }
        else if(window.innerWidth >= 1080) {
            setViewCnt(4);
        }
        else if(window.innerWidth >= 618) {
            setViewCnt(3);
        }
        console.log(viewCnt)
    }

    return (
        <section className='free-courses root'>
            <div className='container'>
                <div className='main_course_list'>
                    <div className='header'>
                        <div className='courses_header'>
                            <Link to={`/courses?charge=free&order=seq`}>
                                <h1 className='title is-4 is-spaced'>
                                무료강의? 오히려 좋아 ✨
                                    <span className='icon'>
                                        <i className='fal fa-angle-right'>
                                            <FontAwesomeIcon icon={faAngleRight}/>
                                        </i>
                                    </span>
                                </h1>
                            </Link>
                            <p className='subtext is-2'>무료 강의부터 가볍게 시작해 보세요.</p>
                        </div>
                    </div>
                    <div className='free-courses_content'>
                        <div className='InfD__Carousel_cards five InfD__FloatButton_cover'>
                            <Swiper
                            className='swiper-container free-courses'
                            slidesPerView={2}
                            slidesPerGroup={2}
                            onSwiper={(swiper)=>{
                                swiperRef.current = swiper;
                            }}
                            onSlideChange={(swiper)=>{
                                console.log(swiper.activeIndex);
                                checkViewCnt();
                                checkNextAble(swiper.activeIndex);
                                checkPrevAble(swiper.activeIndex);
                            }}
                            spaceBetween={10}
                            breakpoints={{
                                618: {
                                    slidesPerView: 3,
                                    slidesPerGroup: 3,
                                },
                                1080: {
                                    slidesPerView: 4,
                                    slidesPerGroup: 4,
                                },
                                1240: {
                                    slidesPerView: 5,
                                    slidesPerGroup: 5,
                                }
                            }}
                            >
                                {
                                    freeCoursesData.map((item,i)=> {
                                        return (
                                            <SwiperSlide
                                            key={'freeSlide'+i}>
                                                <FreeCoursesSlide
                                                linkSrc={item.courseTitle}
                                                imgSrc={item.imgSrc}
                                                ribbonCnt={item.ribbonCnt}
                                                courseTitle={item.courseTitle}
                                                instructor={item.instructor}
                                                rating={item.rating}
                                                review={item.review}
                                                tags={item.tags}
                                                level={item.level}
                                                group={item.group}
                                                use={item.use}/>
                                            </SwiperSlide>
                                        );
                                    })
                                }
                            </Swiper>
                            <div className={'InfD__FloatButton_circle free-courses-swiper-button-next next' + ( !nextAble ? " swiper-button-disabled" : "")}
                            onClick={nextSlide}>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </div>
                            <div className={'InfD__FloatButton_circle free-courses-swiper-button-prev prev' + ( !prevAble ? " swiper-button-disabled" : "")}
                            onClick={prevSlide}>
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FreeCourses;