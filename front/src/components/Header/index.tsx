import { Link } from 'react-router-dom';


function Header() {

    return (
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className={`animate-fade-in-down w-full "block" flex-grow lg:flex lg:items-center lg:w-auto`}>
            <div className="text-sm lg:flex-grow">
                <button>
                    <Link to="/"
                        className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mx-4">
                        Home
                    </Link>
                </button>
                <button>
                    <Link
                        className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                        to={`/action-ids`}>
                        Action IDs
                    </Link>
                </button>
                <button>
                    <Link
                        className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                        to={`/codewords`}>
                        Codewords
                    </Link>
                </button>
                <button>
                    <a href={"http://localhost:3000/docs"} target={"_blank"} rel={"noreferrer"}
                        className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mx-4">
                        API Docs
                    </a>
                </button>
            </div>
        </div>
      </nav>
  );
}

export default Header;