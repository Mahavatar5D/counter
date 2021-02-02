import React, { useState } from 'react'

interface CounterProps {
    message: string
}

const Counter: React.FC<CounterProps> = ({ message }: CounterProps) => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {message}: {count}
      </div>
      <button onClick={() => { setCount(count + 1) }}>Click me!</button>
    </>
  )
}

export default Counter
