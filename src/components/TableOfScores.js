import React from "react";
// import ReactDOM from "react";
import allCountryScores from "../data/scores";
import Button from "./SortButton";
import { useState } from "react";

export default function TableOfScores() {
  const sortedArrByAlfabet = allCountryScores.sort(sortByName);

  function sortByName(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  // const [scores, setScores] = useState(allCountryScores.sort(sortByName));
  const [scores, setScores] = useState(() => (a, b) => a.s < b.s);
  debugger;
  function sortFunction() {
    debugger;
    setScores(scores(() => (a, b) => a.s > b.s));
  }

  returfirstn(
    <div>
      <Button sortFunction={sortFunction} />
      {sortedArrByAlfabet.map((element, index) => {
        return (
          <table key={index}>
            <thead className="test">
              <tr>
                <th>HIGH SCORES: {element.name}</th>
              </tr>
            </thead>
            <tbody>
              {element.scores.sort(scores).map(({ n, s }, index) => {
                return (
                  <tr key={index}>
                    <td className="score-name">{n}</td>
                    <td className="score-score">{s}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        );
      })}
    </div>
  );
}
