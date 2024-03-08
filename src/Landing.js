import panda from './giphy.gif';
import { useState } from 'react';

function Landing({renderCallback}) {

    const [inputText, setInputText] = useState('');
    const [warning, showWarning] = useState(false);

    const check = (render) => {
      if (inputText === 'ostrzytko')
        render(true);
      else showWarning(true);
    };

    return(
        <>
        <div className="App-header fade-in-effect">
        <h2>
          Potwierdź, że jesteś Ancymonkiem.
        </h2>
        <img className="mt-4 mb-3" src={panda} alt="panda" width={'300px'} height={'200px'} />
        <p style={{fontSize:"21px"}}>
          Jak inaczej mówimy na temperówkę?
        </p>
        <div>
          <div className="input-group mb-3">
            <input onChange={(e) => setInputText(e.target.value)} type="text" className="form-control" placeholder="Odpowiedź..." aria-label="Odpowiedź" aria-describedby="button-addon2" />
            <button onClick={() => check(renderCallback)} className="btn btn-outline-secondary" type="button" id="button-addon2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
            </svg></button>
          </div>
          {warning && <div style={{color:"red", fontSize:"16px"}}><center>Nieprawidłowe hasło.</center></div>}
        </div>
      </div>
        </>
    );
}

export default Landing;