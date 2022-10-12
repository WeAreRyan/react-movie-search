import "./Search.css"
import { useState, setState } from 'react'
import axios from 'axios'
import Results from "../../components/Results/Results"

export default function Search ({ }) {
    const [ state, setState] = useState({
        s: "",
        result: [],
        selected: {}
    });
    const apiurl = ""

    const search = (e) => {
        if (e.key === "Enter") {
            axios(apiurl + "&s" + "state.s").then(({ data }) => {
                // console.log(data);
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
            return {...prevState, s: s}
        })
    }

    return (
        <>
        <section className="searchbox-wrap">
            <input type="text" className="searchbox" placeholder="Search for a movie" onChange={handleInput} onKeyPress={search} />
            <Results results={state.results} />
        </section>
        </>
    )
}