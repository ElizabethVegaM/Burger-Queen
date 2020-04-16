/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import firebase from '../Firebase/firestore';

const Timer = ({ id }) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const db = firebase.firestore();

  const stopTimer = (secs) => {
    db.collection('ordersList').doc(id)
      .update({
        status: 'Listo',
        duration: secs,
      })
      .then(() => {
        alert('Orden terminada');
        setSeconds(0);
        setIsActive(false);
      })
      .catch((error) => {
        // The document probably doesn't exist.
        console.error('Error updating document: ', error);
      });
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        // eslint-disable-next-line no-shadow
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="app">
      <div className="time">{`${seconds}s`}</div>
      <div className="row">
        <button type="button" className="button" onClick={stopTimer(seconds)}>
          Terminar orden
        </button>
      </div>
    </div>
  );
};

Timer.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Timer;
