import { IIconProps } from "@/types/common.type"

const WoolToolSetItem = ({ size = 32 }: IIconProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="256" height="256" fill="url(#pattern0_1266_178)" />
            <defs>
                <pattern id="pattern0_1266_178" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_1266_178" transform="scale(0.0625)" />
                </pattern>
                <image
                    id="image0_1266_178"
                    width="16"
                    height="16"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAJ1AAACdQF32cIiAAABXElEQVQ4EaVSO07DQBB9gdiJg2UQHICKAyAaDsABaHIAJCRaKu4AFRJtJA6QhjvQ0NEipYqESGUQlsF2LGP2zWaCYxyKMJJ3d+a9N59dA/+01h/6soY1chuDRljeHq/DdwrEud37Q0m3jL9Qi+Jy2Ac7kK/mL5CbHEkwEyveFBOs2lJ9ZhUv20WrCdgyivYGkiSV2atnZuBd0DyvK5yTu4JuiwnkwghMogLTLEWSG6JDHLh63MHFfmid2ep2uthycjDJGmMqfo9TEKyKiV8/cLVGnLzxm3RgE7BtBilkBzQSWdnNQkxiYDDekzh5m/5PkXkHWlXFTETR2YHocLo7kgPFxJ6zQHxJ8PTyIRUt1XZBMUUUXB4p8ntvM8TqOgJ9znx+OJLLTPIU4VcAv4zwmpjRei6mnxwzIhXzZ2Srbi8woAX0vO1BhMI2C+O0m3vhyTNKwCwr/UgqXnn/Bmv9l/USPtT/AAAAAElFTkSuQmCC"
                />
            </defs>
        </svg>
    )
}

export default WoolToolSetItem
