import { Link } from "react-router-dom";

const Error = () => {
  return(
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you were looking does not exist.</p>
      <Link to='/'>Back to home page</Link>
    </div>
  )
}

export default Error;