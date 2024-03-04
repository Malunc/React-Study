/**
 * @Author: Hgh
 * @Date: 2024-03-01 15:50:16
 * @LastEditTime: 2024-03-04 15:11:24
 * @LastEditors: Hgh
 * @Description:
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/pages/Layout';
import Login from '@/pages/Login';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path='/' element={<Layout />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
