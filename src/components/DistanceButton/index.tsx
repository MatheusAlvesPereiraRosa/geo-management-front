import { GiPathDistance } from "react-icons/gi";

import { motion } from 'framer-motion'

import { useDispatch } from "react-redux"
import { fetchPath } from "../../redux/user/userSlice"

import { User } from "../../interfaces";

interface Props {
    users: User[]
    showModal: () => void
}

export const DistanceButton = ({ showModal, users }: Props) => {
    const dispatch = useDispatch()

    return (
        <div className="fixed bottom-24 right-4 z-10">
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }} onClick={() => { dispatch(fetchPath(users)), showModal() }} className="p-5 bg-amber-600 aspect-square rounded-full">
                <GiPathDistance className="text-white" size={25} />
            </motion.button>
        </div>
    )
}