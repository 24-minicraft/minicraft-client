interface IconProps {
    size?: number
}

const DefenseIcon = ({ size = 16 }: IconProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="16" height="16" fill="url(#pattern0_255_20)" />
            <defs>
                <pattern id="pattern0_255_20" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_255_20" transform="scale(0.111111)" />
                </pattern>
                <image
                    id="image0_255_20"
                    width="9"
                    height="9"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAQklEQVR4XmNggID/UIwMUMT+P3v+6f+OnUeQBTHEwBwYxsYHK8rMKkCRgGGQOJLpqLrRTaGBIpD96BhdEVghFgwGAGo7iuFeDB9sAAAAAElFTkSuQmCC"
                />
            </defs>
        </svg>
    )
}

export default DefenseIcon
