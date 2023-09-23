import { TextField, Button } from "@mui/material";
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const [Email, setEmail] = useState("");

  const [Password, setpassword] = useState("");

  const [Conformpassword, setconformpassword] = useState("");

  // validate
  const [IsNamevalid, setIsNamevalid] = useState(true);

  const [IsEmailValid, setEmailValid] = useState(true);

  const [IsPasswordValid, setIsPasswordValid] = useState(true);

  const [IsConformPasswordValid, setIsConformPasswordValid] = useState(true);

  // validate name in the  form
  const validateName = (e) => {
    const { value } = e.target;
    if (!!value.match(/^([a-zA-Z ]){2,30}$/)) {
      setName(value);
      setIsNamevalid(true);
    } else {
      setName(value);
      setIsNamevalid(false);
    }
  };
  // validate Email  in the form 
    const validateEmail =(e)=>{
      const { value } = e.target;
      if (!!value.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)){
        setEmail(value);
        setEmailValid(true);
      }else{
        setEmail(value);
        setEmailValid(false);
      }
    }; 
// validate passsword  in the from 
    const validatepassword =(e)=>{
      const { value } = e.target;
      if(value.length>=8){
        setpassword(value);
        setIsPasswordValid(true);
      }else{
        setpassword(value);
        setIsPasswordValid(false);
      }
    }
    const validateconformpassword=(e)=>{
      const { value } = e.target;
      if (value==Password){
        setconformpassword(value);
        setIsConformPasswordValid(true);
      }
      else{
        setconformpassword(value);
        setIsConformPasswordValid(false);
      }
    }

    const showresult =(e)=>{
      e.preventDefault()
      if(!name || !Email || !Password || !Conformpassword){
        alert("fill the from properlliy !!!")
      }else{
        if(IsNamevalid && IsEmailValid && IsPasswordValid && IsConformPasswordValid){
          alert(
          ` --user-details--
          name:${name}
          Email:${Email}
          passwordd:${Password}
          
        `)
        }else{
          alert("fill the form completly")
        }
         
        
      }
    }

  return (
    <div style={{ height: "85vh" }}
      className="d-flex justify-content-center align-items-center w-100 ">
      <div style={{ width: "600px"}} className="bg-light mt-5 p-4 rounded ">
        <h1
          className="mt-3"
          style={{ fontSize: "40px", color: "black", textAlign: "center" }}
        >
          Register-form
        </h1>
        <hr style={{ color: "red" }} />

        <form className="mt-5" onSubmit={showresult}>
          <div className="mb-3">
            <TextField
              className="w-100"
              id="filled-basic"
              label="Name"
              variant="filled"
              name="name"
              value={name || ""}
              onChange={(e) => validateName(e)}
            />
          </div>
          {
            !IsNamevalid && 
          (
            <div className="mb-3 text-danger fw-bolder">
              *Invalid user Input
            </div>
          )
          }
          <div className="mb-3">
            <TextField
              className="w-100"
              id="filled-basic"
              label="Email"
              variant="filled"
              name="email"
              value={Email || ""}
              onChange={(e) => validateEmail(e)}
            />
          </div>
              {
                !IsEmailValid &&
                <div className='mb-3 text-danger fw-bolder'>
                  *Invalid  user Input 
                </div>
              }
          
          <div className="mb-3">
            <TextField
              className="w-100"
              id="filled-basic"
              label="Password"
              variant="filled"
              name="password"
              value={Password || ""}
              onChange={(e) => validatepassword(e)}
            />
          </div>
            {
            !IsPasswordValid && 
          (
            <div className="mb-3 text-danger fw-bolder">
              *Invalid user Input
            </div>
          )
          }
          <div className="mb-3">
            <TextField
              className="w-100"
              id="filled-basic"
              label="Conformpassword"
              variant="filled"
              name="Conformpassword"
              value={Conformpassword || ""}
              onChange={(e) => validateconformpassword(e)}
            />
          </div>
            {
            !IsConformPasswordValid && 
          (
            <div className="mb-3 text-danger fw-bolder">
              *Invalid user Input
            </div>
          )
          }
          <Button
            type='submit' 
            style={{ color: "black", fontSize: "20px" }}
            className="w-100 p-3 rounded-5 bg-light mt-5 shadow"
            variant="contained"
          >
            sign Up
          </Button>
          <div className="d-flex justify-content-center align-items-center m-3">
            <h6 className="mt-2 me-3">Have an Account</h6>
            <a href="">Login Here</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
