import React, { Component } from 'react';
import datas from './datas.json';
import Game from './components/Game';

class App extends Component {

  constructor(props) {
    super(props);

    console.log(datas);

    this.state = {
      theme        : null,
      indexQuestion: 0
    }
  }

  render() {
    return (
      <>
        {!this.state.theme && <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col">
            <h3>Choisiser un thème :</h3>
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            <ul className="mdl-list">
              {datas.themes.map(theme => (
                <li className="mdl-list__item" key={theme.value}>
                  <button
                    type="submit"
                    className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"
                    onClick={() => this._handleChooseTheme(theme.value)}>
                    {theme.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>}
        {this.state.theme && <Game questions={datas.questions[this.state.theme]} onEnd={() => this._handleQuestionsEnd()} />}
      </>
    );
  }

  _handleChooseTheme(themeValue) {
    this.setState({
      theme: themeValue
    })
  }

  _handleQuestionsEnd() {
    this.setState({
      theme: null
    })
  }
}

export default App;
