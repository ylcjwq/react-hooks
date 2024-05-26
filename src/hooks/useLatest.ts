// useLatest 永远返回最新的值，可以避免闭包问题。
import { useRef } from "react";

const useLatest = <T>(value: T): { readonly current: T } => {
  const ref = useRef(value);
  ref.current = value;
  return ref;
};

export default useLatest;

// () => {
//     const [count, setCount] = useState(0);
//     const ref = useLatest(count);

//     useEffect(() => {
//       const interval = setInterval(() => {
//         setCount(ref.current + 1);
//       }, 1000);
//       return () => clearInterval(interval);
//     }, []);

//     return (
//       <>
//         <div>自定义Hooks：useLatestt</div>
//         <div>count: {count}</div>
//       </>
//     );
//   };
