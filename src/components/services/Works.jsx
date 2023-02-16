import React from "react";

const Works = (data) => {
    return (
      <div className="space-y-9 lg:pl-15 xl:pl-24">
        <div className="rounded-2xl border border-zinc-100 p-5 dark:border-zinc-300/40">
          <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-800">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-6 w-6 flex-none"
            >
              <path
                d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
              ></path>
              <path
                d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                className="stroke-zinc-600 dark:stroke-zinc-800"
              ></path>
            </svg>
            <span className="ml-3">Trabajos</span>
          </h2>
  
          {Object.entries(data.fecth).map((value, idx) => (
            <ol key={idx} className="mt-6 space-y-4">
              <li className="flex gap-4">
                <dl className="flex flex-auto flex-wrap gap-x-2">
                  <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-800">
                    {value[1].title}
                  </dd>
                  <dt className="sr-only">Role</dt>
                  <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                    {value[1].description}
                  </dd>
                  <dt className="sr-only">Date</dt>
                  <dd
                    className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                    aria-label="2019 until Present"
                  >
                    <time dateTime="2019">{value[1].year}</time>{" "}
                    <span aria-hidden="true">—</span>{" "}
                    <time dateTime="2023">{value[1].state}</time>
                  </dd>
                </dl>
              </li>
            </ol>
          ))}
  
          <a
            className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-100 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-100/50 dark:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-300/50 dark:active:text-zinc-50/70 group mt-6 w-full"
            href="https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001989802"
            target="noreferrer"
          >
            Mi Cvlac como investigador
            <svg
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
            >
              <path
                d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    );
  };

  export default Works