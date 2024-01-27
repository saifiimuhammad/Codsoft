import React from 'react'

function Breaker(props) {
  return (
      <div className="break" style={{"marginBlock": props.spaceValue}}></div>
  )
}

Breaker.defaultProps = {
  spaceValue: "5rem"
}

export default Breaker
