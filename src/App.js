import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greeting from './components/Greeting';
import MyComponent, { FirstComponent, SecondComponent as SC } from './components/MyComponent';
import HelloWorld from './components/HelloWorld';
import Student from './components/Student';
import Employee from './components/Employee';
import User from './components/User';
import EventHandling from './components/EventHandling';
import ConditionRendering from './components/ConditionRendering';

function App() {

  const student = {
    firstName : "Emrullah",
    lastName : "Duzgun",
    email : "emrullah@gmail.com"
  }

  return (
    <div className="App">
        {
          /*
        <Welcome name="Muhammed"></Welcome>
        <Greeting name="Muhammed"></Greeting>
        <FirstComponent></FirstComponent>
        <SC></SC>
        <MyComponent></MyComponent>
        <HelloWorld></HelloWorld>
        <Student firstName="Muhammed" lastName="Duzgun" email="muhammed@gmail.com"></Student>
        <Student firstName="Abdullah" lastName="Duzgun" email="abdullah@gmail.com"></Student>
        <Student student={student}></Student>
        <Employee></Employee>
        <User></User>
        <EventHandling></EventHandling>
          */
        }
      <ConditionRendering></ConditionRendering>
    </div>
  );
}

export default App;
