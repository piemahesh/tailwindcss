export const Button = ({
  title = "please give the title",
  isDisabled = true,
  isLoading,
  onclick,
  styling = "bg-white",
  ...rest
}) => {
  console.log(styling);
  console.log(rest);
  return (
    <button
      disabled={isDisabled}
      onClick={onclick}
      className={` ${styling} mt-10 w-fit px-4 py-2 ${
        isDisabled ? "cursor-not-allowed" : "cursor-pointer"
      } rounded-full `}
    >
      {`${title} ${isLoading ? "..." : ""}`}
    </button>
  );
};
