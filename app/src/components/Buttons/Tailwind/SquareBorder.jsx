export default function SquareBorder({ onClick, className, children }) {
  return (
    <button
      onClick={onClick}
      className={
        "bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent " +
        className
      }>
      {children}
    </button>
  );
}
