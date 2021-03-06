import React, { useState } from 'react'
import styled from 'styled-components'
import shuffle from 'lodash/shuffle'

import Bulb from './Bulb'
import Line from './Line'
import Message from './Message'

import messages from './messages'

const App = ({ className }) => {
  const [light, setLight] = useState(false)
  const [message, setMessage] = useState('')

  const turnOnLight = () => {
    setMessage(shuffle(messages)[0])
    setLight(!light)
  }

  return (
    <div className={`${className} ${light ? '-light' : '-dark'}`}>
      {!light ? (
        <span className='note'>Click the light bulb for a surprise!</span>
      ) : null}
      <Line light={light} />
      <Bulb light={light} onClick={turnOnLight} />
      {light ? <Message>{message}</Message> : null}
      <footer lassName={`footer ${light ? '-light' : ''}`}>
        <a href='https://www.youtube.com/watch?v=wY1ieGMKfQ4'>
          Inspired by{' '}
          <span role='img' aria-label='stay-gold'>
            💖
          </span>
        </a>
      </footer>
    </div>
  )
}

export default styled(App)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  .note {
    position: absolute;
    top: 16px;
    color: #2828f7;
  }

  footer {
    margin-top: auto;
    margin-bottom: 16px;
    font-size: 12px;
    color: white;
  }

  footer a::selection,
  footer a span::selection {
    color: none;
    background: none;
  }

  footer a {
    text-decoration: none;
  }

  footer a:hover {
    text-decoration: underline;
  }

  a:active,
  a:visited {
    color: white;
  }

  &.-dark {
    background: -moz-linear-gradient(
      2.4% 50.05% 0deg,
      rgba(1, 0, 17, 1) 0%,
      rgba(0, 5, 40, 1) 52.57%,
      rgba(3, 1, 79, 1) 100%
    );
    background: -webkit-linear-gradient(
      0deg,
      rgba(1, 0, 17, 1) 0%,
      rgba(0, 5, 40, 1) 52.57%,
      rgba(3, 1, 79, 1) 100%
    );
    background: -webkit-gradient(
      linear,
      2.4% 50.05%,
      102.7% 50.05%,
      color-stop(0, rgba(1, 0, 17, 1)),
      color-stop(0.5257, rgba(0, 5, 40, 1)),
      color-stop(1, rgba(3, 1, 79, 1))
    );
    background: -o-linear-gradient(
      0deg,
      rgba(1, 0, 17, 1) 0%,
      rgba(0, 5, 40, 1) 52.57%,
      rgba(3, 1, 79, 1) 100%
    );
    background: -ms-linear-gradient(
      0deg,
      rgba(1, 0, 17, 1) 0%,
      rgba(0, 5, 40, 1) 52.57%,
      rgba(3, 1, 79, 1) 100%
    );
    background: linear-gradient(
      0deg,
      rgba(1, 0, 17, 1) 0%,
      rgba(0, 5, 40, 1) 52.57%,
      rgba(3, 1, 79, 1) 100%
    );
  }
  &.-light {
    background: -moz-radial-gradient(
      circle,
      rgba(255, 227, 71, 1) 0%,
      rgba(150, 133, 74, 1) 37.24%,
      rgba(71, 62, 77, 1) 67.82%,
      rgba(22, 18, 78, 1) 89.37%,
      rgba(3, 1, 79, 1) 100%
    );
    background: -webkit-radial-gradient(
      circle,
      rgba(255, 227, 71, 1) 0%,
      rgba(150, 133, 74, 1) 37.24%,
      rgba(71, 62, 77, 1) 67.82%,
      rgba(22, 18, 78, 1) 89.37%,
      rgba(3, 1, 79, 1) 100%
    );
    background: -webkit-gradient(
      radial,
      -59.94% 162.2%,
      0,
      -59.94% 162.2%,
      501.25,
      color-stop(0, rgba(255, 227, 71, 1)),
      color-stop(0.3724, rgba(150, 133, 74, 1)),
      color-stop(0.6782, rgba(71, 62, 77, 1)),
      color-stop(0.8937, rgba(22, 18, 78, 1)),
      color-stop(1, rgba(3, 1, 79, 1))
    );
    background: -o-radial-gradient(
      circle,
      rgba(255, 227, 71, 1) 0%,
      rgba(150, 133, 74, 1) 37.24%,
      rgba(71, 62, 77, 1) 67.82%,
      rgba(22, 18, 78, 1) 89.37%,
      rgba(3, 1, 79, 1) 100%
    );
    background: -ms-radial-gradient(
      circle,
      rgba(255, 227, 71, 1) 0%,
      rgba(150, 133, 74, 1) 37.24%,
      rgba(71, 62, 77, 1) 67.82%,
      rgba(22, 18, 78, 1) 89.37%,
      rgba(3, 1, 79, 1) 100%
    );
    background: radial-gradient(
      circle,
      rgba(255, 227, 71, 1) 0%,
      rgba(150, 133, 74, 1) 37.24%,
      rgba(71, 62, 77, 1) 67.82%,
      rgba(22, 18, 78, 1) 89.37%,
      rgba(3, 1, 79, 1) 100%
    );
  }
`
