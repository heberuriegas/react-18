import useSlowTask from "../hooks/useSlowTask";

/**
 * Explain concurrency feature in react 18.
 *
 * @return {*}
 */
const Concurrency = () => {
  const [counter, restartTimer] = useSlowTask(15000);

  return (
    <>
      <h2>Concurrency</h2>
      <p>
        So in React 18 a render could be paused or even drop. Let's try an
        example.
      </p>
      <p>
        This button will start a task and will wait 15 seconds, the screen
        should update and you should be able to edit the input fluidly.
      </p>
      <div>Renders: {counter}</div>
      <button onClick={restartTimer}>Start slow task</button> &nbsp;
      {counter > 0 && <input placeholder="Edit me" />}
    </>
  );
};

export default Concurrency;
