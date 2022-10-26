import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination, Navigation, Scrollbar } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';
import "swiper/css/navigation";
import '../App.css'
import ItemCard from './ItemCard';

function Trending({trendingList}){
    const swiper = useSwiper();

    return(
        <div className='section'>
            <Container>
                <Row>
                    <Col>
                        <h2 className='sectionTitle'>Trending This Week</h2>
                        <p className='sectionSubtitle'>See our weekly most reviewed products</p>

                        <Swiper
                        modules={[Navigation, Pagination, Scrollbar]}
                        spaceBetween={50}
                        slidesPerView={4}
                        navigation
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        >
                            
                        {
                            trendingList.map((item) => (
                                <SwiperSlide><ItemCard setItem={item} /></SwiperSlide>
                            ))
                        }
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Trending