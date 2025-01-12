import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

const InputPanel = ({ code, setCode }) => {
  const handleChange = (value) => {
    if (!!value) setCode(value);
  };

  return (
    <div>
      <p>Status</p>

      <CodeMirror
        value={code}
        height="200px"
        extensions={[javascript({ jsx: true })]}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputPanel;
