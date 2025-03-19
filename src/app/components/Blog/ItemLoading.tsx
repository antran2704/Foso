const Item = () => {
  return (
    <div className="rounded-lg overflow-hidden">
      <div className="animate-pulse bg-gray-100 w-full h-[400px] rounded-3xl" />
      <div className="mt-2">
        <span className="w-[144px] h-6 bg-gray-100 animate-pulse rounded-lg" />

        <p className="w-full h-6 bg-gray-100 animate-pulse mb-4 mt-3 rounded-md" />
        <p className="w-2/3 h-6 bg-gray-100 animate-pulse mb-4 mt-3 rounded-md" />
        <p className="w-1/3 h-6 bg-gray-100 animate-pulse mt-4 rounded-md" />
      </div>
    </div>
  );
};

export default Item;
