import { useParams } from "react-router-dom";
import { darkenLogo, deardiary, logo } from "../assets";

const Authentication = () => {
  const { form } = useParams();
  return (
    <>
  <h1>{form}</h1>
  <form>
    <input type="text" name="username" value="" />
    <input type="password" name="password" value="" />
    <input type="submit" value={form} />
  </form>
  <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="w-full max-w-md space-y-8">
    <div>
      <img className="mx-auto h-28 w-auto" src={darkenLogo} alt="Your Company" />
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-maroon">Welcome!💖🥰</h2>
      <p className="mt-5 text-center text-sm text-gray-900">
      {form == "login" ? "Login" : "Register"} to your account and start ✏️deardiarying✏️ with us
      </p>
    </div>
    <form className="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" value="true" />
      <div className="-space-y-px rounded-md shadow-sm">
        <div>
          <label htmlFor="username" className="sr-only">Username</label>
          <input id="username" name="username" type="text" autoComplete="username" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-rose placeholder-gray-500 focus:z-10 focus:border-rose focus:outline-none focus:ring-rose sm:text-sm" placeholder="Username" />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">Password</label>
          <input id="password" name="password" type="password" autoComplete="current-password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-rose focus:outline-none focus:ring-rose sm:text-sm" placeholder="Password" />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-maroon focus:ring-maroon" />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
        </div>

        <div className="text-sm">
          <a href="#" className="font-medium text-rose hover:text-red">Forgot your password?</a>
        </div>
      </div>

      <div>
        <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-maroon py-2 px-4 text-sm font-medium text-lightPink hover:bg-rose focus:outline-none focus:ring-2 focus:ring-rose focus:ring-offset-2">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            {/* <!-- Heroicon name: mini/lock-closed --> */}
            <svg className="h-5 w-5 text-lightPink group-hover:lightPink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
            </svg>
          </span>
          {form == "login" ? "Login" : "Register"}
        </button>
      </div>
    </form>
  </div>
</div>
  </>
  );
};

export default Authentication;
