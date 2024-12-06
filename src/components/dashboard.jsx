import React from 'react';
import Navbar from './navbar';
import './style/dashboard.css';

const Dashboard = () => {

    return(

        <div>
            <Navbar />
            <div className="dashboard-content">

                <h1 className="dashboard-title">Olá, este é um teste de tela!</h1>
                <p className="dashboard-p1">Esta é uma janela simples criada com Electron e React.</p>

                <div className="img-test">
                    <img src="src\assets\abrobra.png" alt="" />
                </div>
           
            </div>
        </div>

    );

}

export default Dashboard;