import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  //concated string
  const [qwertyString, setQwertyString] = useState("");

  // input from user in keys they press
  const [inputKey, setInputKey] = useState("|");

  // const [inputKeyPointer, setInputKeyPointer] = useState(0);

  const [count, setCount] = useState(0);

  const [timerCounter, setTimerCounter] = useState(0);

  const [counterVar, setCounterVar] = useState(0);

  // Keys for input

  const keyPad = {
    a: [1, ".", ",", "!"],
    b: [2, "a", "b", "c"],
    c: [3, "d", "e", "f"],
    d: [4, "g", "h", "i"],
    e: [5, "j", "k", "l"],
    f: [6, "m", "n", "o"],
    g: [7, "p", "q", "r", "s"],
    h: [8, "t", "u", "v"],
    i: [9, "w", "x", "y", "z"]
  };

  // for checking debounce and concatenating to string
  useEffect(() => {
    if (timerCounter > 1) {
      clearInterval(counterVar);
      setTimerCounter(0);

      setQwertyString(
        (qwertyString) => qwertyString + inputKey[inputKey.length - 1]
      );
      setInputKey("|");
    }
  });

  return (
    <div className="textBox">
      <h1>
        Key-Pad App{" "}
        <span role="img" aria-labelledby="phone">
          📱
        </span>
      </h1>
      <h2> Key-entered : </h2>
      <div className="textBox">
        <span className="cursor">
          <span type="text" className="rq-form-element">
            {qwertyString + inputKey[inputKey.length - 1]} <i> </i>
          </span>
        </span>
      </div>
      <br />
      <br />
      <button
        onClick={() => {
          count > 2 ? setCount(0) : setCount((count) => count + 1);

          setInputKey((inputKey) => inputKey + keyPad.a[count]);

          clearInterval(counterVar);

          setCounterVar(
            setInterval(() => {
              setTimerCounter((timerCounter) => timerCounter + 1);
              setCount(0);
            }, 300)
          );
        }}
      >
        1 .,!
      </button>
      <span> </span>
      <button
        onClick={() => {
          count > 2 ? setCount(0) : setCount((count) => count + 1);

          setInputKey((inputKey) => inputKey + keyPad.b[count]);

          clearInterval(counterVar);

          setCounterVar(
            setInterval(() => {
              setTimerCounter((timerCounter) => timerCounter + 1);
              setCount(0);
            }, 300)
          );
        }}
      >
        {" "}
        2 abc{" "}
      </button>
      <span> </span>
      <button
        onClick={() => {
          count > 2 ? setCount(0) : setCount((count) => count + 1);

          setInputKey((inputKey) => inputKey + keyPad.c[count]);

          clearInterval(counterVar);

          setCounterVar(
            setInterval(() => {
              setTimerCounter((timerCounter) => timerCounter + 1);
              setCount(0);
            }, 300)
          );
        }}
      >
        {" "}
        3 def{" "}
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          count > 2 ? setCount(0) : setCount((count) => count + 1);

          setInputKey((inputKey) => inputKey + keyPad.d[count]);

          clearInterval(counterVar);

          setCounterVar(
            setInterval(() => {
              setTimerCounter((timerCounter) => timerCounter + 1);
              setCount(0);
            }, 300)
          );
        }}
      >
        4 ghi
      </button>
      <span> </span>
      <button
        onClick={() => {
          count > 2 ? setCount(0) : setCount((count) => count + 1);

          setInputKey((inputKey) => inputKey + keyPad.e[count]);

          clearInterval(counterVar);

          setCounterVar(
            setInterval(() => {
              setTimerCounter((timerCounter) => timerCounter + 1);
              setCount(0);
            }, 300)
          );
        }}
      >
        {" "}
        5 jkl{" "}
      </button>{" "}
      <span> </span>
      <button
        onClick={() => {
          count > 2 ? setCount(0) : setCount((count) => count + 1);

          setInputKey((inputKey) => inputKey + keyPad.f[count]);

          clearInterval(counterVar);

          setCounterVar(
            setInterval(() => {
              setTimerCounter((timerCounter) => timerCounter + 1);
              setCount(0);
            }, 300)
          );
        }}
      >
        {" "}
        6 mno{" "}
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          count > 3 ? setCount(0) : setCount((count) => count + 1);

          setInputKey((inputKey) => inputKey + keyPad.g[count]);

          clearInterval(counterVar);

          setCounterVar(
            setInterval(() => {
              setTimerCounter((timerCounter) => timerCounter + 1);
              setCount(0);
            }, 300)
          );
        }}
      >
        7 pqrs
      </button>
      <span> </span>
      <button
        onClick={() => {
          count > 2 ? setCount(0) : setCount((count) => count + 1);

          setInputKey((inputKey) => inputKey + keyPad.h[count]);

          clearInterval(counterVar);

          setCounterVar(
            setInterval(() => {
              setTimerCounter((timerCounter) => timerCounter + 1);
              setCount(0);
            }, 300)
          );
        }}
      >
        {" "}
        8 tuv{" "}
      </button>{" "}
      <span> </span>
      <button
        onClick={() => {
          count > 3 ? setCount(0) : setCount((count) => count + 1);

          setInputKey((inputKey) => inputKey + keyPad.i[count]);

          clearInterval(counterVar);

          setCounterVar(
            setInterval(() => {
              setTimerCounter((timerCounter) => timerCounter + 1);
              setCount(0);
            }, 300)
          );
        }}
      >
        {" "}
        9 wxyz{" "}
      </button>
    </div>
  );
}
