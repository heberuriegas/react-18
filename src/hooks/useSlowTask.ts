import { useEffect, useState } from "react";

type UseSlowTask = (limit: number) => [number, () => void];

/**
 * Create an infinite render and stop in limit ms
 *
 * @param {number} [limit=15000]
 * @return {*}
 */
const useSlowTask: UseSlowTask = (limit = 15000) => {
  const [counter, setCounter] = useState<number>(0);
  const [infiniteLoop, setInfiniteLoop] = useState<boolean>(false);

  const restartTimer = () => {
    setCounter(0);
    setInfiniteLoop(true);
    setTimeout(() => setInfiniteLoop(false), limit);
  };

  // Interview question :) !
  useEffect(() => {
    if (infiniteLoop) {
      const update = counter + 1;
      setCounter(update);
    }
  });
  return [counter, restartTimer];
};

export default useSlowTask;
