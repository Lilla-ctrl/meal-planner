export default function Header() {
  return (
    <div>
      <nav className="bg-primary-teal py-5 sticky top-0 z-50">
        <div className="max-w-[1000px] mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="text-3xl font-semibold text-light-cream">
            Meal Planner
          </a>

          {/* <!-- Hamburger icon --> */}
          <button
            id="menu-btn"
            className="md:hidden text-light-cream focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* <!-- Desktop menu --> */}
          <div id="menu" className="hidden sm:flex space-x-6">
            <a href="#home" className="text-light-cream text-xl">
              Home
            </a>
            <a href="#favorites" className="text-light-cream text-xl">
              Favorites
            </a>
            <a href="#plans" className="text-light-cream text-xl">
              Plans
            </a>
            <a href="#grocery" className="text-light-cream text-xl">
              Grocery
            </a>
            <a href="#recipes" className="text-light-cream text-xl">
              Recipes
            </a>
          </div>
        </div>

        {/* <!-- Mobile menu --> */}
        <div id="mobile-menu" className="md:hidden hidden px-4 pb-4 space-y-2">
          <a href="#home" className="block text-gray-700 hover:text-teal-600">
            Home
          </a>
          <a
            href="#projects"
            className="block text-gray-700 hover:text-teal-600"
          >
            Projects
          </a>
          <a href="#about" className="block text-gray-700 hover:text-teal-600">
            About
          </a>
          <a href="#skills" className="block text-gray-700 hover:text-teal-600">
            Skills
          </a>
          <a
            href="#contact"
            className="block text-gray-700 hover:text-teal-600"
          >
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}
