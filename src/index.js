import React from 'react';
import ReactDom from 'react-dom';

// create a new component, this component procedues some html
const App = () => {
    return <div>Hi!</div>
}

// Take this component's generated HTML and put it on the page (DOM)
ReactDom.render(<App />, document.querySelector('.container'));
