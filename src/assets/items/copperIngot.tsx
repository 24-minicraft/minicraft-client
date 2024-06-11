import { IIconProps } from "@/types/common.type"

const CopperIngotItem = ({ size = 32 }: IIconProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="256" height="256" fill="url(#pattern0_166_13)" />
            <defs>
                <pattern id="pattern0_166_13" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_166_13" transform="scale(0.0625)" />
                </pattern>
                <image
                    id="image0_166_13"
                    width="16"
                    height="16"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAG1BMVEUAAAD7w7b8mYLnfFbBWjacTjGcRSmKQSltNCFALkIDAAAAAXRSTlMAQObYZgAAAF9JREFUeNpjwAHSIBRbmksBmJvsGmIO4jqbhDqbFDAkORu7hhgrmTMkK5u4GCm5RjAkOxkrKbuEAxkhQq4hruUeDMmhKqFAgQYGNlfVENeOBgYGhlRTjw6IuRkN2O0FAIf/FK7CRf/vAAAAAElFTkSuQmCC"
                />
            </defs>
        </svg>
    )
}

export default CopperIngotItem
