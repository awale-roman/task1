const OutputPanel = ({ output, setOutput }) => {
  return (
    <div>
      <p>
        Output <button onClick={() => setOutput([])}>Clear</button>
      </p>
      <p>{!!output && output.join("")}</p>
    </div>
  );
};

export default OutputPanel;
