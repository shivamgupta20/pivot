import './App.css';
import React from 'react';
import { data } from './data';
import _ from 'lodash';

const columns = ['defaultDate', 'Source', 'Activity'];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  groupBy() {
    const groupedData = _.groupBy(data, (eachData) => columns.map(eachCol => eachData[eachCol]))
    console.log("groupedData", groupedData);

    for (let dataKey in groupedData) {
      const obj = dataKey.split(',').reverse().reduce((res, key) => ({ [key]: res }), {});
      console.log("dataKey", dataKey, obj);
    }
    // groupedData.reduce((pv, cv, ci, arr)=>{

    // },

    // {})

  }
  render() {
    console.log(this.groupBy())
    return <div>PIVOT TABLE</div>
  }

}

export default App;
