import { IconProps } from "@/type/common.type"

const BattleIcon = ({ size = 16 }: IconProps) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <rect width="16" height="16" transform="translate(0.25)" fill="url(#pattern0_255_42)" />
            <defs>
                <pattern id="pattern0_255_42" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_255_42" transform="scale(0.0555556)" />
                </pattern>
                <image
                    id="image0_255_42"
                    width="18"
                    height="18"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAAJFBMVEUAAAD////Y2Ni+vr6WlpZra2uJZydoTh5ERERJNhUoHgsYGBhoYGhkAAAAAXRSTlMAQObYZgAAAGNJREFUeNpjAAMmBhhgZOhogLI4lDZAWIZGRmAWk6CQoBADBBgqQyU5FK3BVANDk+EGMCuCQ1mZAQxaNjltgLJctRkYGCDSG6Cs6Tu6IQzOLO4dEK3tCxi4IaxoBijg3s2ADgAZwhJ06ItXtgAAAABJRU5ErkJggg=="
                />
            </defs>
        </svg>
    )
}

export default BattleIcon
