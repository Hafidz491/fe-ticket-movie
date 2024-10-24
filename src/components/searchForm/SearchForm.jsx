import { Button } from "../button/Button";

export const SearchForm = (props) => {
  const { value, onChange, onClick } = props;

  return (
    <div className="flex gap-1">
      <input
        type="search"
        className="bg-transparent border border-white w-[400px] h-[50px] px-3 rounded-md text-white"
        placeholder="Search your favorite movie"
        onChange={onChange}
        value={value}
      />
      <Button variant="bg-btnSecondary w-[70px] h-[50px]">Search</Button>
    </div>
  );
};
