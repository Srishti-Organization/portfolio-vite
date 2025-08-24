export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`px-4 py-2 rounded-full font-medium text-sm ${className}`}
    >
      {children}
    </span>
  );
}
