import "./Results.css";
import Result from "../../components/Result/Result";

export default function Results({ results, openPopup }) {
  return (
    <>
    <section className="results">

      {results.map(result => (
                <Result result={result} key={result.imdbID} openPopup={openPopup} />
    ))}
    </section>
    </>
  );
}
