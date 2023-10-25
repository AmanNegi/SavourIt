export function Banner() {
  return (
    <>
      <div className="w-[100vw] h-[75vh] bg-bannerColor bg-green-600">
        <div className="w-[50%] h-[100%] flex justify-start items-center ml-[15vh]">
          <div className="max-w-xl text-center h-2/4 flex flex-col items-center justify-center">
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <h1 className="text-5xl font-bold">Hello there</h1>
            <button className="btn btn-primary m-5">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}
