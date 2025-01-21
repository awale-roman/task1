const AdditionalInput = ({ additionalInput, setAdditionalInput }) => {
  return (
    <div>
      <p>Additional Input</p>
      <input
        id="additional-input-field"
        type="text"
        value={additionalInput}
        onChange={(e) => setAdditionalInput(e.target.value)}
      ></input>
    </div>
  );
};

export default AdditionalInput;
