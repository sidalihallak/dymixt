import {Logo} from "@/components/Logo/Logo";
import {NavBar} from "@/components/Layout/NavBar/NavBar";

const Header = () => (
  <>
    <header
      className="w-full my-6 px-2 sm:px-8"
    >
      <div className="flex sm:px-6 sm:px-14 h-header sm:items-center sm:gap-4 sm:gap-8">
        <h2 className="flex-1">
          <a
              href="/"
              className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6"
          >
            <Logo />
            <div>
              <span className="text-xs">Association FF Sport pour tous</span>
            </div>
          </a>
        </h2>
        <div>
          <NavBar />
        </div>
      </div>
    </header>
  </>
);

export default Header;
