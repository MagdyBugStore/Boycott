import { useState } from "react";
import { IoMdLink, IoIosArrowDown } from "react-icons/io";

const statusStyles = {
    1: { color: 'bg-green-500', textColor: 'text-green-500', text: 'متبرع لغزه' },
    2: { color: 'bg-yellow-500', textColor: 'text-yellow-500', text: 'داعِم' },
    3: { color: 'bg-gray-500', textColor: 'text-gray-500', text: 'محايد' },
    4: { color: 'bg-red-500', textColor: 'text-red-500', text: 'داعِم للاحتلال' },
    5: { color: 'bg-red-700', textColor: 'text-red-700', text: 'متبرع للاحتلال' },
};

const ProductCard = ({ data }) => {
    const [moreDetails, setMoreDetails] = useState(false);

    const status = statusStyles[data.status] || { color: 'bg-gray-500', textColor: 'text-gray-500', text: 'Unknown' };

    return (
        <div className="relative border p-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out aspect-square group">
            <div className="flex flex-col h-full gap-1">
                <div className={"w-full relative transition-all duration-300 ease-in-out overflow-hidden h-2/3"}>
                    <img
                        src={data.logo}
                        alt={data.name}
                        className="size-full object-contain rounded-md"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 rounded-md" />
                    <h2 className="absolute bottom-0 left-0 px-5 pb-4 font-bold text-lg text-white z-20" dir="ltr">
                        {data.name}
                    </h2>
                </div>
                <div className="flex-1 flex flex-col gap-2 mt-2">
                    <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${status.color}`} />
                        <span className={`${status.textColor}`}>{status.text}</span>
                    </div>
                    {data.resources.length > 0 && (
                        <div className="flex items-center gap-2">
                            <IoMdLink />
                            <ul className="list-disc list-inside ml-2 text-blue-600">
                                <a href={data.resources[0].link} className="hover:text-blue-800 no-underline">
                                    {data.resources[0].name}
                                </a>
                            </ul>
                        </div>
                    )}
                    {data.description && (
                        <p className={`transition-all duration-300 ${moreDetails ? 'h-auto opacity-100' : 'h-0 opacity-0'}`}>
                            {data.description}
                        </p>
                    )}
                    {data.status > 3 && (
                        <div className="flex gap-4 w-min">
                            <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-gray-600 transition-colors">
                                البدائل
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <button
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onClick={() => setMoreDetails(!moreDetails)}
            >
                <IoIosArrowDown size={24} />
            </button>
        </div>
    );
};

export default ProductCard;
