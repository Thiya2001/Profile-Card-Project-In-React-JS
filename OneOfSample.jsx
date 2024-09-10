import PropTypes from "prop-types";

export const OneOfSample = (props) => {
    const {color} = props;
  return (
    <div style={{ backgroundColor: color, padding: "20px", color: "white" }}>
            <p>One Of Sample color is {color}.</p>
    </div>
  );
};

OneOfSample.PropTypes = {
color: PropTypes.oneOf(["red", "green", "blue"]).isRequired,
};