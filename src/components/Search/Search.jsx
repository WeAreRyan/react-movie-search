import "./Search.css"
import { useState, setState } from 'react'

export default function Search ({ search, handleInput }) {


    return (
        <>
        <section className="searchbox-wrap">
            <input type="text" className="searchbox" placeholder="Search for a movie" onChange={handleInput} onKeyPress={search} />
        </section>
        </>
    )
}