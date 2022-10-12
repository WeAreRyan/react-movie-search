import "./Results.css"
import Result from "../../components/Result/Result"

export default function Results ({ results }) {
    return (
        <>
        <section className="results">
            {results.map(result => (
                <Result key={result.imdbID} result={result} />
    ))}
        </section>
        </>
    )
}