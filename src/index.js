import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDQnhNxLfo78AGt-li55LUugipJyJ79TWQ';

// create a new component, this component procedues some html
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Take this component's generated HTML and put it on the page (DOM)
ReactDom.render(<App />, document.querySelector('.container'));
