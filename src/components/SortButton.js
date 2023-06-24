export default function Button(props) {
  console.log("2 Button is RENDERING");

  return (
    <div className="button-container">
      <button onClick={props.sortFunction} className="sort-button">
        Sort by scores
      </button>
    </div>
  );
}
