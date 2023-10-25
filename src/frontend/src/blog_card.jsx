export function Blog_card() {
  return (
    <>
      <div className="card w-[35vw] h-[22vh] bg-base-100 trendingCard m-5 overflow-hidden">
        <div className="p-3 m-2">
          <p>[Name]</p>
          <h2 className="card-title">Shoes!</h2>
          <p className="m-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            voluptates fugiat et neque ducimus tempore minus inventore quos
            eveniet animi aspernatur eos, modi eligendi ad illo debitis sunt nam
            quo.
          </p>
          <button className="btn btn-xs m-1">Discuss</button>
          <button className="btn btn-xs m-1">Like</button>
        </div>
      </div>
    </>
  );
}
