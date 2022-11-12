import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide} from 'swiper/react';
import { recentData } from 'Data/home/recentData';
import RecentSlide from './RecentSlide';

function RecentRoot(props) {

    const totalCnt = recentData.length;

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
        <section className='ab-test-31 recent_courses root'>
            <div className='container'>
                <div className='main_course_list'>
                    <div className='header'>
                        <div className='courses_header'>
                            <Link to='/courses?order=recent'>
                                <h1 className='title is-4 is-spaced'>
                                    따끈따끈, 신규 강의를 만나보세요! 🙋🏻‍♀️
                                    <span className='courses_tag'>NEW!!</span>
                                    <span className='icon'>
                                        <i className='fal fa-angle-right'>
                                            <FontAwesomeIcon icon={faAngleRight}/>
                                        </i>
                                    </span>
                                </h1>
                            </Link>
                        </div>
                    </div>
                    <div className='ab-test-31 recent_courses_content'>
                        <div className='InfD__Carousel_cards five InfD__FloatButton_cover'>
                            <Swiper
                            className='swiper-container five ab-test-31 recent_courses'
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
                                    recentData.map((item,i)=> {
                                        return (
                                            <SwiperSlide
                                            key={'freeSlide'+i}>
                                                <RecentSlide
                                                linkSrc={item.linkSrc}
                                                imgSrc={item.imgSrc}
                                                ribbonCnt={item.ribbonCnt}
                                                courseTitle={item.courseTitle}
                                                instructor={item.instructor}
                                                price={item.price}
                                                tags={item.tags}
                                                level={item.level}
                                                group={item.group}
                                                use={item.use}
                                                isSale={item.isSale}
                                                saleText={item.saleText}
                                                delPrice={item.delPrice}/>
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

export default RecentRoot;