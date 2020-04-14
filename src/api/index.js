import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {

    let changeableurl = url
    if(country){
        changeableurl = `${url}/countries/${country}`
    }
    try{
        const{data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeableurl);
        // const modifiedData = {confirmed, recovered, deaths, lastUpdate};
        return {confirmed, recovered, deaths, lastUpdate};
    }
    catch(error){
        console.log(error);
    }
}

// Daily data from this url https://covid19.mathdro.id/api/daily
export const fetchDailyData = async () => {
    try{
        const {data} = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));
    return modifiedData;
    }
    catch(error){
        console.log(error);
    }
}
// export countries names
export const fetchCountries = async () => {
    try {
      const { data: { countries } } = await axios.get(`${url}/countries`);
  
      return countries.map((country) => country.name);
    } catch (error) {
      return error;
    }
  };