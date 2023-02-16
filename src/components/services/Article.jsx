import React from "react";

const SkillsTec = (data) => {
  return (
    <div className="group relative flex flex-col items-start">
      <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-800">
        <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-100/50 sm:-inset-x-6 sm:rounded-2xl"></div>
        <a href="#/" >
          <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
          <span className="relative z-10"></span>
        </a>
      </h2>
      <time
        className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
        dateTime="2022-09-05"
      >
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
        </span>
        <b>Tecnologias y otros que he utilizado </b>
        <br />
      </time>

      {Object.entries(data.fecth).map((value, idx) => (
        <ol className="mt-6 space-y-4" key={idx}>
          <li className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
              <img
                src={value[1].img}
                width="32"
                height="32"
                className="h-7 w-7 rounded-full"
                alt="something"
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dd className="w-full flex-none text-sm font-medium text-zinc-900">
                {value[1].title}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {value[1].percentage}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label="2019 until Present"
              >
                <time dateTime="2019">2022</time>{" "}
                <span aria-hidden="true">—</span>{" "}
                <time dateTime="2023">Presente</time>
              </dd>
            </dl>
          </li>
        </ol>
      ))}
    </div>
  );
};

const Article = (data) => {
  return (
    <div className="flex flex-col gap-16">
      <article className="group relative flex flex-col items-start">
        <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-800">
          <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-100/50 sm:-inset-x-6 sm:rounded-2xl"></div>
          <a
            href="http://ciriec.es/valencia2022/wp-content/uploads/COMUN-158.pdf"
            target="noreferrer"
          >
            <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
            <span className="relative z-10">{data.fecth.article0.title}</span>
          </a>
        </h2>
        <time
          className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
          dateTime="2022-09-05"
        >
          <span
            className="absolute inset-y-0 left-0 flex items-center"
            aria-hidden="true"
          >
            <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
          </span>
          <b>Artículos Publicados </b>, {data.fecth.article0.date}
          <br />
        </time>
        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {data.fecth.article0.detail}
        </p>
        <div
          aria-hidden="true"
          className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
        >
          Leer Artículo
          <svg
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="ml-1 h-4 w-4 stroke-current"
          >
            <path
              d="M6.75 5.75 9.25 8l-2.5 2.25"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </article>

      <SkillsTec fecth={data.skills} />
    </div>
  );
};

export default Article;
