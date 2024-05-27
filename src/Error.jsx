
import { Link } from 'react-router-dom';
import error from '../src/assets/404 Error with a cute animal-cuate.png'
const Error = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
  <div className="text-center">
    <img src={error} alt="Error" className="w-96 mx-auto" />
    <Link to="/">
      <button className="btn btn-outline bg-yellow-200 mt-5">Go home back</button>
    </Link>
  </div>
</div>

    );
};

export default Error;