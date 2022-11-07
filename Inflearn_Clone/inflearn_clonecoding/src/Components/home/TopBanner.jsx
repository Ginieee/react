import React, { useState, useRef } from 'react';
// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { topBannerContent } from 'Data/home/topBannerContent';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import TopBannerSlide from './TopBannerSlide';

function TopBanner(props) {

    const swiperRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [playAuto, setPlayAuto] = useState(true);

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
                pagination={true}
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
            </Swiper>
            {currentIndex}/{totalCnt}
            <button
            onClick={setAuto}
            >
                play or stop
            </button>
            <div>
                {String(playAuto)}
            </div>
            <button onClick={prevSlide}>Prev</button>
            <button onClick={nextSlide}>Next</button>
            {
                topBannerContent.map((item)=>{
                    return (
                        <button
                        onClick={
                            (e) => {
                                goToSlide(item.index, e)
                            }
                        }
                        >
                            {String(item.index)}
                        </button>
                    );
                })
            }
        </section>
    );
}

export default TopBanner;