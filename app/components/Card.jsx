import Link from "next/link";

function renderTitle(title) {
    if (title.length < 35) {
        return title
    } else {
        return title.slice(0,35) + "..."
    }
}

function Card({post}) {
    return (
        <Link href={`/posts/${post.id}`}>
            <div className="border-4 rounded-2xl border-white transition-all duration-200 hover:border-slate-800 px-8 py-5 hover:shadow-xl">
                <h2 className="text-5xl mb-7 leading-snug capitalize">{renderTitle(post.title)}</h2>
                <p className="text-2xl text-justify whitespace-pre-line">{post.description.slice(0,250) + "..."}</p>
            </div>
        </Link>
    );
}

export default Card;