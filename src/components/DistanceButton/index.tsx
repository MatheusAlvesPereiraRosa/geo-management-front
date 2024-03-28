import { GiPathDistance } from "react-icons/gi";

import {motion} from 'framer-motion'

interface Props {
    distance: () => {}
    showModal: () => void
}

export const DistanceButton = ({distance, showModal}: Props) => (
    <div className="fixed
     bottom-24 right-4 z-10">
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} onClick={() => {distance(), showModal()}} className="p-5 bg-amber-600 aspect-square rounded-full">
            <GiPathDistance className="text-white" size={25} />
        </motion.button>
    </div>
)