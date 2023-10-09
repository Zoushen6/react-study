import { useState } from 'react'
function Test (props) {
  // 声明一个新的叫做 “count” 的 state
  console.log(props)
  const [count, setCount] = useState(0)
  const arr = [1, 2, 3]
  console.log(Object.isFrozen(arr))
  return (
        <>
            <p style={{ color: 'red' }}>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me {arr}
            </button>
            <ul>
                {arr.map((item) => {
                  return <li key={item}>{item}</li>
                })}
            </ul>
        </>
  )
}

Test.defaultProps = {
  name1: 'aaa'
}

export default Test
