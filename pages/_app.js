import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { Provider } from "next-auth/client";
import Router from "next/router";

import ProgessBar from "@badrap/bar-of-progress";

const progress = new ProgessBar({
    size: 4,
    color: "#43A6C6",
    className: "z-50",
    delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
    return (
        <Provider session={pageProps.session}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
