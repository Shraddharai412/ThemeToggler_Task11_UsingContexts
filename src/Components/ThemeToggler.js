import React,{useContext} from "react";
import { ThemeContext } from "./ThemeContext";
const ThemeToggler =() =>{
    const{theme,toggleTheme}=useContext(ThemeContext);
    const styles = {
        backgroundColor : theme === 'light'?'white':'black',
        color: theme === 'light'?'#000':'#fff',
        padding:'20px',
        textAlign :'center'
    };
    return(
        <>
            <style>
                {`
                    button {
                        padding: 10px 20px;
                        font-size: 16px;
                        border: none;
                        border-radius: 5px;
                        background-color: ${theme === 'light' ? '#007bff' : '#444'};
                        color: #fff;
                        cursor: pointer;
                        transition: background 0.3s;
                        margin-top: 10px;
                    }
                    button:hover {
                        background-color: ${theme === 'light' ? '#0056b3' : '#222'};
                    }
                `}
            </style>
        <div style={styles}> 
            <p>Current Theme:<strong>{theme}</strong></p>
            <button onClick={toggleTheme}>Toggle</button>
        </div>
        </>
    )
}
export default ThemeToggler;