import { useForm } from "../hooks/useForm"

export const TodoAdd = ({ onNewTodo }) => {
    const {description, onInputChange, onResetForm} = useForm({
        description: '',

    });

    const onFormSunmit = (event) => {
        event.preventDefault();

        if(description.length <= 1) return

        const newTodo = {
            done: false,
            id: new Date().getTime(),
            description
        }

        onNewTodo(newTodo);
        onResetForm();
    }

    return (
        <form onSubmit={onFormSunmit}>
            <input type="text" placeholder="¿Que hay que hacer?" className="form-control" value={description} onChange={onInputChange} name="description"/>

            <button type="submit" className="btn btn-outline-primary mt-1">Agregar</button>
        </form>
    )
}