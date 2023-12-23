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
        <main className="flex flex-col items-stretch w-[700px] m-auto">
            <Header
            title="Collections"
            />
            <p className="mb-3 px-2 text-lg text-slate-600">use ctrl+f to search</p>
            {shown.map((el, index) => {
                return (
                    <Link
                    key={index}
                    href={`/posts/${el.id}`}
                    >
                        <div 
                        className="border-4 rounded-lg border-white transition-all duration-200 hover:border-slate-800 p-2">
                        <h2 className="text-2xl capitalize text-slate-800 font-semibold">{renderTitle(el.title)}</h2>
                    </div>
                    </Link>
                )
            })}
        </main>
    );
}

export default CollectionPage;