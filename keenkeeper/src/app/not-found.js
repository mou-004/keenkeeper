import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center bg-base-100 py-10 px-4 text-center">
 
      <h1 className="text-4xl font-black text-primary/20 animate-bounce">
        404
      </h1>

      <div className="mt-4">
        <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
         Wrong page!
        </h2>
        <p className="mt-4 text-gray-500 text-lg">
         There is no page in DataBase
        </p>
      </div>

      {/* ব্যাক টু হোম বাটন */}
      <Link
        href="/"
        className="mt-8 px-8 py-3   font-bold   shadow-lg  btn"
      >
        Back to Home
      </Link>
    </div>
  );
}
