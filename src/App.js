import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {
  const [line1, setLine1] = useState('');
  //useState es un array con 2 valores
  // linea1 es una var y setLinea1 es una fn que modifica su valor
  const [line2, setLine2] = useState('');
  const [img, setImg] = useState('');
  // let img = "Lo que mande setImg"
  const onChangeLine1 = function(event) {
    setLine1(event.target.value);// modifica el valor de line1 y renderiza todo el componente
  }
  const onChangeLine2 = function(event) {
    setLine2(event.target.value);
  }
  const onChangeImg = function (event) {
    setImg(event.target.value);
  }
  const onClickExport = function () {
    html2canvas(document.querySelector('#meme')).then(canvas => {
      //document.body.appendChild(canvas)
    var img = canvas.toDataURL('image/png');
    var link = document.createElement('a');
    link.download = 'meme.png';
    link.href = img;
    link.click();
  });
  }
  return (
    <div className='App'>
    <select onChange={onChangeImg} >
      <option value='imagenes-para-crear-memes78'>Niña fuga</option>
      <option value='imagenes-para-crear-memes67'>Bebe borracho</option>
      <option value='imagenes-para-crear-memes69'>Oso Ted</option>
    </select><br/>
    <input type='text' onChange={onChangeLine1} placeholder='línea 1' /><br/>
    <input type='text' onChange={onChangeLine2} placeholder='línea 2' /><br/>
    <button onClick={onClickExport}>Exportar</button><br/>
    <div className='span_container' id='meme'>
      <span>{line1}</span><br/>
      <span>{line2}</span>
      <img src={'/img-memes/'+img+'.png'} alt='meme' />
    </div>
    </div>
  );
}

export default App;
