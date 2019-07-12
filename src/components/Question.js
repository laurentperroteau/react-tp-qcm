import React, { useState } from 'react';

const Question = ({dataItem, onSubmit}) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(selectedAnswer);
    setSelectedAnswer('');
  };

  return (
    <form onSubmit={handleSubmit} className="mdl-grid">
      <div className="mdl-cell mdl-cell--4-col">
        <h3>{dataItem.question}</h3>
        <button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"
                disabled={!selectedAnswer}>Répondre
        </button>
      </div>
      <div className="mdl-cell mdl-cell--4-col">
        <ul className="mdl-list">
          {dataItem.answers.map(answer => (

            <li className="mdl-list__item" key={answer}>
              <label className="mdl-radio">
                <input
                  type="radio"
                  className="mdl-radio__button"
                  value={answer}
                  checked={answer === selectedAnswer}
                  onChange={handleChange}
                />
                <span className="mdl-radio__label">{answer}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
};

export default Question;
