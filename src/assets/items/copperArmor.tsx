import { IIconProps } from "@/types/common.type"

const CopperArmorItem = ({ size = 32 }: IIconProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="256" height="256" fill="url(#pattern0_1266_179)" />
            <defs>
                <pattern id="pattern0_1266_179" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_1266_179" transform="scale(0.0625)" />
                </pattern>
                <image
                    id="image0_1266_179"
                    width="16"
                    height="16"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsSAAALEgHS3X78AAABEUlEQVQ4EcVRMU7DQBDcoBQuMSGFJVxD44pH5AMpkMM/qOiRqPgDuOYLSLwAK5L9Ahc+xyndBc9KczqfbZBo2MKrm52Zm1uL/HctECBJkpMfJM9znRGf4yxJ+HraStsepes62bx8Eh70Kc4ZGRTj/JZeD1LhdmAuhzqbADezruK4NxHZZaJPg/hyvdZ05LBbg7IsZHWxUmIYnuv84yHW7pqbupbm0FAv+gRjjKSvhQ6CINCoYEDoioFBDC40qMGmoyg67Z/vdOALFew/t4/vUlWV1dklkjAnxBzx/RoZgPCTya8GU7dANIfbv0Bnd8PE2KdmdhkkYZHZ/Y3+UmLo3L67QOAjA4AwQffLF/vzP52/AStbhYVoT/dAAAAAAElFTkSuQmCC"
                />
            </defs>
        </svg>
    )
}

export default CopperArmorItem
