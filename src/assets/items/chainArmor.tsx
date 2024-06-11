import { IIconProps } from "@/types/common.type"

const ChainArmorItem = ({ size = 32 }: IIconProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="256" height="256" fill="url(#pattern0_1266_181)" />
            <defs>
                <pattern id="pattern0_1266_181" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_1266_181" transform="scale(0.0625)" />
                </pattern>
                <image
                    id="image0_1266_181"
                    width="16"
                    height="16"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAj0lEQVQ4jc2R0Q3AIAhEXcMhnMx9HMkZ3IbmmlxDEYv+lYRQ4d6JaUq/iFKK2DzS4IAYY0hrbWmw1ODAQe99EuAbPa2ZDDSsb7Ez74LboNb6CLgq08LQvgxyzoLEwIL2adBQP/0NNAl5MKoLagNCHowaGmBFC6GyHxrwnRrSdWsDmnj10yAyCWFt4uUWfBoXvcFSyOdFL1IAAAAASUVORK5CYII="
                />
            </defs>
        </svg>
    )
}

export default ChainArmorItem
