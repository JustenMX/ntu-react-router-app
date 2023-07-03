/* eslint-disable react/prop-types */

function Input(props) {
  const { inputType, inputFunc, inputValue, className } = props;

  const handleChange = (event) => {
    inputFunc(event.target.value);
  };

  return (
    <>
      <input
        className={className}
        type={inputType}
        onChange={handleChange}
        value={inputValue}
      />
    </>
  );
}

export default Input;
