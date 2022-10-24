import React from 'react';
import './App.css';

import EditorChoice from './components/EditorChoice';


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
            <EditorChoice choiceList = {this.state.editorList}/>
      </div>
  );
  }
}

export default App;