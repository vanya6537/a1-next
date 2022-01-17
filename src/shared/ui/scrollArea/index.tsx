/*
 * Copyright (c) 2022 (original work) Ivan Katkov <vanya6537@gmail.com>;
 */

import styles from 'src/styles/ScrollArea.module.scss';
import React, { FC, useEffect, useRef } from 'react';
import { state } from 'src/features/threejs/lib';
import { useRouter } from 'next/router';
import ScrollableHomePage from 'src/pages-scrollable';
import ScrollableInvestmentsPage from 'src/pages-scrollable/services/investments';
import ScrollableMortgagePage from 'src/pages-scrollable/services/mortgage';
import { AnimatePresence } from 'framer-motion';
import ScrollableAboutUsPage from 'src/pages-scrollable/about-us';
import { AnimatedLayout } from 'src/shared/ui/animated-layout';
import ScrollablePrivateBuyPage from 'src/pages-scrollable/services/private';

export const ScrollArea: FC<ScrollerProps> = ({ children }) => {
    const bgSections = useRef();
    const onScroll = (e) => (state.top.current = e.target.scrollTop);
    const router = useRouter();
    useEffect(() => void onScroll({ target: bgSections.current }), []);

    let ScrollableContent;

    switch (router.asPath) {
        case '/services/mortgage':
            ScrollableContent = ScrollableMortgagePage;
            break;
        case '/services/investments':
            ScrollableContent = ScrollableInvestmentsPage;
            break;
        default:
            ScrollableContent = ScrollableHomePage({ onScroll });
    }
    return (
        <>
            <div className={styles.scrollArea} onScroll={onScroll}>
                <AnimatePresence
                    exitBeforeEnter
                    onExitComplete={() => window.scrollTo(0, 0)}
                >
                    {/*<ScrollableContent />*/}
                    {router.route === '/' && (
                        <AnimatedLayout>
                            <ScrollableHomePage />
                        </AnimatedLayout>
                    )}
                    {router.route === '/services/private' && (
                        <AnimatedLayout>
                            <ScrollablePrivateBuyPage />
                        </AnimatedLayout>
                    )}
                    {router.route === '/services/mortgage' && (
                        <AnimatedLayout>
                            <ScrollableMortgagePage />
                        </AnimatedLayout>
                    )}
                    {router.route === '/services/investments' && (
                        <AnimatedLayout>
                            <ScrollableInvestmentsPage />
                        </AnimatedLayout>
                    )}
                    {router.route === '/about-us' && (
                        <AnimatedLayout>
                            <ScrollableAboutUsPage />
                        </AnimatedLayout>
                    )}
                    {router.route === '/team' && (
                        <AnimatedLayout>
                            <ScrollableAboutUsPage />
                        </AnimatedLayout>
                    )}
                </AnimatePresence>
                {new Array(state.sections).fill(null).map((_, index) => (
                    <div
                        key={index}
                        id={'0' + index}
                        style={{
                            height: `${(state.pages / state.sections) * 100}vh`,
                        }}
                    />
                ))}
            </div>
            <div ref={bgSections} onScroll={onScroll}>
                {children}
            </div>
        </>
    );
};
