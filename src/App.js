import React, {useReducer} from 'react';
import reducer, {initialState} from './reducers/index'
import { applyNumber, changeOperation, clearDisplay, memoryPlus} from './actions/index'

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const handleOne = () =>{
  //   dispatch(addOne(1))
  // }

  const handleNumber = (num) => {
    dispatch(applyNumber(num))
  }

  const handleOperation = (operator) =>{
    dispatch(changeOperation(operator))
  }

  const handleClear =() =>{
    dispatch(clearDisplay())
  }

  const handleMemory = () => {
    dispatch(memoryPlus())
  }


  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={handleMemory}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={ () => {handleNumber(1)}}/>
              <CalcButton value={2} onClick={ () => {handleNumber(2)}}/>
              <CalcButton value={3} onClick={ () => {handleNumber(3)}}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={ () => {handleNumber(4)}}/>
              <CalcButton value={5} onClick={ () => {handleNumber(5)}}/>
              <CalcButton value={6} onClick={ () => {handleNumber(6)}}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={ () => {handleNumber(7)}}/>
              <CalcButton value={8} onClick={ () => {handleNumber(8)}}/>
              <CalcButton value={9} onClick={ () => {handleNumber(9)}}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={ () => {handleOperation("+")}}/>
              <CalcButton value={"*"} onClick={ () => {handleOperation("*")}}/>
              <CalcButton value={"-"} onClick={ () => {handleOperation("-")}}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClear}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
