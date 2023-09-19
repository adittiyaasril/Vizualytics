import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="container-child mx-auto p-4 flex justify-between items-center text-amber-100">
        <div className=" font-bold brand">
          <Link href="/">Vizualytics</Link>
        </div>
        <div className="text-base ml-auto">
          <>
            <Link href="/raw-data/upload">
              <span className="hover:text-yellow-200 mr-4">Upload</span>
            </Link>
            <Link href="/raw-data/graph">
              <span className="hover:text-yellow-200">Show Graph</span>
            </Link>
          </>
        </div>
      </div>
    </>
  );
}
