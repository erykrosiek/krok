const Buttons = (props) => {
  return (
    <div className="buttons">
      <button onClick={() => props.updateCounter("Add")}>Dodaj</button>
      <button onClick={() => props.updateCounter("Reinit")}>Zresetuj</button>
      <button onClick={() => props.updateCounter("Set 0")}>Wyzeruj</button>
      <button onClick={() => props.updateCounter("Change")}>
        Zwiększ o: {props.step}
      </button>
    </div>
  );
};

export default Buttons;
