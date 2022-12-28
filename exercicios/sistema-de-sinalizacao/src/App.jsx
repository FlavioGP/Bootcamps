import './App.css'

function App() {

  const changeColor = (color) => {
    const lightGreen = document.querySelector('.light-green');
    const lightYellow = document.querySelector('.light-yellow');
    const lightRed = document.querySelector('.light-red');

    lightYellow.style.filter = 'brightness(20%)'
    lightRed.style.filter = 'brightness(20%)'
    lightGreen.style.filter = 'brightness(20%)'
    
    if(color == 'green') {
      lightGreen.style.filter = 'brightness(100%)'
    }
    if(color == 'yellow'){
      lightYellow.style.filter = 'brightness(100%)' 
    }
    if(color == 'red'){
      lightRed.style.filter = 'brightness(100%)'  
    }

  }
  const handleClick = e => {
    const element = e.target;

    if(element.classList.contains('green')) changeColor('green')
    if(element.classList.contains('yellow')) changeColor('yellow')
    if(element.classList.contains('red')) changeColor('red')
    
  }
  
  return (
    <section className="app">
      <div className="traffic-light">
        <div className="light light-green"></div>
        <div className="light light-yellow"></div>
        <div className="light light-red"></div>
      </div>
      <div className="button-group" onClick={e => handleClick(e)}>
      <button className='green'/>
      <button className='yellow'/>
      <button className='red'/>
      </div>
    </section>
    )
}

export default App;
