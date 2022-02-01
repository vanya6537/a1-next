/*
 * Copyright (c) 2022 (original work) Ivan Katkov <vanya6537@gmail.com>;
 */
import { motion } from 'framer-motion';
import styles from 'src/styles/TriangleDivider.module.scss';
export const Divider = () => {
    return (
        <motion.div className={styles.divider}>
            <motion.svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
            >
                <path
                    d="M1200 0L0 0 892.25 114.72 1200 0z"
                    className={styles.fill}
                ></path>
            </motion.svg>
        </motion.div>
    );
};
