import { IIconProps } from "@/types/common.type"

const wolfTalismanItem = ({ size = 32 }: IIconProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" fill="url(#pattern0_987_20)" />
            <defs>
                <pattern id="pattern0_987_20" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_987_20" transform="scale(0.0625)" />
                </pattern>
                <image
                    id="image0_987_20"
                    width="16"
                    height="16"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAXhJREFUOI3Fk79Lw0AcxT+xFSwILhUFqRVaYqk/l6CW6CAugkPBQAuii4PdXUr/DDcHHQTBVRDcFKGo0KWIdggR6SDI2aUgCNVyDnIxaZvZBwf3vnzfu/e9S+C/oQH0h0MA7GYSEiA9HGH//FHz1o5unzWv8Ou77TfYzSTkw2sTgNmxIdLDEc6qb64gPz/qmnoNACis6DKTGJH94RBqFVZ0ebA5J4O4Qp/aVOoNX8SH1ya198/AEXwGKnonWjGDVsxweXVgmu1cXnp7wj2VQGpxjfVsVlEJ+Pjx6anmGlTqDc2IR6Uaw4hHJYBt2z7TTt6VQAkVdF0HwDRNAIQQADzXam5Pz0tUe9u2sSwLIQRCCCzL6krhS9D5EqVSiWQyyV5+C4BksYjjOKwuL7s9vi/Ri+1cXqYmEvAR4vDiBIC9jR0YbHN5c8V1ufx3iUF4enKYik/+Cj21wBG8eKnXGY+Ou6crmDMLPh44AoC5uCR71cv3d5r6F34AnQuNx5+G8aoAAAAASUVORK5CYII="
                />
            </defs>
        </svg>
    )
}

export default wolfTalismanItem
