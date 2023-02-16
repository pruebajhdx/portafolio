import React, { useEffect, useState } from "react";
import Article from "../services/Article";
import ImageWorks from "../services/ImageWorks";
import Works from "../services/Works";
import IconMenu from "../services/IconMenu";

const useFecthJson = () => {
  const [data, setData] = useState(null);
  const [isFetching, setIsFectching] = useState(true);

  useEffect(() => {
    fetch("/content/about.json")
      .then((res) => res.json())
      .then((jsonData) => {
        setData(jsonData);
      })
      .finally(() => {
        setIsFectching(false);
      });
  });

  return { data, isFetching };
};

const Main = () => {
  const fecth = useFecthJson();

  if (fecth.isFetching === false) {
    return (
      <main>
        <div className="sm:px-8 mt-9 ">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-zinc- dark:text-zinc-800 sm:text-5xl">
                    {fecth.data.main.titleMain}
                  </h1>
                  <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    {fecth.data.main.content}
                  </p>
                  <IconMenu />
                </div>
              </div>
            </div>
          </div>
        </div>

        <ImageWorks/>

        <div className="sm:px-8 mt-24 md:mt-28">
          <div className="mx-auto max-w-7x1 lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                  <Article fecth={fecth.data.article} skills={fecth.data.skills}/>
                  <Works fecth={fecth.data.works} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
};

export default Main;
