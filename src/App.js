import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  getData = async boxPost => {
    const data = await axios.post('http://127.0.0.1:5000/registerUser', boxPost);
    return data;
  }


  submitBoxPost = () => {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const emailAddress = document.getElementById("emailAddress").value;
    const boxAddress = document.getElementById("boxAddress").value;
    const vibe = document.getElementById("vibe").value;
    const price= document.getElementById("price").value;

    var boxPost = {
      "firstName": firstName,
      "lastName": lastName,
      "phoneNumber": phoneNumber,
      "emailAddress": emailAddress,
      "boxAddress": boxAddress
    };
    console.log(boxPost, "boxPost");
    axios.post('http://127.0.0.1:5000/registerUser', boxPost).then((res) => {
      console.log(res, "result");
    });
    // console.log("data", this.getData(boxPost));
    

  }

  render() {
    return (
      <div className="hotbox-landing__container">
        <div >
          <p className="input-title">First Name:</p> 
          <input id="firstName" type="text" name="First Name" required=""/>
          <p className="input-title">Last Name:</p> 
          <input id="lastName" type="text" name="Last Name" required=""/>
          <p className="input-title">Phone Number:</p> 
          <input id="phoneNumber" type="text" name="Phone Name" required=""/>
          <p className="input-title">Email Address:</p> 
          <input id="emailAddress" type="text" name="Email Address" required=""/>
          <p className="input-title">Box Address:</p> 
          <input id="boxAddress" type="text" name="Hot Box Address" required=""/>
          <p className="input-title">Vibe:</p> 
          <input id="vibe" type="text" name="Vibe" required=""/>
          <p className="input-title">Price:</p> 
          <input id="price" type="text" name="Price" required=""/>
          <button type="submit" id="host-hotbox" value="Send" onClick={() => this.submitBoxPost()}>
            Host Box 2
          </button>
        </div>
      </div>
    );
  }
  
}

export default App;
