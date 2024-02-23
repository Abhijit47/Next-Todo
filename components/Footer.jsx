export default function Footer() {
  return (
    <footer className="flex items-center justify-center bg-gray-800 p-4">
      <p className="font-normal text-white">
        Copyright {new Date().getFullYear()} Ninja List
      </p>
    </footer>
  );
}
