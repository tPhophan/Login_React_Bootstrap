import Login from './Login';
import Profile from './Profile';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App(){
    const stat = 1;
    if (stat === 1){
        return <Login />
    }
    return (
        <div className="wrapper">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Profile />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;