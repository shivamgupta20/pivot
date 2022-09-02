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
createObject(defaultDate, Source, Activity){
  const children = [];
  return {
    title: defaultDate,
    children: children
  }
}
  groupBy2(){
    ///sorting
    let result = [];
    data.forEach(item =>{
      const {defaultDate, Source, Activity} = item;
      if(result.length === 0 || result[result.length-1].title !== defaultDate){
        result.push(createObject(defaultDate, Source, Activity))
      }
    })
  }

  groupBy() {
    const groupedData = _.groupBy(data, (eachData) => columns.map(eachCol => eachData[eachCol]))
    console.log("groupedData", groupedData);
let obj
    for (let dataKey in groupedData) {
       obj = dataKey.split(',').reverse().reduce((res, key) => ({ [key]: res }), {});
      // console.log("dataKey", dataKey, obj);
    }
    // groupedData.reduce((pv, cv, ci, arr)=>{

    // },

    // {})
    console.log("obj", obj);

  }
  render() {
    console.log(this.groupBy())
    return <div>PIVOT TABLE</div>
  }

}

export default App;
