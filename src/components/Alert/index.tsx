import { AnimatePresence, motion } from "framer-motion";

import { FaCheck } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

import { store } from "../../redux/store";
import { useState } from "react";

interface Props {
    msgBR?: string
    msgEN?: string
    errBR?: string
    errEN?: string
    type: string,
    alertShow: boolean
}

export const Alert = ({ type, alertShow, msgBR, msgEN, errBR, errEN }: Props) => {

    const [lang, setLang] = useState<string>(store.getState().language.lang)

    const getCurrentLanguage = () => store.getState().language.lang;

    store.subscribe(() => {
        const currentLanguage = getCurrentLanguage();
        setLang(currentLanguage)
    });

    console.log(lang)

    return (
        <AnimatePresence>
            {alertShow &&
                <motion.div
                    className={`flex absolute items-center p-3 ${type === "Sucess" ? "bg-green-700" : "bg-red-700"} border rounded-md border-white alert`}
                    initial={{ opacity: 0, x: 0}}
                    animate={{ opacity: 1, x: -5 }}
                    exit={{ opacity: 0, x: 0}}
                    transition={{ duration: 0.3 }}
                >
                    <div className="alert-message">
                        {lang === 'pt' && msgBR &&
                            <p className="text-md text-white">{msgBR}</p>
                        }
                        {lang === 'pt' && errBR &&
                            <p className="text-md text-white">{errBR}</p>
                        }

                        {lang === 'en' && msgEN &&
                            <p className="text-md text-white">{msgEN}</p>
                        }
                        {lang === 'en' && errEN &&
                            <p className="text-md text-white">{errEN}</p>
                        }
                    </div>
                    <span className="ms-4 text-white">
                        {type === "Error" ?
                            <FaXmark size={16} />
                            :
                            <FaCheck size={16} />
                        }
                    </span>
                </motion.div>
            }
        </AnimatePresence>
    )
}