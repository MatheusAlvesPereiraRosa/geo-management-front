import { Path } from "../../interfaces";

import { GrClose } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineLocationCity } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";
import { MdLinearScale } from "react-icons/md";
import { LiaMapSignsSolid } from "react-icons/lia";

interface Props {
    isShow: boolean
    path: Path
    closeModal: () => void
}

export const Modal = ({ isShow, closeModal, path }: Props) => {
    const finalPath = path.points.length - 1

    return (
        <div
            className={`fixed inset-0 overflow-y-auto ${isShow ? 'block' : 'hidden'}`}
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div className="flex items-center justify-center min-h-screen p-4">
                <div className="fixed inset-0 bg-gray-500 opacity-75 z-20" onClick={closeModal}></div>
                <div className="relative bg-amber-600 rounded-lg max-h-90 shadow-card p-6 z-20">
                    <div className="absolute top-0 right-0 p-2">
                        <button
                            onClick={closeModal}
                        >
                            <GrClose className="text-white" size={20} />
                        </button>
                    </div>

                    <h1 className="text-white text-xl">Rota mais rápida da firma entre <br /> os pontos voltando para o início</h1>

                    <div className="flex flex-col items-center mt-4 border-b-4 pb-2 border-white">
                        {path.points.map((point, index) => (
                            <div key={index}>
                                {index === finalPath || index === 0 ?
                                    <>
                                        <div className="flex">
                                            <span className="icon me-2">
                                                <MdOutlineLocationCity className="text-white" size={24} />
                                            </span>
                                            <p className="text-white">Firma - ({point.x}, {point.y})</p>
                                        </div>
                                        {index !== finalPath &&
                                            <div className="flex items-center justify-center">
                                                <FaArrowDown className="text-white my-1" size={16} />
                                            </div>
                                        }
                                    </>
                                    :
                                    <>
                                        <div className="flex">
                                            <span className="icon me-2">
                                                <IoLocationSharp className="text-white" size={24} />
                                            </span>
                                            <p className="text-white">Nome {index} - ({point.x}, {point.y})</p>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <FaArrowDown className="text-white my-1" size={16} />
                                        </div>
                                    </>
                                }
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-center mt-2">
                        <span className="me-2">
                            <LiaMapSignsSolid className="icon text-white " size={24}/>
                        </span>
                        <p className="text-white text-center">Path distance: {Math.floor(path.distance * 100) / 100}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};