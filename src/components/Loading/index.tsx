import { motion } from 'framer-motion';

import "./index.css"

export const Loading = () => (
    
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="loader-container"
        >
            <div className="smooth-loader" />
        </motion.div>
    
);
