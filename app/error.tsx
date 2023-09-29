"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {

  return (
    <div className="loadingPage py-20">
      <div className="text-center mx-2">
        <h1 className="sm:text-4xl text-3xl">Something went wrong !</h1>
        <br />
        <h3 className="sm:text-lg text-base mb-5">The system encountered a problem while trying to retrieve the requested information.</h3>
        <button
          className="block mx-auto border border-mainColor px-5 py-2.5 text-mainColor hover:bg-gray-100 transition duration-300 w-fit"
          onClick={() => reset()}
        >
          TRY AGAIN
        </button>
      </div>

      <div className="bg-notFound h-[50px] bg-contain bg- bg-no-repeat mt-10"></div>
    </div>
  );
}
