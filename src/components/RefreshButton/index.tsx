import { GrRefresh } from "react-icons/gr";

interface Props {
    refresh: () => {}
}

export const RefreshButton = ({refresh}: Props) => (
    <div className="fixed bottom-4 right-4 z-10">
        <button onClick={refresh} className="p-5 bg-amber-600 aspect-square rounded-full">
            <GrRefresh className="text-white" size={25} />
        </button>
    </div>
)