import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import Search from "../../components/Search/Search"

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <header>
        <h1>Movie Database</h1>
      </header>

          <Search />





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
