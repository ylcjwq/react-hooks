// useUpdate 强制组件重新渲染
import { useReducer } from "react";

function useUpdate(): () => void {
  const [, update] = useReducer((num: number): number => num + 1, 0);

  return update;
}

export default useUpdate;
