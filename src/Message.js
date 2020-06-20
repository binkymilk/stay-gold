import React from 'react'
import styled from 'styled-components'

const Message = ({ className, children }) => (
  <span className={className}>{children}</span>
)

export default styled(Message)`
  color: white;
  font-size: 32px;
  font-weight: bold;
  margin-top: 24px;

  ::selection {
    color: none;
    background: none;
  }

  /* For Mozilla Firefox */
  ::-moz-selection {
    color: none;
    background: none;
  }
`
