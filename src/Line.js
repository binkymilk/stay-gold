import React from 'react'
import styled from 'styled-components'

const Line = ({ className }) => (
  <svg xmlns='http://www.w3.org/2000/svg' className={className}>
    <line x1='50%' y1='0' x2='50%' y2='100%' />
  </svg>
)

export default styled(Line)`
  height: 35%;
  line {
    stroke: ${(props) => (props.light ? '#edc314' : '#030359')};
    stroke-width: 2;
  }
`
