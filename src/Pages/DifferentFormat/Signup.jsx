import React, { useState, useEffect } from 'react'
import  { Visibility, VisibilityOff } from '@mui/icons-material'
import Logo from '../../IMAGES/logo.png';
import Background from '../../IMAGES/background.png';
import {Link} from 'react-router-dom'
import { Alert, Button } from '@mui/material'
function Signup() {
  const [password, setPassword] = useState(false);
  const [confirm, setConfirm] = useState(false)
  const [err, setErr] = useState(null)
  const [values, setValues] = useState({
      Email: "",
      Password: "",
      Firstname: "",
      Lastname: "",
      Phone: "",
      Confirm: ""

  });
  const [width, setWidth] = useState(false);
  useEffect(()=>{
      window.addEventListener('resize', ()=>{
      window.innerWidth >= 867 ? setWidth(false) : setWidth(true);
      })
  })
  useEffect(()=>{
      document.title = 'Register to FoodPlanet';
      window.innerWidth >= 867 ? setWidth(false) : setWidth(true);
  },[])
  const validate = async(data) =>{
      const {Email, Firstname, Lastname, Password,Phone, Confirm} = data;
      if(Email === "" || Firstname === "" || Lastname === ""){
          return "Enter your fristname, lastname, email";
      }
      if(!Email.includes('@gmail.com') || Email.startsWith('@')){
          return "Enter valid email address";
      }
      if(Password === "" || Phone === "") return "Enter your password, phone";
      if(Password !== Confirm) return "Confirm your password"
      return null;
  }
  const getValues = (e) =>{
      setValues({...values, [e.target.name]: e.target.value})
  }
  const post = async(e) =>{
      e.preventDefault();
      validate(values)
      .then((data) => setErr(data))
      .catch(err => console.log(err))
  };
  const watchP = (index) =>{
      index === 1 ? setPassword(!password) : setConfirm(!confirm);
  }
  const [translate, setTranslate] = useState(false)
  const next = async() =>{
      validate(values)
      .then((data)=> data === null || data === "Enter your password, phone" ? setTranslate(true) : setErr(data))
  }
  const inputs = ["Firstname", "Lastname", "Email", "Phone", "Password", "Confirm"]
  return (
    <div className="w-full h-[100%] flex justify-center flex-row">
      <div
        className={`bg-[#cd8f40] w-1/2 h-[100vh] ${
          width ? "hidden" : "flex"
        } flex-col items-center justify-center`}
      >
        <img className="h-[34rem]" alt="background" src={Background} />
        <h1 className="font-bold text-4xl w-[15rem] text-center text-white py-10">
          Get your food prepared
        </h1>
      </div>
      <form
        onSubmit={post}
        className=" w-1/2 gap-10 flex flex-col items-center justify-center"
      >
        <img alt="logo" className="min-h-[5%] min-w-[5rem]" src={Logo} />
        <h1 className="text-3xl font-bold text-center">
          Create your own account
        </h1>
        {err && <Alert severity="error">{err}</Alert>}
        <div className="flex gap-2 min-w-full overflow-hidden">
          {inputs.slice(0, 2).map((div, index) => (
            <div
              key={index}
              className={`flex ${
                translate && `translate-x-[-${width ? 24 : 45}rem]`
              } duration-500 flex-col ${
                !width ? "ml-32 min-w-[70%]" : "min-w-full"
              } gap-5`}
            >
              {index === 0
                ? inputs
                    .slice(0, 3)
                    .map((input, index) => (
                      <input
                        key={index}
                        className="w-full py-2 rounded-[5px] pl-3 border-2 border-solid outline-none"
                        onChange={getValues}
                        type="text"
                        name={input}
                        placeholder={input}
                      />
                    ))
                : inputs.slice(3).map((input, index) => (
                    <div className="relative " key={index}>
                      <input
                        type={
                          input === "Password" || input === "Confirm"
                            ? `${
                                index === 1
                                  ? !password
                                    ? "password"
                                    : "text"
                                  : !confirm
                                  ? "password"
                                  : "text"
                              }`
                            : "text"
                        }
                        key={index}
                        className="w-full py-2 rounded-[5px] pl-3 border-2 border-solid outline-none"
                        onChange={getValues}
                        name={input}
                        placeholder={
                          input === "Confirm" ? "Confirm you password" : input
                        }
                      />
                      {(input === "Confirm" || input === "Password") && (
                        <div
                          className="absolute right-3 cursor-pointer top-[20%]"
                          onClick={() => watchP(index)}
                        >
                          {index === 1 ? (
                            password ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )
                          ) : confirm ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </div>
                      )}
                    </div>
                  ))}
              <div className="flex justify-end">
                <Button
                  onClick={() => index === 0 && next()}
                  type={index === 0 ? "button" : "submit"}
                  variant="contained"
                  style={{ background: "#E08B1F" }}
                >
                  {index === 0 ? "Next" : "Signup"}
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex text-xl gap-1 min-w-full justify-center">
          <span>Already have an account?</span>
          <Link to="/login" className="hover:underline text-[blue]">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signup