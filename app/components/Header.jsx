import Navbar from "./Navbar"

function Header({ title }) {
    return (
        <>
            <div className="py-10 mb-4 max-[700px]:w-[85%] w-[700px] mx-auto">
                <h1 className="text-6xl max-[700px]:text-[3rem] text-center text-slate-800 underline capitalize mb-10">
                    {title}
                </h1>
                <Navbar />
            </div>
        </>
    )
}

export default Header
