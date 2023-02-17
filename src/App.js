import {useState} from "react";
import {useNavigate} from "react-router-dom"
import FormInput from "./components/formInput"
import './App.css';

function App() {
  const navigate = useNavigate();
  const [values, setValues] = useState(
    {
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    confrimpassword:"",
  }
  );

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(values);
    navigate('/profile',{state:{values}})
  };

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  }
  return (
    <div  className="app">
    <form onSubmit={handleSubmit}>
    <h1>Registration Form</h1>
    <FormInput name="firstname" type="text" placeholder="First Name" errorMessage="First Name should contains only Characters" label="First Name" pattern="^[A-Za-z ]{1,25}$" required onChange={onChange}/>
    <FormInput name="lastname" type="text" placeholder="Last Name" errorMessage="Last Name should contains only Characters" label="Last Name" pattern="^[A-Za-z ]{1,25}$" required onChange={onChange}/>
    <FormInput name="email" type="email" placeholder="Email" errorMessage="Enter valid email only i.e. abc@gmail.com" label="Email" required onChange={onChange}/>
    <FormInput name="password" type="password" placeholder="Password" errorMessage="Password should contains alpha-numeric values,special characters and minimum 8 characters." label="Password" pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$" required  onChange={onChange}/>
    <FormInput name="confrimpassword" type="password" placeholder="Confrim Password" errorMessage="Password don't match" label="Confrim Password" pattern={values.password} required onChange={onChange}/>
    <div className="submit">
      <button >Submit</button>
      </div>
      </form>
      <div className="img">
        <h2 className="img_heading" data-heading="WELCOME TO DALHOUSIE">Welcome To Dalhousie</h2>
        <img src="/img.jpg" alt="Gradient Image" height="100%" width="100%" className="img_img"/>
      </div>
    </div>
  );
}

export default App;
