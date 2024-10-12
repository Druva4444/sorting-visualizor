
import Block from './components/Block'


function App() {
 let list=[]
 function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
  
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

for(let i=1;i<=100;i++){
list.push(i)
}
list=shuffleArray(list)
  return(<><Block list={list}/></>)
}

export default App
