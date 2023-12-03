import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {
const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
    <h1>Counter with hook {counter}</h1>
    <button onClick={ () => {increment(2)}}>+1</button>
    <button onClick={reset}>reset</button>
    <button onClick={() => {decrement(2)}}>-1</button>
    </>
  )
}
