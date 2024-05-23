import { IIconProps } from "@/types/common.type"

const CoalItem = ({ size = 32 }: IIconProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="256" height="256" fill="url(#pattern0_159_12)" />
            <defs>
                <pattern id="pattern0_159_12" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_159_12" transform="scale(0.0625)" />
                </pattern>
                <image
                    id="image0_159_12"
                    width="16"
                    height="16"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAHlBMVEUAAAA5PkY2NjYyMjIuLi4lJSUmHiQcHB4fFyEQEBX7Xk+fAAAAAXRSTlMAQObYZgAAAF9JREFUeNpjwAbYywsgjBJjd4hAkHBoAZihamISDmakBQmZgoRKXVOVXC1BaoVDXMIiQSIurqFuaROAjNBUt4gIIKMiNS0tIwPI4OxIbcvoBOmf0dE5cwKIwTlzArLVAFPNF7pzfq2nAAAAAElFTkSuQmCC"
                />
            </defs>
        </svg>
    )
}

export default CoalItem
