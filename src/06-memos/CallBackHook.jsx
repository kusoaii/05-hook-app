import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallBackHook = () => {
    const [counter, SetCounter] = useState(10);
    const incrementFather = useCallback( (value) => {SetCounter( (c) => c + value)}, [] );

  return (
    <>
    <h1>useCallBack: {counter}</h1>
    <hr />
    <ShowIncrement increment={incrementFather}/>
    </>
  )
}
