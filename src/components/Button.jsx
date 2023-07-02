import { Link } from "react-router-dom";
function button(props) {
  const { buttonLabel, path, className } = props;
  return (
    <>
      <button className={className}>
        <Link to={path}>{buttonLabel}</Link>
      </button>
    </>
  );
}

export default button;
