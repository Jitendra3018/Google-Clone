import { useRouter } from "next/router";
import Image from "next/image";
import { useRef } from "react";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";
import { signIn, useSession } from "next-auth/client";

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);
    const [session] = useSession();

    const search = (e) => {
        e.preventDefault();

        const term = searchInputRef.current.value;

        if (!term) return;

        router.push(`/search?term=${term}`);
    };

    return (
        <header className="sticky top-0 bg-white z-50">
            <div className="flex w-full p-6 items-center">
                <Image
                    src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    height={40}
                    width={120}
                    className="cursor-pointer"
                    onClick={() => router.push("/")}
                />
                <form className="flex border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5 flex-grow">
                    <input
                        type="text"
                        ref={searchInputRef}
                        className="outline-none flex-grow w-full"
                        defaultValue={router.query.term}
                    />
                    <XIcon
                        className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3"
                        onClick={() => (searchInputRef.current.value = "")}
                    />
                    <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-500 cursor-pointer" />
                    <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex cursor-pointer" />
                    <button hidden type="submit" onClick={search}>
                        Search
                    </button>
                </form>
                {!session ? (
                    <button onClick={signIn} className="ml-auto">Sign In</button>
                ) : (
                    <Avatar url={session.user.image} className="ml-auto" />
                )}
                {/* <Avatar url="/image.jpg" className="ml-auto" /> */}
            </div>

            {/* Header-Options */}
            <HeaderOptions />
        </header>
    );
}

export default Header;
