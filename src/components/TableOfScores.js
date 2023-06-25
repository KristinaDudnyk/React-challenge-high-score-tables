import React from "react";
// import ReactDOM from "react";
import allCountryScores from "../data/scores";
import Button from "./SortButton";
import { useState } from "react";

export default function TableOfScores() {
  const sortedArrByAlfabet = allCountryScores.sort(sortByName);

  function convertFirstLetterToUpperCase(word) {
    return word[0].toUpperCase() + word.substring(1);
  }

  function sortByName(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  const [isDescending, setIsDescending] = useState(false);

  function sortFunction() {
    setIsDescending((prevIsDescending) => !prevIsDescending);
  }

  function compareScores(a, b) {
    if (isDescending) {
      return b.s - a.s;
    }
    return a.s - b.s;
  }

  return (
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
              {element.scores.sort(compareScores).map(({ n, s }, index) => {
                return (
                  <tr key={index}>
                    <td className="score-name">
                      {convertFirstLetterToUpperCase(n)}
                    </td>
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
