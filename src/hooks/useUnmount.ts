// useUnmount 组件销毁时执行
import { useEffect } from "react";
import useLatest from "./useLatest";

const useUnmount = (fn: () => void) => {
  const fnRef = useLatest(fn);

  useEffect(
    () => () => {
      fnRef.current();
    },
    []
  );
};

export default useUnmount;
