import React, { FC, useEffect, useRef, Suspense } from 'react';
import { Navigation } from '../navigation';
import { Footer } from '../footer';
import styles from 'src/styles/Layout.module.scss';
import { state } from 'src/features/threejs/lib';
import { Html, Scroll, ScrollControls, useScroll } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { StartPlane } from 'src/features/threejs/ui/start-plane';
import { ContentHome } from 'src/features/threejs/ui/content-home';
import { Diamonds } from 'src/features/threejs/ui/diamonds';

export const Layout: FC<LayoutProps> = ({ children }) => {
    // const scrollArea = useRef<any>();
    // const scroll = useScroll();
    //
    // const onScroll = (e: any) => {
    //     return e?.target && (state.top.current = e?.target.scrollTop || 0);
    // };
    // useEffect(() => {
    //     console.log(scroll);
    //     // onScroll({ target: scroll });
    // }, [scroll]);
    //
    // useEffect(() => {
    //     onScroll({ target: scrollArea.current });
    // }, []);

    // let SuspenseLayout: FC<any> = ({ props, children }) => (
    //     // <Suspense {...props} fallback={<p>Loading...</p>}>
    //         {children}
    //     // </Suspense>
    // );
    // if (typeof window !== 'undefined') {
    //     // eslint-disable-next-line react/display-name
    //     SuspenseLayout = ({ children }) => <>{children}</>;
    //     SuspenseLayout.displayName = 'SuspenseLayout';
    // }
    console.log(children);
    return (
        <div className={styles.layout}>
            <header>
                <Navigation />
            </header>
            <main>
                <Canvas
                    linear
                    dpr={[1, 2]}
                    orthographic
                    camera={{
                        zoom: state.zoom,
                        position: [0, 0, 500],
                    }}

                    // onScroll={onScroll}
                >
                    <Suspense fallback={<Html center>Loading...</Html>}>
                        <ScrollControls
                            eps={0.1}
                            // horizontal
                            damping={10}
                            pages={state.pages}
                            // distance={1}
                        >
                            <Scroll>
                                {children}
                                {/*<ContentHome />*/}
                                {/*<Diamonds />*/}
                                <StartPlane />
                            </Scroll>
                            <Scroll html>
                                <footer>
                                    <Footer />
                                </footer>
                            </Scroll>
                        </ScrollControls>
                    </Suspense>
                </Canvas>
                {/*<div*/}
                {/*    className={styles.scrollArea}*/}
                {/*    // ref={scrollArea}*/}
                {/*    // onScroll={onScroll}*/}
                {/*>*/}
                {/*{new Array(state.sections).fill(null).map((_, index) => (*/}
                {/*    <div*/}
                {/*        key={index}*/}
                {/*        id={'0' + index}*/}
                {/*        style={{*/}
                {/*            height: `calc(${*/}
                {/*                (state.pages / state.sections) * 100*/}
                {/*            }vh + 100px)`,*/}
                {/*        }}*/}
                {/*    />*/}
                {/*))}*/}
                {/*</div>*/}
            </main>
            {/*<footer>*/}
            {/*    <Footer />*/}
            {/*</footer>*/}
        </div>
    );
};
