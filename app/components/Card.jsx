import Link from "next/link"

function renderTitle(title) {
    if (title.length < 35) {
        return title
    } else {
        return title.slice(0, 35) + "..."
    }
}

function Card({ post }) {
    return (
        <div>
            <Link href={`/posts/${post.id}`}>
                <div className="border-4 rounded-2xl border-white transition-all duration-[400] mb-10">
                    <h2 className="text-5xl mb-7 text-center leading-snug capitalize hover:underline transition-all duration-[400] line-clamp-1">
                        {post.title}
                    </h2>
                    <p className="text-2xl text-justify whitespace-pre-line line-clamp-4">
                        {post.description}
                    </p>
                </div>
            </Link>
            <div className="w-[95%] mx-auto h-[2px] bg-slate-600 rounded-md relative"></div>
        </div>
    )
}

export default Card
