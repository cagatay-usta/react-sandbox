import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1> This route doesnt exist</h1>
      <Link to="/">Click here to go back to home page</Link>
    </div>
  );
};

export default ErrorPage;