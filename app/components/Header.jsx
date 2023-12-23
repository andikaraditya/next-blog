function Header({title}) {
    return (
        <div className="py-10 mb-16 w-[700px] m-auto border-b-4 border-slate-800">
            <h1 className="text-8xl text-center text-slate-800 underline">{title}</h1>
        </div>
    );
}

export default Header;