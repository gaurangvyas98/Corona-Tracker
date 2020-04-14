import React from "react";
import Cards from "./Components/Cards/Cards";
import Charts from './Components/Charts/Charts';
import CountryPicker from './Components/CountryPicker/CountryPicker';

import styles from './App.module.css';
import {fetchData} from './api';
import coronaImage from "./images/image.png";

// dont need to specify api/index.js it will automatically fetch index.js inside api folder

class App extends React.Component {

    state = {
        data:{},
        country:'',
    }

    handleCountryChange = async (country) =>{
        const fetchedData = await fetchData(country);
        this.setState({data : fetchedData , country: country});
        
        //fetch the data
        //set the state
    };

    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data : fetchedData});
    }

    render() {
        const {data, country} = this.state;
      return (
          <div className={styles.container}>
              <img className={styles.image} src={coronaImage} alt="COVID-19"></img>
              <Cards data={data} />
              <CountryPicker handleCountryChange={this.handleCountryChange}/>
              <Charts data={data} country={country}/>
          </div>
      );
    }
}

export default App;