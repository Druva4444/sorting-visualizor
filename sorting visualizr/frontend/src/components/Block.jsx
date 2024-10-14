import { useState } from 'react';
import './a.css';

function Block(props) {
  const [list, setList] = useState([...props.list]);
  const [currentIndices, setCurrentIndices] = useState({ i: null, j: null }); 
  async function sortList() {
    let sortedList = [...list]; 

    for (let i = 0; i < sortedList.length; i++) {
      for (let j = i + 1; j < sortedList.length; j++) {

        setCurrentIndices({ i, j });

        
        await new Promise(resolve => setTimeout(resolve, 1)); 
        if (sortedList[i] > sortedList[j]) {
          [sortedList[i], sortedList[j]] = [sortedList[j], sortedList[i]];
          setList([...sortedList]); 
        }
      }
    }
    setCurrentIndices({ i: null, j: null }); 
  }

 
  async function insertionSort() {
    let array = [...list]; 

    for (let i = 1; i < array.length; i++) {
      let current = array[i];
      let j = i - 1;

      setCurrentIndices({ i, j });
      while (j >= 0 && array[j] > current) {
        array[j + 1] = array[j]; 
        setList([...array]); 
        await new Promise(resolve => setTimeout(resolve, 1)); 
        j--;
        setCurrentIndices({ i, j }); 
      }

      array[j + 1] = current;
      setList([...array]); 
    }

    setCurrentIndices({ i: null, j: null });
  }

  return (
    <>
      <div className="container" style={{ display: 'flex' }}>
        {list.map((val, index) => {
          let backgroundColor = 'yellow';
          if (index === currentIndices.i) backgroundColor = 'blue'; // Color for `i`
          if (index === currentIndices.j) backgroundColor = 'green'; 

          return (
            <div
              style={{
                backgroundColor: backgroundColor,
                color: 'red',
                height: val + 'px',
                border: '0.5px solid black',
                width: '10px',
                margin: '1px',
              }}
              key={index}
            ></div>
          );
        })}
      </div>
      
      <button onClick={sortList}>Bubble Sort</button>
      <button onClick={insertionSort}>Insertion Sort</button>
    </>
  );
}

export default Block;
