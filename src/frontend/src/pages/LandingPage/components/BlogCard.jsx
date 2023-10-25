export function BlogCard() {
  return (
    <>
      <div className="card w-[35vw] h-[35vh] bg-base-100 trendingCard m-5 overflow-hidden">
        <div className="p-3">
          <p>[Name]</p>
          <h2 className="card-title">Shoes!</h2>
          <p className="m-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            voluptates fugiat et neque ducimus tempore minus inventore quos
            eveniet animi aspernatur eos, modi eligendi ad illo debitis sunt nam
            quo.
          </p>
          <button className="m-1 btn btn-xs">Discuss</button>
          <button className="m-1 btn btn-xs">Like</button>
        </div>
      </div>
    </>
  );
}
