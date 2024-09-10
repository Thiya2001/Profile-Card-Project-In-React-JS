import PropTypes from "prop-types";

export const ArraySample = (props) => {
    const {items}=props;
  return(
        <div>
            <h3>List Item 1</h3>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
  );
};
ArraySample.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
};