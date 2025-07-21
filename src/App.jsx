import { useState,useEffect } from 'react'

import './App.css'
import Card from './components/card.jsx'

function shuffleArray(array) {
    for (let i = array.length - 1; i >= 1; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
let urls = ['https://last-airbender-api.fly.dev/api/v1/characters?name=gansu',
  'https://last-airbender-api.fly.dev/api/v1/characters?name=tong',
  'https://last-airbender-api.fly.dev/api/v1/characters?name=miyuki',
  'https://last-airbender-api.fly.dev/api/v1/characters?name=kuruk',
  'https://last-airbender-api.fly.dev/api/v1/characters?name=ikki',
  'https://last-airbender-api.fly.dev/api/v1/characters?name=lightning bolt zolt',
  'https://last-airbender-api.fly.dev/api/v1/characters?name=korra',
  'https://last-airbender-api.fly.dev/api/v1/characters?name=the gopher',
  'https://last-airbender-api.fly.dev/api/v1/characters?name=baboon spirit',
  'https://last-airbender-api.fly.dev/api/v1/characters?name=arnook',
  'https://last-airbender-api.fly.dev/api/v1/characters?name=light spirit',
  'https://last-airbender-api.fly.dev/api/v1/characters?name=momo',
  'https://last-airbender-api.fly.dev/api/v1/characters?name=fung',
  'https://last-airbender-api.fly.dev/api/v1/characters?name=hama',
  'https://last-airbender-api.fly.dev/api/v1/characters?name=chef']

function App() {
  let [currentscore,setCurrentScore] = useState(0);
  let [bestscore,setBestScore] = useState(0);
  let [clickedcards,setClickedCards] = useState([]);
  let [fetched,setFetched] = useState([]);
  let finalArray = [];
 if(!(fetched.length==0)) {finalArray = shuffleArray(fetched);
  // alert( 'randomize was run ')
}


   useEffect(() => {
    // alert('effect was run')
   
   Promise.all(
    urls.map(url =>
    fetch(url)
      .then(res => res.json())
      
  )
)
.then(results => {

  setFetched(results)
});

  }, []);


  return (
    <>
    <h1>Memory card game!</h1>
    <h4>Score:{currentscore}</h4>
    <h4>Best score: {bestscore}</h4>

    <div className='flexcontainer'>
      {finalArray.length>0 && <Card title={finalArray[0][0].name} link={finalArray[0][0].photoUrl} setarra={setClickedCards} arra={clickedcards} setcounT={setCurrentScore} counT={currentscore} topscor={bestscore} settopscor={setBestScore}/> }
      {finalArray.length>0 && <Card title={finalArray[1][0].name} link={finalArray[1][0].photoUrl} setarra={setClickedCards} arra={clickedcards} setcounT={setCurrentScore} counT={currentscore} topscor={bestscore} settopscor={setBestScore}/> }
      {finalArray.length>0 && <Card title={finalArray[2][0].name} link={finalArray[2][0].photoUrl} setarra={setClickedCards} arra={clickedcards} setcounT={setCurrentScore} counT={currentscore} topscor={bestscore} settopscor={setBestScore}/> }
      {finalArray.length>0 && <Card title={finalArray[3][0].name} link={finalArray[3][0].photoUrl} setarra={setClickedCards} arra={clickedcards} setcounT={setCurrentScore} counT={currentscore} topscor={bestscore} settopscor={setBestScore}/> }
      {finalArray.length>0 && <Card title={finalArray[4][0].name} link={finalArray[4][0].photoUrl} setarra={setClickedCards} arra={clickedcards} setcounT={setCurrentScore} counT={currentscore} topscor={bestscore} settopscor={setBestScore}/> }
      {finalArray.length>0 && <Card title={finalArray[5][0].name} link={finalArray[5][0].photoUrl} setarra={setClickedCards} arra={clickedcards} setcounT={setCurrentScore} counT={currentscore} topscor={bestscore} settopscor={setBestScore}/> }
      {finalArray.length>0 && <Card title={finalArray[6][0].name} link={finalArray[6][0].photoUrl} setarra={setClickedCards} arra={clickedcards} setcounT={setCurrentScore} counT={currentscore} topscor={bestscore} settopscor={setBestScore}/> }
      {finalArray.length>0 && <Card title={finalArray[7][0].name} link={finalArray[7][0].photoUrl} setarra={setClickedCards} arra={clickedcards} setcounT={setCurrentScore} counT={currentscore} topscor={bestscore} settopscor={setBestScore}/> }
      {finalArray.length>0 && <Card title={finalArray[8][0].name} link={finalArray[8][0].photoUrl} setarra={setClickedCards} arra={clickedcards} setcounT={setCurrentScore} counT={currentscore} topscor={bestscore} settopscor={setBestScore}/> }
      {finalArray.length>0 && <Card title={finalArray[9][0].name} link={finalArray[9][0].photoUrl} setarra={setClickedCards} arra={clickedcards} setcounT={setCurrentScore} counT={currentscore} topscor={bestscore} settopscor={setBestScore}/> }
      {finalArray.length>0 && <Card title={finalArray[10][0].name} link={finalArray[10][0].photoUrl} setarra={setClickedCards} arra={clickedcards} setcounT={setCurrentScore} counT={currentscore} topscor={bestscore} settopscor={setBestScore}/>}
      {finalArray.length>0 && <Card title={finalArray[11][0].name} link={finalArray[11][0].photoUrl} setarra={setClickedCards} arra={clickedcards} setcounT={setCurrentScore} counT={currentscore} topscor={bestscore} settopscor={setBestScore}/>}
      {finalArray.length>0 && <Card title={finalArray[12][0].name} link={finalArray[12][0].photoUrl} setarra={setClickedCards} arra={clickedcards} setcounT={setCurrentScore} counT={currentscore} topscor={bestscore} settopscor={setBestScore}/>}
      {finalArray.length>0 && <Card title={finalArray[13][0].name} link={finalArray[13][0].photoUrl} setarra={setClickedCards} arra={clickedcards} setcounT={setCurrentScore} counT={currentscore} topscor={bestscore} settopscor={setBestScore}/>}
      {finalArray.length>0 && <Card title={finalArray[14][0].name} link={finalArray[14][0].photoUrl} setarra={setClickedCards} arra={clickedcards} setcounT={setCurrentScore} counT={currentscore} topscor={bestscore} settopscor={setBestScore}/>}
    </div>

    
      
    </>
  )
}

export default App
