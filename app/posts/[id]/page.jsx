import data from "../../data/db.json";

function getPost(id) {
    return data.filter((el) => el.id == id)[0]
}

function getDate(date) {
    return new Date(date).toLocaleString('en-GB', {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    })
}

function PostDetail({params}) {
    const {id} = params
    const post = getPost(id)
    if (!post) {
        return (
            <main>
                <div className="py-10 mb-10 w-[800px] m-auto border-b-4 border-slate-800">
                <h1 className="text-6xl text-center text-slate-800 capitalize">Loading Post</h1>
            </div>
            <div className="w-[800px] m-auto">
                <p className="text-3xl text-justify whitespace-pre-line leading-snug text-slate-800">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repudiandae, earum ipsum cupiditate deleniti delectus nulla, temporibus magni eaque amet sit pariatur possimus quae soluta aliquid modi rem quaerat! Ipsum. 
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eveniet officiis est cupiditate tenetur, a obcaecati veniam nihil accusantium distinctio eos sapiente praesentium soluta placeat. Ipsum, repellat. Voluptatum, delectus ullam!
                </p>
            </div>
            </main>
        )
    }
    return (
        <main className="min-h-[80vh]">
            <div className="py-10 mb-10 w-[800px] m-auto border-b-4 border-slate-800">
                <h1 className="text-6xl text-center text-slate-800 capitalize">{post.title}</h1>
            </div>
            <div className="w-[800px] m-auto">
                <p className="text-lg text-slate-600 mb-4">Posted on {getDate(post.date)}</p>
                <p className="text-3xl text-justify whitespace-pre-line leading-snug text-slate-800">
                    {post.description}
                </p>
            </div>
        </main>
    );
}

export default PostDetail;