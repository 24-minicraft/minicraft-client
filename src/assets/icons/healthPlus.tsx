import { IconProps } from "@/type/common.type"

const HealthPlusIcon = ({ size = 16 }: IconProps) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <rect width="16" height="16" fill="url(#pattern0_255_34)" />
            <defs>
                <pattern id="pattern0_255_34" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_255_34" transform="translate(-0.142857 -0.214286) scale(0.0714286)" />
                </pattern>
                <image
                    id="image0_255_34"
                    width="18"
                    height="18"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAAIVBMVEX///9tCwhdBwQAAAD/////gYHGIjv/BgahDgpsEAw7BAK40uSBAAAABHRSTlMAAAAAs5NmmgAAAElJREFUeNpjMIYBBuJZBpwTVjFAWNOzMhaAWZal5WldEFZ5eVoWhJVeBhVbtSINos5qyaq2LgYwy8VrxiIGqJgUAwNE3WIiXAAAhp8qWKbtv2MAAAAASUVORK5CYII="
                />
            </defs>
        </svg>
    )
}

export default HealthPlusIcon
