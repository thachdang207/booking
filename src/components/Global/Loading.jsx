import React, {useEffect} from "react";

export const Loading = () => {
    useEffect(() => {
        document.title = `Loading...`
    })
    return (
        <div>
            <div className="absolute top-0 right-0 h-full w-full z-50 flex justify-center items-center">
                <div className="animate-spin rounded-full h-40 w-40 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        </div>
        
    );
}