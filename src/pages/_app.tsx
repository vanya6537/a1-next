import type { AppProps, NextWebVitalsMetric } from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import 'src/styles/globals.scss';
import { Footer, Navigation } from 'src/shared/ui';
import { Layout } from 'src/shared/ui/layout';

declare const window: any;

export function reportWebVitals({
    id,
    name,
    label,
    value,
}: NextWebVitalsMetric): void {
    window.gtag('event', name, {
        event_category:
            label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
        value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
        event_label: id, // id unique to current page load
        non_interaction: true, // avoids affecting bounce rate.
    });
}

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
    const url = `https://localost:3000/${router.route}`;

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" type="image/ico" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
            </Head>
            <DefaultSeo
                titleTemplate="%s - a1group"
                openGraph={{
                    type: 'website',
                    locale: 'ru_RU',
                    url,
                    description:
                        'Вебсайт компании a1group. Купля продажа недвижимости',
                    site_name: 'A1 Group',
                    images: [],
                }}
                canonical={url}
            />
            <Layout>
                {/*<AnimatePresence*/}
                {/*    exitBeforeEnter*/}
                {/*    initial={false}*/}
                {/*    onExitComplete={() => window.scrollTo(0, 0)}*/}
                {/*>*/}
                <Component {...pageProps} canonical={url} key={url} />
                {/*</AnimatePresence>*/}
            </Layout>
        </>
    );
}

export default MyApp;
