import { useContext } from "react"
import { UserContext } from "./context/UserContext";
import { json } from "react-router-dom";

export const LoginPage = () => {
    const { user, setUser } = useContext( UserContext );

  return (
    <>
    <h1>Login App</h1>
    <hr />
    <pre aria-label="pre">
        { JSON.stringify(user, null, 3) }
    </pre>

    <button className="btn btn-primary" onClick={() => setUser({ id: 123, name: 'Juan David', email: 'juan@gmail.com' })}>Establecer usuario</button>
    </>
  )
}