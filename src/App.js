/**
 * @Author: Hgh
 * @Date: 2024-03-01 15:50:16
 * @LastEditTime: 2024-03-26 15:01:16
 * @LastEditors: Hgh
 * @Description:
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/pages/Layout';
import Login from '@/pages/Login';
import { AuthComponent } from '@/components/AuthComponent';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path='/' element={
                        <AuthComponent>
                            <Layout />
                        </AuthComponent>
                    }></Route>
                    <Route path='/login' element={<Login />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
