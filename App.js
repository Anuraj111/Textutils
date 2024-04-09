import './App.css';
import Navbar from './components/Navbar';
import Textform1 from './components/Textform1';
import Alert from './components/Alert';
import React, { useState } from 'react';
// import { BrowserRouter , Route,Routes} from 'react-router-dom';
import Anuraj from './components/Anuraj';
import About from './components/About';

function App(props) {
    const [mode, usetMode] = useState('light'); //Whether dak mode is enabled or
    const [alert, setAlert] = useState();
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type

        })
        setTimeout(() => {
            setAlert(null);
        }, 1000)
    }
    const toggleMode = () => {
        if (mode === 'light') {
            usetMode('dark');
            document.body.style.backgroundColor = '#042743';
            showAlert("Dark mode has been enabled", "success");
            document.title = "textutils-dark"
        } else {
            usetMode('light');
            document.body.style.backgroundColor = 'grey';
            showAlert("light mode has been enabled", "success");
            document.title = "textutils-light"

        }
    }
    return ( <
        >
        <
        Navbar title = "Textutils"
        mode = { mode }
        toggleMode = { toggleMode }
        />  <
        div className = "container my-3" >
        <
        Alert alert = { alert }
        /> { < Textform1 showAlert = { showAlert }
            heading = "Enter the  text to analyze" / > } <
        /div>

        {
            /* <Routes>
                     <Route path='/' element={<Textform1 showAlert={showAlert} heading="Enter the  text to analyze"/> }/>
                     <Route path='/about' element={<About/>}/>
                     </Routes>
                       */
        }


        <
        />   

    );
}

export default App;