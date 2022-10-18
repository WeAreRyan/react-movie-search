import "./App.css";
import { useState } from "react";
import axios from 'axios'
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import Search from "../../components/Search/Search"
import Results from "../../components/Results/Results"
import Popup from "../../components/Popup/Popup"

export default function App() {
  const [user, setUser] = useState(getUser());

  const [ state, setState] = useState({
    s: "",
    results: [],
    selected: {}
});
const apiurl = "http://www.omdbapi.com/?apikey=";

const search = (e) => {
    if (e.key === "Enter") {
        axios(apiurl + "&s=" + state.s).then(({data}) => {
        // axios("http://www.omdbapi.com/?apikey=" + process.env.REACT_APP_MOVIES_API_KEY + "&s=" + state.s).then(({data}) => {
            let results = data.Search

            setState(prevState => {
                return { ...prevState, results: results}
            })
        });
    }
}


const handleInput = (e) => {
    let s = e.target.value;
    
    setState(prevState => {
        return { ...prevState, s: s}
    })
}

const openPopup = id => {
  axios(apiurl + "&i=" + id).then(({ data}) => {
    let result = data;
    console.log("POPUP!!!")
    setState(prevState => {
      return { ...prevState, selected: result }
    })
  })
}

const closePopup = () => {
  setState(prevState => {
    return { ...prevState, selected: {} }
  })
}

  return (
    <main className="App">
      <header>
        <h1>Movie Database</h1>
      </header>

          <Search handleInput={handleInput} search={search} />

          <Results results={state.results} openPopup={openPopup} />

          {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}





      {/* {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes></Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )} */}
    </main>
  );
}
