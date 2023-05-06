import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './sass/style.scss';
import photo from './img/papasha.jpg';

class App extends React.Component {
    render() {
        return (
            <Fragment>
                <h1>Hello React</h1>
                <img src={photo} alt="" />
                <a href="https://google.com">Google</a>
            </Fragment>
        )
    }
}


ReactDOM.render(<App />, document.querySelector('#root'));

