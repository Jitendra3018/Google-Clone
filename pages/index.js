import Head from "next/head";
import Avatar from "../components/Avatar";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
    const searchInputRef = useRef(null);
    const router = useRouter();

    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;
        // console.log(term);

        if (!term) {
            return;
        }

        router.push(`/search?term=${term}`)
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Head>
                <title>Google Clone</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Header */}
            <header className="flex w-full p-5 justify-between text-md text-gray-700">
                {/* Left */}
                <div className="flex space-x-4 items-center">
                    <p className="link">About</p>
                    <p className="link">Store</p>
                </div>

                {/* Right */}
                <div className="flex space-x-4 items-center">
                    <p className="link">Gmail</p>
                    <p className="link">Images</p>

                    {/* Icon */}
                    <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

                    {/* Avatar */}
                    <Avatar url="/image.jpg" />
                </div>
            </header>

            {/* Body */}
            <form className="flex flex-col items-center flex-grow mt-44 w-4/5">
                <Image
                    src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    width={300}
                    height={100}
                />
                <div className="flex w-full mt-5 hover:shadow-xl focus-within:shadow-xl max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
                    <SearchIcon className="h-5 mr-3 text-gray-500 cursor-pointer" />
                    <input
                        ref={searchInputRef}
                        type="text"
                        className="outline-none flex-grow"
                    />
                    <MicrophoneIcon className="h-5 text-gray-500 cursor-pointer" />
                </div>
                <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
                    <button onClick={search} className="btn">
                        Google Search
                    </button>
                    <button onClick={search} className="btn">
                        I'm feeling lucky!
                    </button>
                </div>
            </form>

            {/* Footer */}
            <Footer />
        </div>
    );
}
