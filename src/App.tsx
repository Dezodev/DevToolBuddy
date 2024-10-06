import { PrimeReactProvider } from 'primereact/api'
import './App.css'
import AppNavbar from './components/App/Navbar'

const App = (): JSX.Element => {
    // Options of the primereact
    const primeReactOptions = {
        locale: 'fr',
    }

    return (
        <PrimeReactProvider value={primeReactOptions}>
            <div className="App">
                <AppNavbar />
            </div>
        </PrimeReactProvider>
    )
}

export default App
