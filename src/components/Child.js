const Child = (props) => {
  return (
      <>
        <h1> I am child component </h1>
        <button onClick={props.func}> Button</button>
      </>
  );
}

export default Child;
