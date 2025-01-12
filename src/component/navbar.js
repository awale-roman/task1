import { ideThemes, languages } from "helpers/staticData";
import { FaPlay, FaStop } from "react-icons/fa";

const Navbar = ({
  onHandleRun,
  onHandleStop,
  isConnected,
  language,
  setLanguage,
  isSocketRunning,
}) => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__elements">
          <div className="navbar__logo">
            <img src={"runnerlogo.png"} alt="logo"></img>
            <span>Code Runner</span>
          </div>
          <div className="navbar__items">
            {!!languages?.length && (
              <div>
                <select
                  name="languages"
                  id="languages"
                  onChange={(e) => {
                    setLanguage(e.target.value);
                  }}
                >
                  {languages.map((languageOption) => (
                    <option
                      key={languageOption}
                      value={languageOption}
                      selected={languageOption === language}
                    >
                      {languageOption}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {!!ideThemes?.length && (
              <div>
                <select name="theme" id="theme">
                  {ideThemes.map((ideTheme) => (
                    <option key={ideTheme} value={ideTheme}>
                      {ideTheme}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <button className="primary-btn" onClick={onHandleRun}>
              <FaPlay />
              Run
            </button>
            <button
              className="secondary-btn"
              onClick={onHandleStop}
              disabled={!isSocketRunning}
            >
              <FaStop />
              Stop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
