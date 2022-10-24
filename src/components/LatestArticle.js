import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css'

function LatestArticle({articleList}){
    return(
        <div className='latestArticle section'>
            <Container>
                <Row>
                    <Col>
                        <h2 className='sectionTitle'>Latest Articles</h2>
                        <p className='sectionSubtitle grayText'>So you can make better purchase decision</p>
                        <a className='seeMore' href='#'>
                            See more 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#DB284E" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </a>
                    </Col>
                </Row>
                <Row>
                    {
                        articleList.map((article) => (
                            <Col sm={4}>
                                <img className='articleImage' src={article.image} />
                            <p className='subsectionTitle'>{article.title}</p>
                            <p className='subsectionSubtitle'>{article.author} <span className='grayText'> | {article.published_at}</span></p>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}

export default LatestArticle