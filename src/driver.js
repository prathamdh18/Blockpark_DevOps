import React, { useState }  from "react";
import "./App.css";
function App() {
    const [name]= useState("");
    const [detail] = useState("");
    const [slots] = useState("");
    const [intialprice] = useState("");
    const setData = async e => {
        e.preventDefault();
    }; 
     
    return (
      <div className="App">
        <header className="App-header">
        <form onSubmit={setData}>
            <h1 style={{color: "blue"}}>DRIVER ACCOUNT</h1>
            
            <p class="padding">
            Enter Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input 
              type="text"
              name="name"
              value={name}
              placeholder= "Your Name Here"
              //onChange={e => _setname(e.target.value.toLowerCase())}
            />
          </p>
          <br></br>
          <font color="red"><label id='label2'> </label></font>
          <br></br>
            <div>
                <p class="padding">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button style={{width:200}}
                    name="detail"
                    type="button"
                    value={detail}>Balance</button>
                
                </p>
            </div>
            <div>
                <p class="padding">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button style={{width:200}}
                    name="detail"
                    type="button"
                    value={slots}>Withdraw Car</button>
                </p>
            </div>
            <div>
                <p class="padding">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button style={{width:200}}
                    name="intialprice"
                    type="button"
                    value={intialprice}>Car Rent</button>
                
                </p>
            </div>
        </form>
        </header>
        </div>
    )
}
export default App;