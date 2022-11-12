import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import RoadmapSlide from './RoadmapSlide';
import { roadmapRootData } from 'Data/home/roadmapRootData';


function RoadmapRoot(props) {

    const totalCnt = roadmapRootData.length;

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
        if(window.innerWidth >= 1080) {
            setViewCnt(4);
        }
        else if(window.innerWidth >= 618) {
            setViewCnt(3);
        }
        else if(window.innerWidth <= 617) {
            setViewCnt(2);
        }
        console.log(viewCnt)
    }

    return (
        <section className='roadmap_root'>
            <div className='container'>
                <div className='main_course_list'>
                    <div className='header'>
                        <div className='courses_header'>
                            <Link to='/roadmaps'>
                                <h1 className='title is-4 is-spaced'>
                                기본부터 실무까지 제시해주는 로드맵 🏃🏻‍♀️
                                <span className='courses_tag'>RoadMap!!</span>
                                <span className='icon'>
                                    <i className='fal fa-angle-right'>
                                        <FontAwesomeIcon icon={faAngleRight}/>
                                    </i>
                                </span>
                                </h1>
                            </Link>
                            <p className='subtext is-2'>아무것도 몰라도 따라오다 보면 전문가가 될 수 있어요!</p>
                        </div>
                    </div>
                    <div className='roadmap_content'>
                        <div className='InfD__Carousel_cards InfD__FloatButton_cover'>
                            <Swiper
                            className='swiper-container roadmap'
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
                                }
                            }}
                            >
                                {
                                    roadmapRootData.map((item,i)=> {
                                        return (
                                            <SwiperSlide
                                            key={'roadmapSlide'+i}>
                                                <RoadmapSlide
                                                linkSrc={item.linkSrc}
                                                imgSrc={item.imgSrc}
                                                title={item.title}
                                                author={item.author}/>
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

export default RoadmapRoot;