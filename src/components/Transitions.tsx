import {
  startTransition,
  useDeferredValue,
  useEffect,
  useRef,
  useState,
} from "react";

/**
 * Explain transition feature and deferred values in react 18.
 *
 * @return {*}
 */
const Transitions = () => {
  const [transitionCounter, setTransitionCounter] = useState<number>(0);
  const [counter, setCounter] = useState<number>(0);
  const deferredCounter = useDeferredValue(counter);
  const [updateCounter, setUpdateCounter] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const renders = useRef<number>(0);

  useEffect(() => {
    (async () => {
      await new Promise((response) => {
        if (updateCounter) {
          startTransition(() => {
            setTransitionCounter(counter + 1);
          });
          setCounter(counter + 1);
          setValue(renders.current.toString());
        }
        response(null);
      });
    })();
  });

  const onClick = () => {
    setUpdateCounter(true);
    setTimeout(() => {
      setUpdateCounter(false);
    }, 5000);
  };

  renders.current += 1;

  return (
    <>
      <h2>Transitions & Deferred values</h2>
      <p>
        React now can identify between urgents and non urgent updates. State
        updates inside a transition are non urgent updates.
      </p>
      <p>
        Let's create an infinite loop updating states with transitions and a
        controlled input with urgent state update.
      </p>
      <p>
        A deferred counter will wait until the urgent render finish to update.
      </p>
      <div>Non urgent counter: {transitionCounter}</div>
      <div>Urgent counter: {counter}</div>
      <div>Deferred counter: {deferredCounter}</div>
      <div>
        Start an infinite counter for 5 seconds and infinite typing at the same
        time
      </div>
      <button onClick={onClick}>Start</button> &nbsp;
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </>
  );
};

export default Transitions;
