import React from "react";

const Menu = () => {
  return (
    <nav className="pointer-events-auto md:block">
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-300/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <li>
          <a
            className="relative block px-6 py-3 transition text-teal-500 dark:text-teal-400"
            href="/about"
          >
            Sobre mí
            <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
          </a>
        </li>
        <li>
          <a
            className="relative block px-3 py-3 transition hover:text-teal-500 dark:hover:text-teal-400"
            href="/speaking"
          >
            Trabajos
          </a>
        </li>
      </ul>
    </nav>
  );
};

const Header = () => {
  return (
    <header className="pointer-events-none relativee z-50 flex flex-col">
      <div className="top-0 z-10 h-16 pt-6">
        <div className="relative flex gap-4">
          <div className="flex flex-1 ">
            <div className="h-12 ml-3 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
              <a aria-label="Home" className="pointer-events-auto rounded" href="/">
                <img
                  className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-12 w-12"
                  alt-sizes="2.40rem"
                  src="/img/perfil.jpg"
                  alt="perfil"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-2 justify-end md:justify-center">
            <Menu />
          </div>
         
        </div>
      </div>
    </header>
  );
};

export default Header;
