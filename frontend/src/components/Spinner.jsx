const Spinner = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-white">
      <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin">
        <h1 className="font-bold">Loading...</h1>
      </div>
    </div>
  );
};

export default Spinner;
