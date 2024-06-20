import { useReducer } from "react";
import generatePassword from "./utils/generatePassword";
import "./App.css";
import StrengthBars from "./strengthBars/StrengthBars";

const initialState = {
  password: "",
  length: 9,
  passwordCriteria: {
    upperCase: true,
    lowerCase: true,
    special: true,
    number: true,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "get/password":
      return {
        ...state,
        password: generatePassword(state.length, state.passwordCriteria),
      };
    case "changeDetail/upperCase":
      return {
        ...state,
        passwordCriteria: {
          ...state.passwordCriteria,
          upperCase: action.payload,
        },
      };
    case "changeDetail/lowerCase":
      return {
        ...state,
        passwordCriteria: {
          ...state.passwordCriteria,
          lowerCase: action.payload,
        },
      };
    case "changeDetail/special":
      return {
        ...state,
        passwordCriteria: {
          ...state.passwordCriteria,
          special: action.payload,
        },
      };
    case "changeDetail/number":
      return {
        ...state,
        passwordCriteria: {
          ...state.passwordCriteria,
          number: action.payload,
        },
      };
    case "change/length":
      return {
        ...state,
        length: action.payload,
      };
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { password, length, passwordCriteria } = state;
  const strength =
    password.length > 15
      ? "strong"
      : password.length > 10
      ? "medium"
      : password.length > 5
      ? "weak"
      : password.length > 0
      ? "veryWeak"
      : null;
  function handleGetPassword() {
    dispatch({ type: "get/password" });
  }
  function handleClick() {
    if (!password) return;
    navigator.clipboard.writeText(password);
  }
  return (
    <main>
      <div className="container">
        <div className="header">
          <h2>Password Generator</h2>
        </div>
        <div className="passwordField">
          {password ? (
            <p>{password}</p>
          ) : (
            <p className="emptyField">password</p>
          )}
          <button className="copy-btn" onClick={() => handleClick()}>
            <svg width="" height="" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"
                fill="#A4FFAF"
              />
            </svg>
          </button>
        </div>
        <div className="passwordSettings">
          <div className="charLength">
            <label htmlFor="length">
              <p>Password Length</p> <p>{length}</p>
            </label>

            <input
              id="length"
              type="range"
              max={20}
              value={length}
              onChange={(e) => {
                dispatch({ type: "change/length", payload: e.target.value });
              }}
            />
          </div>
          <div className="charIncludeType">
            <div className="upperCase">
              <input
                type="checkbox"
                id="upperCase"
                checked={passwordCriteria.upperCase}
                onChange={(e) => {
                  dispatch({
                    type: "changeDetail/upperCase",
                    payload: e.target.checked,
                  });
                }}
              />
              <label htmlFor="upperCase">include uppercase letters</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="lowerCase"
                checked={passwordCriteria.lowerCase}
                onChange={(e) => {
                  dispatch({
                    type: "changeDetail/lowerCase",
                    payload: e.target.checked,
                  });
                }}
              />
              <label htmlFor="lowerCase">include lowercase letters</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="special"
                checked={passwordCriteria.special}
                onChange={(e) => {
                  dispatch({
                    type: "changeDetail/special",
                    payload: e.target.checked,
                  });
                }}
              />
              <label htmlFor="special">include special characters</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="number"
                checked={passwordCriteria.number}
                onChange={(e) => {
                  dispatch({
                    type: "changeDetail/number",
                    payload: e.target.checked,
                  });
                }}
              />
              <label htmlFor="number">include numbers</label>
            </div>
          </div>
          <div className="strengthField">
            <p>Strength</p>
            <StrengthBars strength={strength}></StrengthBars>
          </div>
        </div>
        <div className="button">
          <button onClick={handleGetPassword}>generate</button>
        </div>
      </div>
    </main>
  );
}

export default App;
