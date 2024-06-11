import { IIconProps } from "@/types/common.type"

const LoadItem = ({ size = 32 }: IIconProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="256" height="256" fill="url(#pattern0_197_6)" />
            <defs>
                <pattern id="pattern0_197_6" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_197_6" transform="scale(0.0625)" />
                </pattern>
                <image
                    id="image0_197_6"
                    width="16"
                    height="16"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAArklEQVQ4Ec2RMQ6DMAxFuQdDdwaGjmVC6h2YmXqNXoFLcE3QU/UgQo4iNQtI0Xfs/39s0zSFb+67jVOgxWWEyzTUGayf1w0MHOOvXYztY/u+n3W7wIQuMCKOV37JQvRQ0qRo4H9P59ao2IH/XaJC8sTipdnzCgExeGZ/7ZPTIBzDFzDQRJF3OVkDiBRBduDmQfLWsgYKJKdIN2kn6YhH7AsYIRAdRcNDEAWSIoz4O7dHvQja3y0aAAAAAElFTkSuQmCC"
                />
            </defs>
        </svg>
    )
}

export default LoadItem
