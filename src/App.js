import React, { Component } from 'react';
// import datas from './datas.json';
import Game from './components/Game';
import Button from './components/Button';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      datas        : null,
      theme        : null,
      indexQuestion: 0
    }
  }

  async componentDidMount() {
    try {
      // Celui dans public
      const datas = await fetch('datas.json').then(res => res.json());
      this.setState({
        datas
      });
    } catch (e) {
      console.error('Erreur au fetch datas.json', e);
    }

  }

  render() {
    return (
      <>
        {this.state.datas ?
          <>
            {!this.state.theme && <div className="mdl-grid">
              <div className="mdl-cell mdl-cell--4-col">
                <h3>Choisiser un thème :</h3>
              </div>
              <div className="mdl-cell mdl-cell--4-col">
                <ul className="mdl-list">
                  {this.state.datas.themes.map(theme => (
                    <li className="mdl-list__item" key={theme.value}>
                      <Button label={theme.name} onClick={() => this._handleChooseTheme(theme.value)} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>}
            {this.state.theme && <Game questions={this.state.datas.questions[this.state.theme]} onEnd={() => this._handleQuestionsEnd()} />}
          </>
          :
          <p>loading...</p>
        }
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
