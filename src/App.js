import "./App.css";
import TableOfScores from "./components/TableOfScores";

export default function App() {
  return (
    <div className="main-container">
      <h1 className="main-h">High Scores per Country</h1>
      <TableOfScores />
    </div>
  );
}
