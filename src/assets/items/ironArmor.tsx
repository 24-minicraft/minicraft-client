import { IIconProps } from "@/types/common.type"

const IronArmorItem = ({ size = 32 }: IIconProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="256" height="256" fill="url(#pattern0_1266_180)" />
            <defs>
                <pattern id="pattern0_1266_180" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_1266_180" transform="scale(0.0625)" />
                </pattern>
                <image
                    id="image0_1266_180"
                    width="16"
                    height="16"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAjElEQVQ4jc2R0QnAIAxEu4ZDOJn7OJIzuI3lfVxJa1LSvwYOjLl7SDyOX1StdT31yUNDzTnXGCMEhB4aDVDv/WbgzJ31bAANEEZBFLZzF9Bau4x6qmSDePDeAKWUhRhEQQmP/NtvcPkWRm7QArQDL8zzU4BIKYC3cYVTAP2GJy0wBLxBUmEL8ZQKf60THqBitQbYAN8AAAAASUVORK5CYII="
                />
            </defs>
        </svg>
    )
}

export default IronArmorItem
