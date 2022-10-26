import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';

import EditorChoice from './components/EditorChoice';
import BannerBox from './components/BannerBox';
import LatestArticle from './components/LatestArticle';
import LatestReview from './components/LatestReview';
import LatestVideo from './components/LatestVideo';
import Groups from './components/Groups';
import Trending from './components/Trending';
import Brands from './components/Brands';


class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
        items: [],
        isLoaded: false
    };
  }
  
  // Fetches the data from API
  componentDidMount() {
    fetch("https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp")
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json, //bisa apus
                editorList: json["editor's choice"],
                articleList: json["latest articles"],
                reviewList: json["latest review"],
                isLoaded: true
            });
            //console.log(this.state.items)
        })
  }


  render() {
      const { isLoaded, items } = this.state;
        if (!isLoaded) return <div>
            <h1> Please wait some time.... </h1> </div> ;
            
      return (
      <div className = "App">
          <BannerBox setText='Top Frame 970x50' setHeight = {50} setWidth ={970} />
          <BannerBox setText='Billboard 970x250' setHeight = {250} setWidth ={970} />
          <EditorChoice choiceList = {this.state.editorList}/>
          <BannerBox setText={`
              Horizontal 970x250
              (Internal campaign only)
              `
              } 
              setHeight = {250} setWidth ={970} 
          />
          <LatestArticle articleList={this.state.articleList} />
          
          <Container>
                <Row>
                    <Col sm={8}>
                        <LatestReview reviewsList={this.state.reviewList}/>
                    </Col>
                    <Col sm={4}>
                    <BannerBox setText={`
                        MR 2
                        300x250
                        `
                        } 
                        setHeight = {250} setWidth ={300} 
                    />
                    </Col>
                </Row>
            </Container>
            <Groups />
            <LatestVideo />
            <Trending trendingList={this.state.editorList}/>
            <Brands />
      </div>
  );
  }
}

export default App;