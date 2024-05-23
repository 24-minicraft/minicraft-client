import { IIconProps } from "@/types/common.type"

const StickItem = ({ size = 32 }: IIconProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" fill="url(#pattern0_923_9)" />
            <defs>
                <pattern id="pattern0_923_9" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_923_9" transform="scale(0.00625)" />
                </pattern>
                <image
                    id="image0_923_9"
                    width="160"
                    height="160"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAAD20lEQVR4Ae3cO26UQRCF0ckdkzrFK2APTtgGbIVVD5odXEu+qu7SQZqs1Y9TXwT6eTz8IUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEDgSoHPXz+eye/j/e2Z/K5EcOk5gSS+15okvteauZc4+UoBAV45tj2XFuCeWV75EgFeObY9lxbgnlle+RIBXjm2PZcW4J5ZXvkSAV45tj2XFuCeWR71kjSsf39+PpOfv4g+arznX0aA589o9Q0FuHq85z9OgOfPaPUNBbh6vOc/ToDnz2j1DQW4erznP06A589o9Q0FuHq85z9OgOfP6MobCuvKse25tAD3zPLKlwjwyrHtubQA98zyypcI8Mqx7bm0APfM8sqXCPDKse25tAD3zPLKlwjwyrHtubQA98zyqJekYf39/f5Mfr7hOGq8519GgOfPaPUNBbh6vOc/ToDnz2j1DQW4erznP06A589o9Q0FuHq85z9OgOfPaPUNBbh6vOc/ToDnz+jKG6ZhJf9D1WuNf+G4MoO5Swtwzt7Jj8dDgDIYFRDgKL/DBaiBUQEBjvI7XIAaGBUQ4Ci/wwWogVEBAY7y7z08DSv5fuO1xr9w7G2l8jIBVlhtmgoIMJWyriIgwAqrTVMBAaZS1lUEBFhhtWkqIMBUyrqKgAArrDZNBQSYSllXERBghdWmaVi+4dBKRUCAFVabpgICTKWsqwgIsMJq01RAgKmUdRUBAVZYbZoKCDCVsq4iIMAKq01TAQGmUtZVBARYYbVpGpZvOLRSERBghdWmqYAAUynrKgICrLDaNBUQYCplXUVAgBVWm6YCAkylrKsICLDCatNUQICplHUVAQFWWG2ahuUbDq1UBARYYbVpKiDAVMq6ioAAK6w2TQUEmEpZVxEQYIXVpqmAAFMp6yoCAqyw2jQVEGAqZV1FQIAVVpumYfmGQysVAQFWWG2aCggwlbKuIiDACqtNUwEBplLWVQQEWGG1aSogwFTKuoqAACusNk0FBJhKWVcREGCF1aZpWL7h0EpFQIAVVpumAgJMpayrCAiwwmrTVECAqZR1FQEBVlhtmgoIMJWyriIgwAqrTVMBAaZS1lUEBFhhtamwNDAqIMBRfocLUAOjAgIc5Xe4ADUwKiDAUX6HC1ADowICHOV3uAA1MCogwFF+h3+8vz2/80eUwJcEvjO+115fOtxiAgLUwKiAAEf5HS5ADYwKCHCU3+EC1MCogABH+R0uQA2MCghwlN/hBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECxwj8B0eoHcLyCVIWAAAAAElFTkSuQmCC"
                />
            </defs>
        </svg>
    )
}

export default StickItem
