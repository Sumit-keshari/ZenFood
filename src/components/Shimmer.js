const Shimmer = () => {
  return (
    <>
      <div className="shimmer"></div>
      <div className="shimmer-container">
        {Array.from({ length: 8 }, (_, index) => (
          <div className="shimmer-item" key={index}>
            <div className="shimmer-item-1"></div>
          </div>
        ))}
      </div>
    </>
  )
};

export default Shimmer;
