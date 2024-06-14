import { IIconProps } from "@/types/common.type"

const IronIngotItem = ({ size = 32 }: IIconProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" fill="url(#pattern0_1323_178)" />
            <defs>
                <pattern id="pattern0_1323_178" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_1323_178" transform="scale(0.00625)" />
                </pattern>
                <image
                    id="image0_1323_178"
                    width="160"
                    height="160"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAoKADAAQAAAABAAAAoAAAAACn7BmJAAAEyklEQVR4Ae3dsU0cYRQE4MOiAAJqgJSIImiAjI6gADIug5QSyCAhQyCREtMBboBgnvUet3g/h9Ywt/vtaAN+nb3Z+EOAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIPDbBPZ+2wX/79d7cXHx1XmP2+120c/4T+fN6iJQFTDAqph8q4ABtnIqqwoYYFVMvlXAAFs5lVUFDLAqJt8qYICtnMqqAgZYFZNvFTDAVk5lVYH96g+sJd99IpG6nZ2dpdEod3h4GJ2sXF1d7eTExBsweoxCUwIGOCWrNxIwwIhJaErAAKdk9UYCBhgxCU0JGOCUrN5IwAAjJqEpAQOcktUbCRhgxCQ0JbCT335XbmbpJxInJyeV2/nx7PPzc/SZj4+PUa77xMQbMGIXmhIwwClZvZGAAUZMQlMCBjglqzcSMMCISWhKwACnZPVGAgYYMQlNCRjglKzeSMAAIyahKYH4JMSJxNQjWEbvrk5MvAGX8fxXexUGuNpHv4wbN8BlPIfVXoUBrvbRL+PGDXAZz2G1V2GAq330y7hxA1zGc1jtVRjgah/9Mm7cAJfxHFZ7FfvpCcfNzU2E9Pr6GuWEfkbg+Pg4+qA0V/gOTPSvcnkDRo9HaErAAKdk9UYCBhgxCU0JGOCUrN5IwAAjJqEpAQOcktUbCRhgxCQ0JWCAU7J6IwEDjJiEpgTi/yfk9vY2uobz8/Mot7YTk/SkIcIrhFLn6+vrqPX09DTKPTw8RDlvwIhJaErAAKdk9UYCBhgxCU0JGOCUrN5IwAAjJqEpAQOcktUbCRhgxCQ0JWCAU7J6IwEDjJiEpgTik5D0ApZ+YrL0E4m7u7uI+vPzM8qloYODgzTamvMGbOVUVhUwwKqYfKuAAbZyKqsKGGBVTL5VwABbOZVVBQywKibfKmCArZzKqgIGWBWTbxUwwFZOZVWB9pOQ9AK6T0zSz02/I7GrE4n0PtJc+h2OtK875w3YLaqvJGCAJS7hbgED7BbVVxIwwBKXcLeAAXaL6isJGGCJS7hbwAC7RfWVBAywxCXcLWCA3aL6SgLxScjb21tUfHR0FOXSkJOLVOr7XPrc7u/vvy/4x799enraS37UGzBRkhkTMMAxWsWJgAEmSjJjAgY4Rqs4ETDARElmTMAAx2gVJwIGmCjJjAkY4Bit4kTAABMlmTGB/e12G/3GOv2f1dMr7T4xST+3O9f9r0pdXl52X2LUl55cRGWFkDdgAUu0X8AA+001FgQMsIAl2i9ggP2mGgsCBljAEu0XMMB+U40FAQMsYIn2Cxhgv6nGgoABFrBE+wXi74Ts6sSk+5Y/Pj6iyvf39yjXHdrViUT3faR93oCplNyIgAGOsCpNBQwwlZIbETDAEValqYABplJyIwIGOMKqNBUwwFRKbkTAAEdYlaYCBphKyY0IRN8Hmfjk7u+YvLy8tF7m2k4kWvEKZd6ABSzRfgED7DfVWBAwwAKWaL+AAfabaiwIGGABS7RfwAD7TTUWBAywgCXaL2CA/aYaCwIGWMASJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgs/kL1zZ6/OT4px4AAAAASUVORK5CYII="
                />
            </defs>
        </svg>
    )
}

export default IronIngotItem
