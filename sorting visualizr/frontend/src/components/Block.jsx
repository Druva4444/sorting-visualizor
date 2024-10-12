import { useState } from 'react';
import './a.css';

function Block(props) {
  const [list, setList] = useState([...props.list]);
  const [currentIndices, setCurrentIndices] = useState({ i: null, j: null }); // Track i and j

  // Sort function with delay for visual effect
  async function sortList() {
    let sortedList = [...list]; // Copy the list to avoid direct mutation

    for (let i = 0; i < sortedList.length; i++) {
      for (let j = i + 1; j < sortedList.length; j++) {
        // Set current i and j for visualization
        setCurrentIndices({ i, j });
        
        // Delay to visualize the comparison
        await new Promise(resolve => setTimeout(resolve, 1)); // 100ms delay
        
        if (sortedList[i] > sortedList[j]) {
          [sortedList[i], sortedList[j]] = [sortedList[j], sortedList[i]];
          setList([...sortedList]); // Update the list
        }
      }
    }
    setCurrentIndices({ i: null, j: null }); // Reset indices after sorting
  }

  return (
    <>
      <div className="container" style={{ display: 'flex' }}>
        {list.map((val, index) => {
          let backgroundColor = 'yellow';
          if (index === currentIndices.i) backgroundColor = 'blue'; // Color for `i`
          if (index === currentIndices.j) backgroundColor = 'green'; // Color for `j`

          return (
            <div
              style={{
                backgroundColor: backgroundColor,
                color: 'red',
                height: val + 'px',
                border: '0.5px solid black',
                width: '10px',
                margin: '1px'
              }}
              key={index}
            ></div>
          );
        })}
      </div>
      <button onClick={sortList}>Sort</button>
    </>
  );
}

export default Block;
