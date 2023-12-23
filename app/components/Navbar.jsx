import Link from "next/link";

function Navbar() {
    return (
        <nav className="flex py-5 justify-around bg-slate-200 items-center border-b-2 border-slate-600">
            <div className="nav-item"><Link href="/">Home</Link></div>
            <div className="nav-item"><Link href="/collections">Collections</Link></div>
        </nav>
    );
}

export default Navbar;