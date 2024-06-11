import { IIconProps } from "@/types/common.type"

const StoneToolSetItem = ({ size = 32 }: IIconProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="256" height="256" fill="url(#pattern0_1266_177)" />
            <defs>
                <pattern id="pattern0_1266_177" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_1266_177" transform="scale(0.0625)" />
                </pattern>
                <image
                    id="image0_1266_177"
                    width="16"
                    height="16"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAJ1AAACdQF32cIiAAABVUlEQVQ4EaWSParCUBCFx2cEBS3SBHQx7sAd2Ke0cANuIWBj725cQMqAWEnAwp8oKtHv8EZEklf4Brzzd86ZuTea/dMaf/DLj14ltrL4JJaj0cgGg4E0jsejLZdL4jq8cH5ALsfjMRvoR0ztN3dcrX8nO6iqpt77Sp93dnKdF9cFytlsZr1eT+DtdmtRFNl+v1dOnbgoCut0OsJNp1N6DQREbrfbttls7Hq9ikR+Pp9tsVhYHMd2u91ERiQIAuv3+8bQH9AUsywTkQPy4XAQmRwRJrvRz/NcqQTCMNQEB0CGwGS3+XxuzWZT072GlwBBt9vV+r4qYF+fPmL3+51Q2/lVJdBqtdSAzP1oJklik8lEdcis7QbGryyB9XqtB2MLjMmQeUTMybwVlqap7XY7xa/POBwOBbxcLnY6nV6PBhkw74QnR3i1WiGgzyil5/HVH8nJX/sH+FKjZQ6+E8MAAAAASUVORK5CYII="
                />
            </defs>
        </svg>
    )
}

export default StoneToolSetItem
