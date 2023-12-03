import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {
  const {counter, increment} = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://fakestoreapi.com/products/${ counter }`);
  console.log({ data, isLoading, hasError });
  const { category, title } = !!data && data;
  return (
    <>
      <h1>Breaking quotes</h1>
      <hr />

      {
        isLoading
          ? ( <LoadingQuote/> )
          : ( <Quote category={category} title={title}/> )
      }

      <button className="btn btn-primary" onClick={ () => {increment(1)} } disabled={isLoading}>Next</button>
    </>
  )
}