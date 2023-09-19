import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div id="title">
        <div className="container mx-auto p-4 flex justify-between items-center text-amber-100">
          <div className=" font-bold brand">
            <Link href="/">Vizualytics</Link>
          </div>
          <div className="text-base ml-auto">
            <>
              <Link href="https://www.linkedin.com/in/adittiyaasril/">
                <span className="hover:text-yellow-200 mr-4">Connect</span>
              </Link>
              <Link href="https://github.com/adittiyaasril?tab=repositories">
                <span className="hover:text-yellow-200">Repository</span>
              </Link>
            </>
          </div>
        </div>
        <div className="text-center pt-16 text-amber-100">
          <div className="text-center font-black text-6xl text-amber-100">
            Visualize Your Data Insights
          </div>
          <div className="text-lg leading-9 pt-10 pb-10 px-4">
            Vizualytics is your comprehensive data analytics and visualization
            platform, designed to empower you with intuitive tools for
            exploring, understanding, and communicating data-driven insights.
          </div>
          <Link href="/raw-data/upload">
            <button className=" bg-amber-100 hover:bg-black text-black font-semibold hover:text-amber-100 py-4 px-10 mr-2 border border-black hover:border-amber-100 rounded">
              Upload
            </button>
          </Link>
          <Link href="/raw-data/graph">
            <button className=" bg-transparent hover:bg-amber-100 text-amber-100 font-semibold hover:text-black py-4 px-8 ml-2 border border-amber-100 hover:border-transparent rounded">
              Show Graph
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
