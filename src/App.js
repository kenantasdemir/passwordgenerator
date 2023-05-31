import logo from './logo.svg';
import './App.css';
import { } from "bootstrap";
import PasswordGenerator from './PasswordGenerator';

function App() {
  return (
    // <div className="container">
    //   <p className="text-center">
    //     merhaba dünya


    //   </p>

    //   <div className="d-flex justify-content-center align-items-center">
    //     <form className="form-group" >


    //       <input type="text" className="form-control" />

    //       <div className="form-check form-switch">
    //         <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
    //           <label className="form-check-label" for="flexSwitchCheckDefault">Sayılar</label>
    //       </div>
    //       <div className="form-check form-switch">
    //         <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
    //           <label className="form-check-label" for="flexSwitchCheckChecked">Büyük harfler</label>
    //       </div>
    //       <div className="form-check form-switch">
    //         <input className="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled/>
    //           <label className="form-check-label" for="flexSwitchCheckDisabled">Küçük harfler</label>
    //       </div>
    //       <div className="form-check form-switch">
    //         <input className="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" checked disabled/>
    //           <label className="form-check-label" for="flexSwitchCheckCheckedDisabled">Semboller</label>
    //       </div>
    //     </form>
    //   </div>

    // </div>


    <PasswordGenerator/>
  );
}

export default App;
