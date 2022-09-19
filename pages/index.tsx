import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <form className="flex flex-col space-y-2 bg-blue-100 p-5 focus-within:bg-blue-300">
      <input
        type="text"
        required
        placeholder="Username"
        className="peer rounded-md border border-gray-300 p-1"
      />
      <span className="hidden peer-invalid:block peer-invalid:text-red-400">
        This input is invalid
      </span>
      <span className="hidden peer-hover:block peer-hover:text-amber-300">
        Hello
      </span>
      <input type="submit" value="Login" className="bg-white" />
    </form>
  );
};

export default Home;
