import React from "react";

const ErrorPage = () => {
  return (
    <div className="w-full h-fit border-t-2 border-zinc-200 pt-12">
      <div className="ErrorWrapper w-5/6 mx-auto h-fit gap-4">
        <div className="error-inner w-full h-fit rounded-md flex gap-3 flex-col">
          <div className="header W-full h-fit rounded-md flex flex-col justify-center items-center gap py-4 px-5 text-white font-bold text-2xl">
            <Link to="/">
              <p className=" text-tet underline text-center text-sm">
                Return to the Home Page
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
