function Header({title}) {
    return (
        <div className="py-10 mb-16 max-[700px]:w-[85%] w-[700px] mx-auto border-b-4 border-slate-800">
            <h1 className="text-8xl max-[700px]:text-[3rem] text-center text-slate-800 underline capitalize">{title}</h1>
        </div>
    );
}

export default Header;