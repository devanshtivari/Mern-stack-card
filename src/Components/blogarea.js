import React, { Component} from 'react';
import Data from '../data/data';
import Card from './card';
import '../css/newsarea.css';
import Spinner from './spinner';
import axios from 'axios';

export class Blogarea extends Component {
  constructor(){
    super();
    this.state={
        articles : [],
        loading : false
    }
  }

  async componentDidMount(){
    await axios.get('http://localhost:3000/data')
    .then(res => {
      console.log("the type of data is : ", typeof res)
      console.log("the value is : ", res)
      let parsedData = res.data;
      this.setState({loading : true});
      this.setState({articles : parsedData});
    })

    // console.log("type of data is : ",typeof data);
    // let parsedData = await data.json();
    // this.setState({loading: true});
    // this.setState({articles : parsedData})
  }
 
  render(){
    return(
        <>
        {this.state.loading && <Spinner/>}
        {this.state.articles ? this.state.articles.map((elements)=>{
            return <Card name={elements.name} link={elements.links}/>
        }) : <Spinner/>
    }
        </>
    )}
  }

  export default Blogarea;
