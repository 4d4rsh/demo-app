import React, { Component } from 'react';
import { setParagraph } from './action';
import { Provider } from 'react-redux';
import store from './store'
import TypeRacer from './component/typeRacer';
import './App.css';

class App extends Component {
  componentDidMount() {
    try { 
      fetch('http://www.randomtext.me/api/')
      .then(response => response.json())
      .then(data => {
        let masterText = data.text_out;
        //Replacing all the <p>,</p> and /n
        masterText = masterText.replace(new RegExp(`</p>|<p>|\n`, 'g'), "");
        store.dispatch(setParagraph(masterText));
      })
    } catch(error) {
        console.error("Unable to fetch data");
    }
  }

  render() {
    return (
      <Provider store={store}>
        <TypeRacer />
      </Provider>
    );
  }
}

export default App;
