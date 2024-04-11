interface IconProps {
    size?: number
}

const HealthIcon = ({ size = 16 }: IconProps) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <rect width="16" height="16" fill="url(#pattern0_251_38)" />
            <rect width="16" height="16" fill="url(#pattern1_251_38)" />
            <defs>
                <pattern id="pattern0_251_38" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_251_38" transform="scale(0.111111)" />
                </pattern>
                <pattern id="pattern1_251_38" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image1_251_38" transform="scale(0.111111)" />
                </pattern>
                <image
                    id="image0_251_38"
                    width="9"
                    height="9"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAM0lEQVR4XmNgQID/UIzOhoP/GhoaYIzOxlCADcMUYkiQrQinQmQFWBViUwADBBXAAIYCAEOqRbsmUy3lAAAAAElFTkSuQmCC"
                />
                <image
                    id="image1_251_38"
                    width="9"
                    height="9"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAOUlEQVR4XmNgIAX8Fxb+D8LobFQFJ06AJdAxqiIcGK5oNxZJEAaJwxVhU4ihAAZgCnEqgAGCCnABALrRSFdXao4/AAAAAElFTkSuQmCC"
                />
            </defs>
        </svg>
    )
}

export default HealthIcon
