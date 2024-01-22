// import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  console.log(isLoggedIn);

  const logout = () => {
    sessionStorage.clear("id");
    dispatch(authActions.logout());
  };

  return (
    <div>
      <nav className="container flex justify-between py-8">
        <Link
          className="text-3xl leading-none font-semibold text-slate-600"
          to="/"
        >
          Todo
        </Link>
        <ul className=" flex items-center gap-x-8">
          <li>
            <Link
              className="text-sm text-gray-400 hover:text-gray-500 py-2"
              to="/"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              className="text-sm text-gray-400 hover:text-gray-500 py-2"
              to="/about"
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              className="text-sm text-gray-400 hover:text-gray-500 py-2 border-2"
              to="/todo"
            >
              Todo
            </Link>
          </li>

          {!isLoggedIn && (
            <>
              <li>
                <Link
                  className="middle none center rounded-lg py-2 px-6 font-sans text-sm bg-blue-500 hover:bg-white text-white transition-all hover:text-blue-500 active:bg-blue-500/30 disabled:pointer-events-none border-solid border-2 border-blue-500 hover:border-blue-500"
                  data-ripple-dark="true"
                  to="/signup"
                >
                  SignUp
                </Link>
              </li>

              <li>
                <Link
                  className="middle none center rounded-lg py-2 px-6 font-sans text-sm  bg-blue-500 hover:bg-white text-white transition-all hover:text-blue-500 active:bg-blue-500/30 disabled:pointer-events-none border-solid border-2 border-blue-500 hover:border-blue-500 "
                  data-ripple-dark="true"
                  to="/signin"
                >
                  SignIn
                </Link>
              </li>
            </>
          )}

          {isLoggedIn && (
            <>
              <li>
                <Link
                  className="middle none center rounded-lg py-2 px-6 font-sans text-sm  bg-blue-500 hover:bg-white text-white transition-all hover:text-blue-500 active:bg-blue-500/30 disabled:pointer-events-none  border-2 border-blue-500 hover:border-blue-500 "
                  data-ripple-dark="true"
                  to="#"
                  onClick={logout}
                >
                  LogOut
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
