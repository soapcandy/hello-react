import { useRef } from "react";

const RefSample = () => {
  const id = useRef(2);
  const setId = (n) => {
    id.current = n;
  };
  const printId = () => {
    console.log(id.current);
  };
  return <div>refsample</div>;
};
export default RefSample;
