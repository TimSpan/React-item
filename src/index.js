import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Layout } from 'antd';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppHeader from './components/Header/';
import Login from './components/Login/';
import List from './containers/List/';
import Detail from './containers/Detail/';


import 'antd/dist/antd.css';
import './style.css';


const { Header, Footer, Content } = Layout;

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout style={{ minWidth: 1300, height: '100%' }}>
                    <Header className='header'>
                        
                        <AppHeader />
                        <Login />
                    </Header>

                    <Content className='content'>
                        
                        <Switch>

                            <Route path='/detail/:id' component={Detail} />
                            {/* 动态路由/:id  ?的意思:可以传也可以不传*/}
                            <Route path='/:id?' component={List} />

                        </Switch>
                    </Content>

                    <Footer className='footer'>@copyright TimSpan 2019</Footer>
                </Layout>
            </BrowserRouter >
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));


