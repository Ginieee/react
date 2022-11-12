import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { banner2Data } from 'Data/home/banner2Data';
import Banner2Slide from './Banner2Slide';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Banner2(props) {

    const swiperRef = useRef(null);
    const [nextAble, setNextAble] = useState(true);
    const [prevAble, setPrevAble] = useState(false);

    const nextSlide = () => {
        swiperRef.current.slideNext();
    }

    const prevSlide = () => {
        swiperRef.current.slidePrev();
    }

    const checkNextAble = (index) => {
        if( index < 2 ) {
            console.log('true');
            setNextAble(true);
        } 
        else {
            console.log('false');
            setNextAble(false);
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

    return (
        <section className='banner2'>
            <Swiper
            className='banner2_swiper swiper-container'
            modules={[Pagination]}
            slidesPerView={1}
            pagination={true}
            onSwiper={(swiper)=>{
                swiperRef.current = swiper;
            }}
            onSlideChange={(swiper)=>{
                console.log(swiper.activeIndex);
                checkNextAble(swiper.activeIndex);
                checkPrevAble(swiper.activeIndex);
            }}>
                {
                    banner2Data.map((item,i)=>{
                        return (
                            <SwiperSlide
                            key={'banner2Slide' + i}
                            style={{backgroundImage:`url(${item.imgSrc})`}}>
                                <Banner2Slide
                                h1Color={item.h1Color}
                                title={item.title}
                                linkSrc={item.linkSrc}
                                buttonText={item.buttonText}/>
                            </SwiperSlide>
                        );
                    })
                }
            <div className='container buttons_container'>
                <div className='e_swiper_buttons swiper_buttons is-hidden-mobile'>
                    <div onClick={prevSlide}
                    className={'e_swiper-button-left swiper-button' + ( !prevAble ? " swiper-button-disable" : "")}>
                        <span className='icon'>
                            <i className='fal fa-angle-left'>
                                <FontAwesomeIcon icon={faAngleLeft}/>
                            </i>
                        </span>
                    </div>
                    <div onClick={nextSlide}
                    className={'e_swiper-button-right swiper-button' + (!nextAble ? " swiper-button-disable" : "")}>
                        <span className='icon'>
                            <i className='fal fa-angle-right'>
                                <FontAwesomeIcon icon={faAngleRight}/>
                            </i>
                        </span>
                    </div>
                </div>
            </div>
            </Swiper>
        </section>
    );
}

export default Banner2;