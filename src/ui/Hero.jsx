import React from "react";
import { GradeintEffect } from "../styles/CustomeStyles";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="max-w-screen-xl rounded-xl bg-gradient-to-br from-indigo-400/50 mt-7 flex justify-center items-center">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="xl:w-[48%] text-secondary-700 text-center xl:text-right">
          <h1 className="my-6 xl:text-4xl text-3xl font-bold">
            انجام با کیفیت پروژه شما
          </h1>
          <p className="opacity-60">
            مرکوری به شما کمک می‌کند تا به راحتی با بهترین‌ها پروژه‌های خود را
            به نتیجه برسانید
          </p>
          <Link to={"/auth"}>
            <button
              className={`bg-gradient-to-br ${GradeintEffect} my-7 rounded-2xl`}
            >
              ایجاد پروژه
            </button>
          </Link>
        </div>

        {/* image */}
        <div className="xl:w-[614px] relative ">
          <img src="./Hero.png" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
