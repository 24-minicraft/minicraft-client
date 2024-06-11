import { IIconProps } from "@/types/common.type"

const StoneItem = ({ size = 32 }: IIconProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="256" height="256" fill="url(#pattern0_159_11)" />
            <defs>
                <pattern id="pattern0_159_11" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_159_11" transform="scale(0.00333333)" />
                </pattern>
                <image
                    id="image0_159_11"
                    width="300"
                    height="300"
                    xlinkHref="data:image/png;base64,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"
                />
            </defs>
        </svg>
    )
}

export default StoneItem
