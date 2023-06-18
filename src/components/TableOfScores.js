import React from "react";
// import ReactDOM from "react";
import allCountryScores from "../data/scores";

export default function TableOfScores() {
  const sortedArrByAlfabet = allCountryScores.sort(compare);

  function compare(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  return sortedArrByAlfabet.map((prop, index) => (
    <table key={index}>
      <div className="test">HIGH SCORES: {prop.name}</div>
      <tbody>
        {prop.scores
          .sort((a, b) => a.s < b.s)
          .map(({ n, s }, index) => {
            return (
              <tr key={index}>
                <td className="score-name">{n}</td>
                <td className="score-score">{s}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  ));
}
