import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";


function PaginationSlider(props) {

    const swiperRef = useRef(null);

    const prevSlide = () => {
        swiperRef.current.slidePrev();
    }
    
    const nextSlide = () => {
        swiperRef.current.slideNext();
    }

    const goToSlide4 = () => {
        swiperRef.current.slideTo(4);
    }

    const totalCnt = swiperRef.current.slides.length-2

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <>
        <Swiper
        onSlideChange={(swiper)=>{
            setCurrentIndex(swiper.realIndex+1)
        }}
        onSwiper={(swiper)=>{
            swiperRef.current = swiper;
        }} 
        loop={true}
        pagination={true} 
        autoplay = {{
            delay:2500,
            disableOnInteraction:false
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper">
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
            <SwiperSlide>Slide 10</SwiperSlide>
        </Swiper>
        <button
        onClick={prevSlide}>
            Go to Prev Slide
        </button>
        <button
        onClick={nextSlide}>
            Go to Next Slide
        </button>
        <button
        onClick={goToSlide4}>
            Go to Slide4
        </button>
        <div>
            {currentIndex}/{totalCnt}
        </div>
        </>
    );
}

export default PaginationSlider;