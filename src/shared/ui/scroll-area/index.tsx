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
import ScrollableAboutUsPage from 'src/pages-scrollable/about-us';
import ScrollablePrivateBuyPage from 'src/pages-scrollable/services/private';

export const ScrollArea: FC<ScrollerProps> = ({ children }) => {
    const bgSections = useRef();
    const onScroll = (e) => (state.top.current = e.target.scrollTop);
    const router = useRouter();
    useEffect(() => {
        onScroll({ target: bgSections.current });
    }, []);

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

    const resetScroll = () => {
        window.scrollTo(0, 0);
        state.top.current = 0;
    };

    useEffect(() => {
        resetScroll();
        console.log('route change to ' + router.asPath);
    }, [router.asPath]);

    return (
        <>
            <div className={styles.scrollArea} onScroll={onScroll}>
                {/*<ScrollableContent />*/}
                {router.asPath === '/' && (
                    <div className={styles.fadeIn}>
                        <ScrollableHomePage />
                    </div>
                )}
                {router.asPath === '/services/private' && (
                    <div className={styles.fadeIn}>
                        <ScrollablePrivateBuyPage />
                    </div>
                )}
                {router.asPath === '/services/mortgage' && (
                    <div className={styles.fadeIn}>
                        <ScrollableMortgagePage />
                    </div>
                )}
                {router.asPath === '/services/investments' && (
                    <div className={styles.fadeIn}>
                        <ScrollableInvestmentsPage />
                    </div>
                )}
                {router.asPath === '/about-us' && (
                    <div className={styles.fadeIn}>
                        <ScrollableAboutUsPage />
                    </div>
                )}
                {router.asPath === '/team' && (
                    <div className={styles.fadeIn}>
                        <ScrollableAboutUsPage />
                    </div>
                )}
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
