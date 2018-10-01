import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.scss';
import Button from './components/Button/Button';
import Header from './components/Header/Header';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header></Header>
                <Button></Button>
            </div>
        );
    }
}

export default App;
