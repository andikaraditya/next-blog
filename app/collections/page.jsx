import Header from "../components/Header";
import data from "../data/db.json";
import Link from "next/link";

function renderTitle(title) {
    if (title.length < 45) {
        return title
    } else {
        return title.slice(0,45) + "..."
    }
}

function CollectionPage() {
    let shown = data
    return (
        <main className="flex flex-col w-[700px] m-auto min-h-[80vh]">
            <p className="mb-3 px-2 text-lg text-slate-600">use ctrl+f to search</p>
            {shown.map((el, index) => {
                return (
                    <Link
                    key={index}
                    href={`/posts/${el.id}`}
                    >
                        <div 
                        className="border-b-4 border-white transition-all duration-[400] hover:border-slate-800 p-2 mb-2">
                        <h2 className="text-2xl capitalize text-slate-800 font-semibold line-clamp-1">{el.title}</h2>
                    </div>
                    </Link>
                )
            })}
        </main>
    );
}

export default CollectionPage;