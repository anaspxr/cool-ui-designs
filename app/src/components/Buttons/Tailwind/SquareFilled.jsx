export default function SquareFilled({ onClick, className = "", children }) {
  return (
    <button
      onClick={onClick}
      className={
        "bg-purple-900 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full " +
        className
      }>
      {children}
    </button>
  );
}
