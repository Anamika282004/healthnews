import { useEffect } from 'react';
import { useState } from 'react';
import Card from './component/Card'
function Main() {
    // let dataval = data;
    // console.log(dataval);
    // let store = dataval.map((element)=>{
    //     return <Card datacard={element}/>
    // }) 
    const [dataval,setdataval] = useState([]);
  let store = dataval.map((element)=>{return <Card datacard={element}/>})
  let data1 = async ()=>{
  const url = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=61989ed7e06c4b91be3bbeaac9438ec6');
  const json = await url.json();
  const dusraval = json.articles;
  setdataval(dusraval); 
  }
  useEffect(() => {
      data1();
  }, []); 
  return (
    <div>
        {store}
    </div>
  )
}

export default Main
