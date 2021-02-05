import './App.css';
import {useState} from 'react';

function App() {
  const [weight, setWeight] = useState(90);
  const [bottle, setBottle] = useState(1);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState (0);
  
  function handletSubmit(e) {
    e.preventDefault();
    let result = 0;
    let l= bottle * 0.33;
    let grams = l  * 8 * 4.5;
    let burning = weight/10;
     let gramsL= grams - (burning * time)
    if (gender === "male"){
       result = gramsL /(weight * 0.7) ;
    } else {
     result =  gramsL /(weight * 0.6);
    }
    setResult(result);
  }
  return (
  <div>
    <form onSubmit={handletSubmit}>
    <div>
      <h1>calculating alcohol blood level</h1>
      </div>
  <div>
    <label>weight (kg)</label>
    <input type="number" value={weight} onChange={e =>setWeight(e.target.value)}/>
  </div>+

  <div>
  <label>bottle</label>
    <input type="number" step="1" value={bottle} onChange={e =>setBottle(e.target.value)}/>
  </div>

  <div>
  <label>time (hours)</label>
    <input  type="number" step="1" value={time} onChange={e =>setTime(e.target.value)}/>
  </div>

  <div>
  <label>gender</label>
    <input type="radio" name="gender" value="male" defaultChecked onChange={e =>setGender(e.target.value)}/><label>Male</label>
    <input type="radio" name="gender" value="female" onChange={e =>setGender(e.target.value)}/><label>Female</label>
  </div>
  <div>
    <button>calculate</button>
    <output >{result.toFixed(1)}</output>
  </div>
  </form>
</div>

  );
}