interface IconProps {
    size?: number
}

const CollectionIcon = ({ size = 16 }: IconProps) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <rect width="16" height="16" transform="translate(0.75)" fill="url(#pattern0_255_40)" />
            <defs>
                <pattern id="pattern0_255_40" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_255_40" transform="scale(0.0555556)" />
                </pattern>
                <image
                    id="image0_255_40"
                    width="18"
                    height="18"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAAIVBMVEUAAADq6urCwsKtUk1jYmKLODNQUFBmJSFNFxM7DQokCAUELoaMAAAAAXRSTlMAQObYZgAAAHxJREFUeNpjwA7Y2FwyOmCc1vAGBgYmJkXBjunGFSABrtbwzuBQoCDD0smmlaXhINbiqaYV0ysmgGQjQ8NndDIwJKR4RZZWdE5gAIHlIDkIa0Z5JYipIKBYWR5ayQACXJWtppEQVvvMzplAaTYWtxWlpuETIIKrVq1CchwAXmAjnjA2VFIAAAAASUVORK5CYII="
                />
            </defs>
        </svg>
    )
}

export default CollectionIcon
