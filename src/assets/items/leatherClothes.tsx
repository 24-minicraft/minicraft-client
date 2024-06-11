import { IIconProps } from "@/types/common.type"

const LeatherClothesItem = ({ size = 32 }: IIconProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="256" height="256" fill="url(#pattern0_1266_184)" />
            <defs>
                <pattern id="pattern0_1266_184" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_1266_184" transform="scale(0.00625)" />
                </pattern>
                <image
                    id="image0_1266_184"
                    width="160"
                    height="160"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAAIPUlEQVR4Ae2dMZLcNhBF9wIOFTpQ4syOlOkAduwD+Aw+gy8+rtlAYmm2iQfO5wCEnqu2agz2oLtfvwWpsXb99uY/EpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACyxL48vnTbYWv2Qe0AuN7D3HOgokj/XBDOX+I5e1NMAWY8LKcC6CCKcCEl+VcABVMASa8LOcCqGAKMOFlORdABVOACS/LuQAqmAJMeFnOBVDBFGDCy3IugAqmABNelnMBlIL57+8vt+TXv3/+fiNftL6ivWmWaR9Jxve9CON7DK0vDpQm/unAhEnLuQAqmAJMeFnOBVDBFGDCy3IugAqmABNelnMBVDAFmPCynAugginAhJflXAAVTAEmvCznAqhgCjDhZTkXQAVTgAkvy7kAmgZDP3mncf98/e1GvmgfBYbDyzQv6eEeQz/wp/xoHO3jMKjqjTTxKDB0cLSPisPRdZqX9jGKM+3jKKfyfTTxKDB0cLSPEsTBCzQv7WMUZ9rHQUz122jiUWDo4GgfNYljV2he2scozrSPY5R23kUTjwJDB0f72EFx6BLNS/sYxZn2cQjS3pto4lFg6OBoH3ssjlyjeWkfozjTPo4w2n0PTTwKDB0c7WMXxoGLNC/tYxRn2scBRPtvoYlHgaGDo33s0+i/SvPSPkZxpn30E2q8gyYeBYYOjvbRwNF9mealfYziTPvoBtR6A008CgwdHO2jxaP3Os1L+xjFmfbRy6cZTxPTT9TTcXQgdMC0XxpH86a5pPej/TaF6g2gidMN0/0UkP3wFuVZxVEPev1qxtPEVeFnryugAr7/yN7ZolX7K6ACKuDOb5H1GbB5k90P8Bb83K8oVsB9v5pXFVAB748/1IOmUL0BNHH1jHb2us+APgP6DOgz4LcTsveAa8Z7AnoLvsQt+K8/fr2Rr/RDOb0F0zhaH93v7EeQan/aB5nZPYYeRM0TrTeAJqaNUDAV2B/XqQg0jtZH9/ux3lf9O+2Dzo160OtXM54mpo1QMHRQVAQaR+uj+9E+0nG0Dzo36kFTqN4Ampg2QsHQgVARaBytj+5H+0jH0T7o3KgHvX4142li2ggFQwdCRaBxtD66H+0jHUf7oHOjHjSF6g2giWkjFAwdCBWBxtH66H60j3Qc7YPOjXrQ61czniamjVAwdCBUBBpH66P70T7ScbQPOjfqQVOo3gCamDZCwdCBUBFoHK2P7kf7SMfRPujcqAe9fjXjaWLaCAVDB0JFoHG0Prof7SMdR/ugc6MeNIXqDaCJaSMUDB0IFYHG0frofrSPdBztg86NetDrVzP+86dfbskv2jAdcDqODi4tTHo/yjk52/teTaF6A9IFUjBpseh+CvjcgdPrVzNeAT/+/YPpEyu9H/1GT8+3KVRvQLpACoaeWOk4T0BPwPe/VZMWi+6ngAqogPB/1Lh326Z3mvQdrvcO24xPF0jB0BMrHecJ6AnoCegJ+P1g9AT0T8E9Dnw3J/SqJzmJ9Rb8mp9io5zJzHpiQtqdtw1tJv1st/fAvr1GBzf7syLlfN6kJ92ZglHA505KynlSTc4ri4JRQAU8xUIFfE6s7ePC3mvK+ZQhz7wpBeMJ+JyolPPMrpxSGwWjgAqogDu/7cE/BZ+ix/mbegI+d7LtPfdtr1HO5098sgwUjLfg50SlnCfT4/xyKBgFVMBTbKQCbm8ne6+pqHt7bK/N/mxH66OcTxnyzJtSMFsp9l4r4Md/WYJyntmVU2qjYPak215TQAXsElUBn3u28xbcpdtjsAIq4KMVL1xRQAV8oW6PqRRQAR+teOGKAirgC3V7TKWACvhoxQtXFFABX6jbY6q0gNvPBBOvZ/+ZED+GeXSqa0UBPQG7hEkHK6ACpp3q2k8BFbBLmHSwAipg2qmu/RRQAbuESQcroAKmneraTwEVsEuYdLACKmDaqa79FFABu4RJB1MB6Sf+if/6sd1j9ry0Pso5Pd/p96NgKOitPInXs+el9VHO0wuTLpCCoaAT0m33mD0vrY9yTs93+v0oGAp6K0/i9ex5aX2U8/TCpAukYCjohHTbPWbPS+ujnNPznX4/CoaC3sqTeD17Xlof5Ty9MOkCKRgKOiHddo/Z89L6KOf0fKffj4KhoLfyJF7PnpfWRzlPL0y6QAqGgk5It91j9ry0Pso5Pd/p96NgKOitPInXs+el9VHO0wuTLpCCSf9sBh3cqLzp+ijn9Hyn34+CGSXCqLwK+CJ1FfDj32algAp4u0vgCfgiEUal8QT0BBzl3nteBVRABfxaS+AteKge5yf3BKzlJ38Qod8glPP5E58sAwVDQZOh9cSMyktrpPVRzpPpcX45FAwFTQdH40blTddHOZ8/8YtmoADTwqT3UywFfP9sLy0C3Y/GUfHpN+ZFxz5P2RQ0HVxaBLofjaN9UC7zTPKilVDQdHBpEeh+NI72QblcdOzzlE1B08GlRaD70TjaB+UyzyQvWgkFTQeXFoHuR+NoH5TLRcc+T9kUNB1cWgS6H42jfVAu80zyopVQ0HRwaRHofjSO9kG5XHTs85RNQdPBpUWg+9E42gflMs8kL1oJBU0HlxaB7kfjaB+Uy0XHfr2y6UBWibvehBaveBWxaB+Lj/N67dHBrRJ3vQktXvEqYtE+Fh/n9dqjg1sl7noTWrziVcSifSw+zuu1Rwe3Stz1JrR4xauIRftYfJzXa48ObpW4601o8YpXEYv2sfg4bU8CEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJLEDgf8X71pSPJAyvAAAAAElFTkSuQmCC"
                />
            </defs>
        </svg>
    )
}

export default LeatherClothesItem
