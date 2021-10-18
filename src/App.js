import {useState} from 'react';
import {
  AppBar,
  Avatar,
  Toolbar
} from '@material-ui/core';
import Post from './containers';
import "./App.css";
import Theme from './context';
import {FiSun} from 'react-icons/fi';
import {WiMoonFull} from 'react-icons/wi';

function App() {
  const [theme, setTheme] = useState("light");
  const buttonStyles = {
    height: "30px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    paddingTop: "4px"
  }
  return (
    <Theme.Provider value={theme} >
      <AppBar>
        <Toolbar>
          <div className="header">
          <h3>
            Twitter Post
          </h3>
          <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} style={buttonStyles} >
            {theme === "light" ? <FiSun /> : <WiMoonFull />}
          </button>
          </div>
        </Toolbar>
      </AppBar>
      <Post />
    </Theme.Provider>
  )
}

export default App;