import React, { useState } from 'react'

interface CounterProps {
  message: string
}

const Counter: React.FC<CounterProps> = ({ message }:CounterProps): JSX.Element => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div
        className={'outputMessageCounter'}
      >
        {message}: {count}
      </div>
      <button
        className={'inputMessageCounter'}
        onClick={() => { setCount(count + 1) }}
      >
        Click me!
      </button>
    </>
  )
}

export default Counter
