import { render, screen } from "@testing-library/react"
import { HomePage } from "../../src/09-useContext/HomePage"
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('pruebas en HomePage', () => {
    const user = {
        id: 1,
        name: 'juan'
    }

    test('debe de mostar el componente sin el usuario ', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe('null');
    });

    test('debe de mostrar el componente con el usuario ', () => {
        render(
            <UserContext.Provider value={{ user: user }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toContain(user.name);
    })
    

})
