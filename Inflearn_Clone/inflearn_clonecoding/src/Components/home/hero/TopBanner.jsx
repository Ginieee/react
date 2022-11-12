import React, { useState, useRef } from 'react';
// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faPlay, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'

// Import Swiper styles
import "swiper/css";
import TopBannerSlide from './TopBannerSlide';
import { topBannerContent } from 'Data/home/topBannerContent';

function TopBanner(props) {

    const swiperRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [playAuto, setPlayAuto] = useState(true);
    const [showMore, setShowMore] = useState(false);

    const totalCnt = topBannerContent.length;

    const setAuto = () => {

        if(playAuto){
            swiperRef.current.autoplay.stop();
        }
        else {
            swiperRef.current.autoplay.start();
        }

        setPlayAuto(!playAuto)
    }

    const setMore = () => {
        setShowMore(!showMore)
    }

    const indexNow = (idx) => {
        if(idx===currentIndex) return true;
        else return false;
    }

    const goToSlide = (idx, e) => {
        swiperRef.current.slideTo(idx);
        e.preventDefault();
    }

    const nextSlide = () => {
        swiperRef.current.slideNext();
    }

    const prevSlide = () => {
        swiperRef.current.slidePrev();
    }

    return (
        <section className='hero'>
            <Swiper
                className='hero_swiper'
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay:2500,
                    disableOnInteraction:false
                }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                    setCurrentIndex(swiper.realIndex + 1);
                }}
            >
                {
                    topBannerContent.map((item)=>{
                        return(
                            <SwiperSlide
                            key={`swiperSlide` + item.index}
                            className='scene e-marketing-cls'
                            >
                                <TopBannerSlide
                                link={item.link}
                                bgColor={item.bgColor}
                                pcImg={item.pcImg}
                                mobileImg={item.mobileImg}
                                altMessage={item.altMessage}
                                tags={item.tags}
                                h1Color={item.h1Color}
                                h1Text={item.h1Text}
                                pColor={item.pColor}
                                pText={item.pText}
                                />
                            </SwiperSlide>
                        );
                    })
                }
                <div className='pagination-container'>
                    <div className='container'>
                        <div className='swiper-pagination-controller'>
                            <div className='index-wrapper'>
                                <span className='current-index'>{currentIndex}</span>
                                /
                                <span className='total-count'>{totalCnt}</span>
                            </div>
                            <div className='control-wrapper'>
                                <button type='button' className='control-previous-button e-previous-banner'
                                onClick={prevSlide}>
                                    <i className='far fa-chevron-left'>
                                        <FontAwesomeIcon icon={faChevronLeft}/>
                                    </i>
                                </button>
                                <button type='button' 
                                onClick={setAuto}
                                className={'control-play-pause-button e-play-pause-swiper' + (!playAuto ? " play" : "")}>
                                    <svg width="14px" height="14px" enableBackground="new 0 0 155.3 159.3" viewBox='0 0 155.3 159.3' xmlns='http://www.w3.org/2000/svg'>
                                        <path fill='#ffffff' d='m62 135.3h-13.3c-1.9 0-3.4-1.5-3.4-3.4v-104.6c0-1.9 1.5-3.4 3.4-3.4h13.3c1.9 0 3.4 1.5 3.4 3.4v104.7c-.1 1.8-1.6 3.3-3.4 3.3z'></path>
                                        <path fill='#ffffff' d='m106.6 135.3h-13.3c-1.9 0-3.4-1.5-3.4-3.4v-104.6c0-1.9 1.5-3.4 3.4-3.4h13.3c1.9 0 3.4 1.5 3.4 3.4v104.7c0 1.8-1.5 3.3-3.4 3.3z'></path>
                                    </svg>
                                    <i className='fas fa-play'>
                                        <FontAwesomeIcon icon={faPlay}/>
                                    </i>
                                </button>
                                <button type='button' className='control-next-button e-next-banner'
                                onClick={nextSlide}>
                                    <i className='far fa-chevron-right'>
                                        <FontAwesomeIcon icon={faChevronRight}/>
                                    </i>
                                </button>
                            </div>
                        </div>
                        <div className='divider'></div>
                        <div className='swiper-pagination-wrapper'>
                            <div className='swiper-pagination swiper-pagination-clickable swiper-pagination-bullets'
                            style={{transform:'translate(0px,0px)'}}>
                                {
                                    topBannerContent.map((item)=>{

                                        const result = 
                                        <span 
                                        key={`pagination` + item.index}
                                        className={'swiper-pagination-bullet hero-bullet' + (indexNow(item.index) ? " swiper-pagination-bullet-active" : "")}
                                        onClick={
                                            (e) => {
                                                goToSlide(item.index, e)
                                            }
                                        }
                                        tabIndex='0'>
                                            {item.paginationText}
                                        </span>

                                        return(
                                            result
                                        );
                                    })
                                }
                            </div>
                            <div className='pagination-gradient left-gradient' style={{display:'none'}}/>
                            <div className='pagination-gradient right-gradient' style={{display:'none'}}/>
                        </div>
                        <button type='button' onClick={setMore}
                        className={'open-pages-button e-show-pages' + (showMore ? " active" : "")}>
                            <i className='far fa-chevron-down'>
                                <FontAwesomeIcon icon={faChevronDown}/>
                            </i>
                        </button>
                    </div>
                </div>
            </Swiper>
            <div className='container show-more-container' style={{display: showMore ? "block" : "none"}}>
                <div className='show-more-box'>
                    <div className='show-more-header'>
                        <h3>진행중인 모든 이벤트</h3>
                        <button type='button' 
                        className='e-close-show-more' onClick={setMore}>닫기</button>
                    </div>
                    <div className='show-more-list'>
                        <ul>
                            {
                                topBannerContent.map((item)=>{
                                    return(
                                        <li
                                        key={`showMoreList` + item.index}>
                                            <span 
                                            className={'pagination-bullet e-select-bullet hero-bullet' + (indexNow(item.index) ? " pagination-bullet-active" : "")}
                                            onClick={
                                                (e) => {
                                                    goToSlide(item.index, e)
                                                }
                                            }
                                            tabIndex='0'>
                                                {item.paginationText}
                                            </span>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TopBanner;