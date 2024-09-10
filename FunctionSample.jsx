import PropTypes from "prop-types";

export const FunctionSample = (props) => {
    const {handleClick} = props;
  return (
    <>
        <p>This is a Function Component.</p>
        <button onClick={handleClick}>Click me!</button>
    </>
  );
};

FunctionSample.propTypes={
    handleClick: PropTypes.func.isRequired,
};