import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container flex justify-center flex-col text-center">
        <h1 className="mb-8 font-bold text-5xl">
          Organise Your <br /> Work and Life, Finally.
        </h1>
        <p className="mb-2">
          Become Focused, Organised and Calm with <br />
          TODO App. The Worlds #1 Task Manager App.
        </p>
        <div className="mt-8">
          <Link
            className="m-6 middle none center rounded-lg py-2 px-6 font-sans text-sm  bg-blue-500 hover:bg-white text-white transition-all hover:text-blue-500 active:bg-blue-500/30 disabled:pointer-events-none border-solid border-2 border-blue-500 hover:border-blue-500 "
            data-ripple-dark="true"
            to="/todo"
          >
            Make Todo List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
