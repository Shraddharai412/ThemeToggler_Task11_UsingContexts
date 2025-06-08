import react,{createContext,useState} from 'react';
 
//create context
export const ThemeContext=createContext();
export const ThemeProvider = ({children}) => {
    const [theme,setTheme] =useState('light');
    const toggleTheme =() => {
        setTheme(prev => (prev === 'light' ? 'Dark':'light'));


    }
    return(
        <ThemeContext.Provider value ={{theme,toggleTheme}}>
        {children}
        </ThemeContext.Provider>


    )
    
}
