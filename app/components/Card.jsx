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
            <div>
                <h2 className="text-5xl mb-7 leading-snug capitalize">{renderTitle(post.title)}</h2>
                <p className="text-2xl text-justify whitespace-pre-line">{post.description.slice(0,250) + "..."}</p>
            </div>
        </Link>
    );
}

export default Card;