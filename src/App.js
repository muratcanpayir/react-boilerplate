import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, reset } from "./redux/actions/counterAction";
import { useTranslation } from "react-i18next";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const { t: translate } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <div className="container mx-auto bg-gray-700 rounded-xl shadow border p-10">
          <div className="flex justify-center items-center">
            <img src={logo} className="App-logo text-sm flex" alt="logo" />
            <p className="text-3xl text-gray-200 font-bold mb-5 flex">
              {translate("title")}
            </p>
          </div>
        </div>
        <a
          className="App-link"
          href="https://github.com/muratcanpayir/react-boilerplate"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Info
        </a>
        {/* Redux Example: <br />
        Counter: {counter}
        <button onClick={() => dispatch(increase())}>+</button>
        <button onClick={() => dispatch(decrease())}>-</button>
        <button onClick={() => dispatch(reset())}>Reset</button> */}
      </header>
    </div>
  );
}

export default App;
