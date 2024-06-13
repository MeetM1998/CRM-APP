import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  useEffect(() => {
    history.replace("/notfound");
  }, []);

  const handleGoHome = () => {
    history.push("/");
  };

  return (
    <div class="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
      <div class="rounded-lg bg-white p-8 text-center shadow-xl">
        <h1 class="mb-4 text-4xl font-bold">404</h1>
        <p class="text-gray-600">
          Oops! The page you are looking for could not be found.
        </p>
        <button
          onClick={handleGoHome}
          class="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
        >
          Go back to Home
        </button>
      </div>
    </div>
  );
};
export default NotFound;
