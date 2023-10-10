import { useEffect, useState } from 'react'
function Test (props) {
  // 声明一个新的叫做 “count” 的 state
  // console.log(props)
  const [count, setCount] = useState(0)
  const arr = [1, 2, 3]
  // console.log(Object.isFrozen(arr))
  const arrLi = arr.map((item) => {
    return <li key={item}>{item}</li>
  })
  const increment = () => {
    setCount(count => count + 1)
    console.log(count)
  }
  useEffect(() => {
    console.log(count)
  })
  return (
        <>
            <p style={{ color: 'red' }}>counts: {count}</p>
            <button onClick={increment}>
                Click me +1
            </button>
            <button onClick={() => { increment(); increment(); increment() }}>
                Click me +3
            </button>
            <ul>
                {arrLi}
            </ul>
        </>
  )
}

Test.defaultProps = {
  name1: 'aaa'
}

export default Test
