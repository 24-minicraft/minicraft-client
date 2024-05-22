const StrawItem = () => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" fill="url(#pattern0_923_12)" />
            <defs>
                <pattern id="pattern0_923_12" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_923_12" transform="scale(0.00666667)" />
                </pattern>
                <image
                    id="image0_923_12"
                    width="150"
                    height="150"
                    xlinkHref="data:image/png;base64,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"
                />
            </defs>
        </svg>
    )
}

export default StrawItem
