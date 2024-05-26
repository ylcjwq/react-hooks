// useMount 组件挂载时执行
import { useEffect } from "react";

const useMount = (fn: () => void) => {
  useEffect(() => {
    fn?.();
  }, []);
};

export default useMount;
