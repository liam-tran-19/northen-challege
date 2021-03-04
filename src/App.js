import React from "react";
import "./App.css";
import Header from "./header/Header";
import "./App.scss";
import Title from "./title/Title";
import FormSignUp from "./form/FormSignUp";
function App() {
  const [signUp, setSignUp] = React.useState(false);
  const [email, setEmail] = React.useState([]);

  const handleSubmit = (value) => {
    const newValue = {
      id: email.length + 1,
      ...value,
    };
    const newEmail = [...email];
    newEmail.push(newValue);
    setEmail(newEmail);
    setSignUp(true)
  };

  return (
    <div className="App">
      <Header />
      <Title signUp={signUp} />
      <FormSignUp onSubmit={handleSubmit} signUp={signUp}/>
    </div>
  );
}

export default App;
