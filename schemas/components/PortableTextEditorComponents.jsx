import React from 'react'

export const mathInlineIcon = () => (
  <span>
    <span style={{ fontWeight: 'bold' }}>∑</span>
  </span>
)
export const mathIcon = () => <span style={{ fontWeight: 'bold' }}>∑</span>

export const highlightIcon = () => (
  <span style={{fontWeight: 'bold'}}>H</span>
  )

export const OrangeHighlight = props => (
    <span style={{ backgroundColor: 'yellow' }}>{props.children}</span>
  )

  export const tickIcon = () => (
    <span>✅</span>
    )

    export const crossIcon = () => (
      <span>❎</span>
      )