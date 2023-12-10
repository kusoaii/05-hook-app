import { render, screen } from "@testing-library/react"
import { MainApp } from "../../src/09-useContext/MainApp"
import { MemoryRouter } from "react-router-dom";

describe('pruebas en MainApp', () => {
    test('debe de mostrar el homePage ', () => {
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        //screen.debug();

        expect(screen.getByText('Home App')).toBeTruthy();
        
    });

    test('debe de mostrar el LoginPage ', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );

        //screen.debug();

        expect(screen.getByText('Login App')).toBeTruthy();
        
    });

})
