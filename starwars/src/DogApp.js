import React, { Component } from 'react';
import './DogApp.css';



class DogApp extends Component {
    constructor() {
        super();
        this.state = {
            dogs: []
        };
    }
};



componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
}

getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            this.setState({ dogs: data.results });
        })

        .catch(err => {
            throw new Error(err);
        });
};

render() {
    return (
        <div className="DogApp">

        </div>
    );
}
}

export default DogApp;
