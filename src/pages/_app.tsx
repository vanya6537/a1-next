/*
 * Copyright (c) 2022 (original work) Ivan Katkov <vanya6537@gmail.com>;
 */
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import React, { Suspense } from 'react';
import 'src/styles/globals.scss';
import { Layout } from 'src/shared/ui/layout';
import { ScrollArea } from 'src/shared/ui/scroll-area';
import { CustomCanvas } from 'src/features/threejs/ui/canvas';
import { Diamonds } from 'src/features/threejs/ui/diamonds';
import { StartPlane } from 'src/features/threejs/ui/start-plane';

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
                <CustomCanvas>
                    <Suspense fallback={null}>
                        <Component {...pageProps} canonical={url} key={url} />
                    </Suspense>
                    <Diamonds />
                    <StartPlane />
                </CustomCanvas>
                <ScrollArea />
            </Layout>
        </>
    );
}

export default MyApp;
