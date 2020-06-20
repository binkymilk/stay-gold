import React from 'react'
import styled from 'styled-components'

const Bulb = ({ className, light, setLight }) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      onClick={() => setLight(!light)}
    >
      <path
        d='M19 16c0 3.9-3.1 7-7 7s-7-3.1-7-7c0-2.4 1.3-4.7 3.4-6L9 6.8c.1-.5.5-.8 1-.8h4c.5 0 .9.3 1 .8l.6 3.2c2.1 1.3 3.4 3.6 3.4 6z'
        fill={light ? '#ffe347' : '#030359'}
      />
      <path
        d='M9 3c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2 .6 0 1 .4 1 1s-.4 1-1 1H9c-.6 0-1-.4-1-1s.4-1 1-1z'
        fill={light ? '#edc314' : '#01014c'}
      />
    </svg>
  )
}

export default styled(Bulb)`
  height: 100px;
  cursor: pointer;
`
