import { IIconProps } from "@/types/common.type"

const CopperToolSetItem = ({ size = 32 }: IIconProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="256" height="256" fill="url(#pattern0_1266_183)" />
            <defs>
                <pattern id="pattern0_1266_183" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_1266_183" transform="scale(0.0625)" />
                </pattern>
                <image
                    id="image0_1266_183"
                    width="16"
                    height="16"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAJ1AAACdQF32cIiAAABc0lEQVQ4EaVSu0oDURA9+wr7wICx9zMUC38g2NvZWAg2JhaWdmksBBuDhT8gfoONhWDlF8QyYNIEs4HNPq45E0eXsGsKB+7O65yZuXMX+KdYf/DNSq4SWxlcEM1T7whBEEiNLMuwf3FPuw4vOP2QbJ6vjjmBHNqMffuKq9VlsoKqYpIrj7R6ZyXXaeFqAfPW78DzPAGHYYhGo4E8z8V3HAe+76MoCti2LWez3WXOYgEhO66DWTwTEDMkscDe+R1erk9gjJFYa6uF5kYTSZJg+/ASNsHD4RDTzylNEZK5eZIp1IxRRh8jxHGMNE3FlwLszg4qJJPAziq7nf5iXkvOeDzW8HICeq7ryvg6KsE6PvN6DdpsoA1lAtsSJUESuayds1u83pwSL2S9An1iBu8DmssJuBAujFNQ2Jnk8iswrv5kMsE8mTP082uah24blm3BFEaA2pGxLM3geq5oPmMURTjoPQpf/wM6v1ukt17K3PXoOsQXkWOnRBNXKEkAAAAASUVORK5CYII="
                />
            </defs>
        </svg>
    )
}

export default CopperToolSetItem
