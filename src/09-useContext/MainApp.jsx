import { Route, Routes, Navigate } from 'react-router-dom';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { LoginPage } from './LoginPage';
import { NavBar }  from './NavBar';
import { UserProvider } from './context/UserProvider';

export const MainApp = () => {
  return (
    /* Cualquier hijo del UserProvider (y sub hijos o subcomponentes también) van a poder ver el UserProvider y poder
     utilizar la información que se esta configurando */ 
    <UserProvider>
        <NavBar />
        <hr />
 
        <Routes>
            <Route path="/" element={ <HomePage /> } /> {/* Enrutamiento hecho al path / y al componente HomePage */}
            <Route path="/login" element={ <LoginPage /> } /> {/* Enrutamiento hecho al path /login y al componente LoginPage */}
            <Route path="/about" element={ <AboutPage /> } /> {/* Enrutamiento hecho al path /about y al componente AboutPage */}    
            <Route path="/*" element={ <Navigate to="/about" /> } /> {/* Enrutamiento hecho de cualquier path al path /about */}  
        </Routes>
    </UserProvider>
  )
}
