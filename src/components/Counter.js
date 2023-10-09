const Counter = (props) => {

  console.log(props.name)
  console.log(props.age)
  console.log(props.color)

  return (
      <div>
          <h1>Count: {props.count}</h1>
      </div>
  )
}

export default Counter;
