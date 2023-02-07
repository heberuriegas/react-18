import { useRef, useState } from "react";

/**
 * Explain AutomaticBatching feature in react 18.
 *
 * @return {*}
 */
const AutomaticBatching = () => {
  const [counter1, setCounter1] = useState<number>(0);
  const [counter2, setCounter2] = useState<number>(0);
  const [counter3, setCounter3] = useState<number>(0);
  const [counter4, setCounter4] = useState<number>(0);

  const renders = useRef<number>(0);

  const onClick = async () => {
    await new Promise((response) => {
      setCounter1((s) => s + 1);
      setCounter2((s) => s + 1);
      setCounter3((s) => s + 1);
      setCounter4((s) => s + 1);
      response(null);
    });
  };

  renders.current += 1;

  return (
    <>
      <h2>Automatic Batching</h2>
      <p>So react groups mutiple state updates into a single render.</p>
      <p>
        This button will start a promise that will update 4 states the component
        will render only 1 time even if there are more than 1 state update.
      </p>
      <div>Counter 1: {counter1}</div>
      <div>Counter 2: {counter2}</div>
      <div>Counter 3: {counter3}</div>
      <div>Counter 4: {counter4}</div>
      <div>Renders: {renders.current}</div>
      <button onClick={onClick}>Increase state counters</button> &nbsp;
    </>
  );
};

export default AutomaticBatching;
