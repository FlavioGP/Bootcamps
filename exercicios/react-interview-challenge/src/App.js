import React, { useState } from 'react';
import './appStyle'
import * as C from './appStyle'

function App() {
  const [list, setList] = useState([]);
  const [listUndid, setListUndid] = useState([]);

  const handleClick = (e) => {
    const circle = {
      x: e.clientX,
      y: e.clientY
    }

    setList(prev => [...prev, circle]);
    console.log(list);
  }

  const handleUndo = () => {
    const newList = list.slice(0, -1);
    if(list.length === 0) return alert('não há elementos a serem desfeitos')
    setListUndid(prev => [...prev, list[list.length - 1]])
    setList(newList)
    console.log(listUndid);
  }
  const handleRedo = () => {
    if(listUndid.length === 0) return alert('não há elementos a serem Refeitos')
    setList(prev => [...prev, listUndid[listUndid.length - 1]]);
    setListUndid(listUndid.slice(0, -1))
  }

  return (
    <C.Page onClick={e => handleClick(e)}>

      <C.ButtonsGroup onClick={e => e.stopPropagation()}>
        <C.Button className="btn-undo" onClick={handleUndo}> Desfazer </ C.Button>
        <C.Button className="btn-redo" onClick={handleRedo}> Refazer </ C.Button>
      </ C.ButtonsGroup>

      {list.map((item, index) =>
        <C.Circle 
          key={`${index}-${item.x}`} 
          left={item.x} top={item.y}
          onClick={e => e.stopPropagation()}
        />
      )}
    </ C.Page>
  );
}

export default App;
