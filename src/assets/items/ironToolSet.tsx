import { IIconProps } from "@/types/common.type"

const IronToolSetItem = ({ size = 32 }: IIconProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="256" height="256" fill="url(#pattern0_1266_182)" />
            <defs>
                <pattern id="pattern0_1266_182" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_1266_182" transform="scale(0.0625)" />
                </pattern>
                <image
                    id="image0_1266_182"
                    width="16"
                    height="16"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAJ1AAACdQF32cIiAAABY0lEQVQ4EaWSPY7CQAyFTfgvEIKCJlLOwGkQEl0OEYmLUNLRUHMKLkCFRJkigiZBQpBk+d5qVlmItmAtTWb8/J7tGcfsn9b4Q1++xGq5teBTWK5WKxsOh8pxu90sDEPOb3xPjN8fiXu9ni0WCy3CJHzaa1dgb1au12uIVXIdJmG1pargLWsNIK1LUO52O+t2u+KNRiPr9/t2v9/lt9ttGwwGlue5NZtNLd/3iTVIIDGky+UiEhF8EvAOm83GiqIQFgSBTSYTS9PUptOp6REPh4MlSYJOhpiXR4yxg2HH49HO57Pi+ErQ6XRUAQBDjIDKzubzuXmep3U6nRz8nQCP+3NH1ypk1z5xdw3OFICHqQPIGCBnEs1mM9tut8IRuysAwNnv94pJmWWZHsxNgcqIq1OA7fw4ju16vSrBzxijKNJ4qP54PKzVaonA2GiZ5Oz44/HYlsslcY1RxOfnox/JiT/evwAQU5+tddJLjQAAAABJRU5ErkJggg=="
                />
            </defs>
        </svg>
    )
}

export default IronToolSetItem
