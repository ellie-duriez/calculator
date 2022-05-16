import React, {useState} from "react";
import Button from "./components/Button";

function App() {
  const [total,setTotal] = useState(0);
  const [typed,setTyped] = useState("");

  const numbers=[1,2,3,4,5,6,7,8,9,0]
  function createNumButtons(i) {
    return <Button className="num" value={i} key={i} func={() => updateTyped(i)}  />
  }

  function updateTyped (value) {
    setTyped(typed+value);
  }

  function updateTotal () {
    try{
      // eslint-disable-next-line
      setTotal(eval(typed))
    }
    catch(err) {
      setTotal("error")
    }
  }

  function resetAll () {
    setTotal("0")
    setTyped("")
  }

  return (
    <div className="container">
      <div className="displayPort">
        <span className="total">{total}</span>
        <span className="typed">{typed}</span>
    </div>
      <div className="buttons">
          <Button func={() => updateTyped("*")} value="x"/>
          <Button func={() => updateTyped("/")} value="÷"/>
          <Button func={() => updateTyped("+")} value="+"/>
          <Button func={() => updateTyped("-")} value="-"/>
          <Button func={() => updateTyped("**")} value="xʸ"/>
          <Button func={resetAll} value="C"/>
          {numbers.map(createNumButtons)}   
          <Button func={() => updateTyped(".")} value="."/>
          <Button func={updateTotal} value="="/>
      </div>
  </div>
  );
}

export default App;