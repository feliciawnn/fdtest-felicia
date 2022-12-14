import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Scrollbar } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';
import "swiper/css/navigation";
import '../App.css'

import ReviewCard from './ReviewCard';

function LatestReview(reviewsList){
    reviewsList = reviewsList["reviewsList"]
    return(
        <Container>
            <Row>
                <Col>
                    <h2 className='sectionTitle'>Latest Reviews</h2>
                    <p className='sectionSubtitle'>So you can make better purchase decision</p>
                    <a className='seeMore' href='#'>
                        See more 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#DB284E" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </a>
                    <div className='swiperContainer'>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar]}
                            spaceBetween={50}
                            slidesPerView={2}
                            navigation
                            pagination={{ clickable: true }}>
                    
                            {
                                reviewsList.map((item) => (
                                    <SwiperSlide><ReviewCard setItem={item} /></SwiperSlide>
                                ))
                            }    
                        </Swiper>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default LatestReview