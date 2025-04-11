"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Header() {
    const allPaths = [
        {
            title: "Dashboard",
            path: "/",
        },
        {
            title: "Transactions",
            path: "/transactions",
        },
    ];

    const path = usePathname();
    const [open, setOpen] = useState(false);

    function handleSideBar() {
        setOpen(!open);
        console.log("click");
    }

    return (
        <div className="p-8">
            <div className="lg:ml-52">
                <div className="flex justify-between items-center ">
                    <button onClick={() => handleSideBar()}>
                        <Image
                            src="./menu.svg"
                            width={20}
                            height={20}
                            alt="menu icon"
                            className="lg:hidden"
                        />
                    </button>
                    <div>
                        <h1 className="text-2xl text-[#343C6A]">
                            {path == "/"
                                ? "OVERVIEW"
                                : path
                                      .slice(1, path.length)
                                      .toUpperCase()}
                        </h1>
                    </div>
                    <div>
                        <Image
                            src="./profile.svg"
                            width={40}
                            height={40}
                            alt="menu icon"
                        />
                    </div>
                </div>
                <input
                    type="text"
                    className="bg-[#F5F7FA] w-full mt-5 h-10 rounded-full px-10 placeholder:text-[#8BA3CB] max-w-5xl mx-auto"
                    placeholder="Search for something"
                />
            </div>
            <nav
                className={`${
                    open ? "flex" : "hidden"
                } fixed top-0 left-0 h-screen w-full lg:flex `}
            >
                <div className="flex bg-white w-1/2 px-4 py-8 flex-col justify-between h-full max-w-52 border-r-2 border-r-gray-300">
                    <h1 className="text-2xl font-bold">
                        Thadeu Alves
                    </h1>
                    <ul className="flex flex-col gap-2">
                        {allPaths.map((p) => {
                            return (
                                <Link
                                    href={p.path}
                                    onClick={() =>
                                        handleSideBar()
                                    }
                                    key={p.title}
                                >
                                    <li
                                        className={`"text-xl py-2 px-4 rounded-2xl  ${
                                            path ==
                                            p.path.toLocaleLowerCase()
                                                ? "bg-blue-600 text-white"
                                                : ""
                                        }`}
                                    >
                                        {p.title}
                                    </li>
                                </Link>
                            );
                        })}
                    </ul>
                    <div>options</div>
                </div>
                <div
                    className="flex-1 bg-black opacity-25 lg:hidden"
                    onClick={() => handleSideBar()}
                ></div>
            </nav>
        </div>
    );
}
