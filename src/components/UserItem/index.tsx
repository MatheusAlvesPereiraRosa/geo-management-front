
/* Icons */
import { FaUserLarge, FaSquarePhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { GrWaypoint } from "react-icons/gr";

import { motion } from 'framer-motion'
import { useTranslation } from "react-i18next";

interface Props {
    name: string
    email: string
    phoneNumber: string
    coordinatesX: string
    coordinatesY: string
    index: number
}

export const UserItem = ({ name, email, phoneNumber, coordinatesX, coordinatesY, index }: Props) => {
    const {t} = useTranslation()

    return (
        <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3, delay: index * 0.25 }}
            className='flex bg-amber-600 rounded-md p-4 flex-col gap-4 shadow-card'
        >
            <div className="flex border-b-4 pb-2 border-white">
                <span className="icon me-2">
                    <FaUserLarge className="text-white" />
                </span>
                <h3 className='text-xl text-white'>{name}</h3>
            </div>

            <div>
                <div className="flex">
                    <span className="icon me-2">
                        <MdEmail className="text-xl text-white" />
                    </span>
                    <p className='text-md text-white'>{email}</p>
                </div>
                <div className="flex">
                    <span className="icon me-2">
                        <FaSquarePhoneFlip className="text-xl text-white" />
                    </span>
                    <p className='text-md text-white'>{phoneNumber}</p>
                </div>
                <div className="mt-3 flex flex-col">
                    <div className="flex">
                        <span className="icon me-2 text-white">
                            <GrWaypoint />
                        </span>
                        <h2 className="text-md text-white">{t('user-coords')}</h2>
                    </div>
                    <p className='text-md text-white'>X: {coordinatesX}</p>
                    <p className='text-md text-white'>Y: {coordinatesY}</p>
                </div>
            </div>
        </motion.div>
    )
}