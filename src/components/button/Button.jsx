export const Button = (props) => {
  const { variant, children, onClick } = props;

  return (
    <button
      className={` text-white drop-shadow-lg rounded-md ${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
