import Button from "./Button";

const Pagination = () => {
  return (
    <div className="p-4 text-gray-500 flex items-center justify-between">
      <Button
        disabled
        className="disabled:cursor-not-allowed disabled:opacity-50 bg-slate-200 py-2 px-4 text-xs font-bold rounded-md "
        type="button"
      >
        Prev
      </Button>
      <div className="flex items-center justify-center gap-2 text-sm">
        <Button className="bg-customColorSky px-2 rounded-sm" type="button">
          1
        </Button>
        <Button type="button" className=" px-2 rounded-sm">
          2
        </Button>
        <Button type="button" className=" px-2 rounded-sm">
          3
        </Button>
        ...
        <Button type="button" className=" px-2 rounded-sm">
          10
        </Button>
      </div>
      <Button
        className="disabled:cursor-not-allowed disabled:opacity-50 bg-slate-200 py-2 px-4 text-xs font-bold rounded-md "
        type="button"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
