import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/book.ico";

const Navbar = () => {
    const links = (
        <>
            <li>
                <Link href="/books" className="font-medium">
                    Books
                </Link>
            </li>
            <li>
                <Link href="/listed-books" className="font-medium">
                    Listed Books
                </Link>
            </li>
            <li>
                <Link href="/pages-reads" className="font-medium">
                    Pages to Read
                </Link>
            </li>
        </>
    );

    return (
        <header className="border-b border-base-200 bg-base-100">
            <div className="navbar container mx-auto min-h-20 px-4 lg:px-6">

                {/* Mobile Menu + Logo */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        <ul
                            tabIndex={-1}
                            className="menu dropdown-content z-50 mt-3 w-56 rounded-2xl border border-base-200 bg-base-100 p-3 shadow-xl"
                        >
                            {links}
                        </ul>
                    </div>

                    <Link
                        href="/"
                        className="ml-1 flex items-center gap-2 lg:ml-0"
                    >
                        <Image
                            src={logo}
                            alt="Book Vibe logo"
                            width={42}
                            height={42}
                        />

                        <span className="text-xl font-bold tracking-tight sm:text-2xl">
                            Book <span className="text-success">Vibe</span>
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-2">
                        {links}
                    </ul>
                </div>

                {/* Authentication Buttons */}
                <div className="navbar-end gap-2">
                    <Link
                        href="/signin"
                        className="btn btn-success hidden sm:flex"
                    >
                        Sign In
                    </Link>

                    <Link
                        href="/signup"
                        className="btn btn-error px-5"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
