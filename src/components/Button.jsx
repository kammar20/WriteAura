export default function Button({ children }) {
  return (
    <button className="bg-custom-gradient py-1.5 px-4 rounded hover:translate-y-[-2px] transition-all">
      {children}
    </button>
  );
}
