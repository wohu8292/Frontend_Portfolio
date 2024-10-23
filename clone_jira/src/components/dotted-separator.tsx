import {cn} from "@/lib/utils"
import React from 'react'

interface DottedSeparatorProps {
    className?: string
    color?: string
    height?: string
    dotSize?: string
    gapSize?: string
    direction?: "horizontal" | "vertical"
}


const DottedSeparator = ({
    className,
    color= "#d4d4d8",
    height= "2px",
    dotSize= "2px",
    gapSize= "6px",
    direction= "horizontal"
}:DottedSeparatorProps)=>{
    const isHorizontal= direction === "horizontal"

    return (
        <div className={cn(
            isHorizontal ? "w-full flex items-center" : "h-full flex flex-col items-center",
            className, 
        )}>
            <div
                className={isHorizontal? "flex-grow": "flex-grow-0"}
                style={{
                    width
                }}
            />
        </div>
    )
}

export default DottedSeparator