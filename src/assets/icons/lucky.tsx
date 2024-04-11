interface IconProps {
    size?: number
}

const LuckyIcon = ({ size = 16 }: IconProps) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <rect width="16" height="16" transform="translate(0.5)" fill="url(#pattern0_255_24)" />
            <defs>
                <pattern id="pattern0_255_24" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_255_24" transform="scale(0.00587695)" />
                </pattern>
                <image
                    id="image0_255_24"
                    width="180"
                    height="180"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAYAAAA9zQYyAAAJzElEQVR4Ae2dQY7jNhBFO2cIBllmmX1Ws8g66SPkRHO4XuVGDuQOZ9hQkfwtVlws+g1gSKAoFuvX47dkuT0vL8/276eX24vnS9XPM+YxFv9Q4K5AFFhRcSn75gpEgRUVd/Nykl4UWFFxqfjmCkSBFRV383KSXhRYUXGp+OYKRIEVFXfzcpJeFFhRcan45gpEgRUVd/Nykl4UWFFxqXhSBURgfvv2+83zpT519Ix5jKXGTVpNpq0WOAqsqLiQkVUBHNp27az1fPp5AzRAb7UIABqgAXr+BnH1a/etavxUyeDQOPRWwAM0QAM0lxxbMbBVMjg0Dp0CaGdQ/3h7vXm+1AcmnjGPsdS46k1rCha2mCRAmwsQoLPSDdAAnZVdc94ADdAmGFkbARqgs7JrzhugAdoEI2sjQAN0VnbNeQM0QJtgZG0EaIDOyq45b4AGaBOMrI1BQP/1z5835aU+AVTGOvqo4/FgBaDvj4tVYLwB9B4PoAEaoHvvdln5SDfvXhGqY6pj4dCNH3xPB0bWCVfQ9r45BtD2d7t7mn04lpWPdPMGaPNGUV3AH6DtaZkOjKwT7hWhOqYWmEsOLjlil0IFbc9tAJpLjlhQ1egAzSWHykqKfgAN0KGgigD2Lh8+HFOTEeOufmmizu+DRr3cnfVzj6vOL6xfT9wrx9RExLFVYKJuHtX5uYMl6uceV61vWL8oYcS4KjAA3fg0RNQ5jD/3wGrCaj91guJ4AN0QVNQPh54VqqH/qVmMA9An5d4bRP0Aelaohv6nZjEOQJ+UA+iGJLHCAPTcT4GJ+uHQs0J1V091UIyDQ1ea1buifgA9K1Qtem9fjAPQDRFF/QB6VqiG/qdmMQ5An5R7bxD12wdoMWEVGLWfu4DOeaifV++Sb1gejXV4vdkZhDBhnPMA6Kzf8nMGAaAfBMIudbtuxY0zdxHGOQ8c+kELs4Hl9WZnEHDoB4GwS92uk9s4cxdhnPPAoR+0MBtYXm92BgGHfhAIu9TtOrmNM3cRxjkPHPpBC7OB5fVmZxBw6AeBsEvdrpPbOHMXYZzzwKEftDAbWJ6bgwr8bCDs8sRz+bqpQquXCGrCaj81rprHeUU3WpwX+urzU+uh9gurmyq0OkE1YbWfGlfNo4HvuRmgzZ9PWL5uKggqWGrCaj81rprHmdxGC0AD9AGfCqraD6Afs+DUeqj9wuqmOps6QTVhtZ8aV82jgce5GYeeMqewuqkgqBNUQVX7qXHVPM7kNloAGqAP+FRQ1X4A/ZgFp9ZD7RdWN9XZ1AmqCav91LhqHg08zs049JQ5hdVNBUGdoAqq2k+Nq+ZxJrfRAtAAfcCngrr6f3P289cvN+X1y9+/3pSXMtbRR12Y6kLfpR4N2zGanZ1oFwFVABWYjz7qeADd+JFIA127CaBNV1QBBOhX811ZfQdRF7ANr9UK0AD99ir9N9A5/utmgAZogLa/A8tNYfsGUb2EUd+C1bf0Xe5prIsLuw2HxqFxaBy6OC43hdwU3u+K+Rza/pybSw4+trsvEPWaUgWmOPBoi0Ov5tD2lfW59cmutVVQ1YXkPd7z3eydkZxrAWjzETdA2/dT6jvhHJQzZwM0QL+93tQFDNBv9rVY1M2j9yWC93hccsy483EuDo1D49D29dXxtrW6w3g7qvd4q+unGuCsz14/H4fGoXFoHLrcROHQsw9MrnuxfSYOjUPj0Dg0Dt1w5mKQtn1OtJaBB9tSmNF2l5uV0SPvcly9lCj9R1v1ZmpUh3J8l3rohA9ALgIXgUbbXQQcgVeOA7T9/GDESTle+BpuZaIBmu9D833ovNfGQyf4b4EXBx5tcWgcmu9Dd37zQ11w5S17tN3lElC+4kBA+y585MzlOA6NQ+PQOPT3b+2phopDf7Ov81UBiwOPtjg0Do1D49A49OjmZnRzVI7j0LajRn3vXK3H8pccI0DL8QLiaOsujPPn86vPr+jttR3Vqxx310UdsExgtPUSpIwzileOq3nIKx2g5e+sl1rV21KX0da9buqAo4mV43VSHvtl3NFWzQOg7Ztlj1rVY4zqVY67100dsExgtK2T8tgfxSvH1TwAGqDv33Uo4Iy2HhDXY4zileMAbT8gKvqMtrXmHvujeOW4e93UAcsERlsPMeoxRvHKcTUPHBqHxqE7N4hlQY22qy+42kQ89kd6lOPuuqgDlgmMth5i1GOM4pXjah44NA6NQ+PQn/4IrxjNaOtuROqAo4mV47W7euyXcUdbNQ8ceneHVivccakaphF4nz1ej93dD8pDXbRq3t0c6xoE5RuWh5qv3K8Ws7OvJqz2W73AAG07vnvdZFDVjh2I68mroKr96rG7+0F5ADRAf//qoAJ1F+J6kQG0rUCtUWdfqcVn+rjXzc5uorUjRj35zySt9K3H7u6rqTnngUPj0Dh0469pjgXeXbT1YgxawIoJ/S95qPnK/WoxO/tqwmq/1QuMQ+PQODQO/eOdSHZU744dV65dVHVetV89dndfzdc5Dxwah8ahcegFHNrZAbtuW7uoc1z1nUF13m3+uLTW3GNfrdvy/TzEqMdQE67P6ewDdEPQjmay+dRjNMLka66T8thXFRBjAXRDUFE/Ge5GmHzNUcKIcQG6gZSoH0DPCtXQ/9QsxgHok3LvDaJ+AD0rVEP/U7MYB6BPygF0Q5JYYQD6x0dhtRbdYlUH63M89quhc+96iFGPoapRn9PZx6EbgnY0ky8z6jEaYfI110l57KsKiLEAuiGoqJ8MdyNMvuYoYcS4AN1AStTv+YBu6HW5WRR6dVC3eaJ4uZCc+K4AQJs/IaAuYBx1tYUE0AC9GpNT8wFogJ4CaLWTARqgV2Nyaj4ADdBTAK12MkAD9GpMTs0HoAF6CqDVTgZogF6Nyan5ADRATwG02slBQKt/U6g+4FDHU/upcXmwAtCmI7ZAU8FqnX+1XY0L0AAN0KsxsNV8uOQwFxgOnZVygAborOya8wZogDbByNoI0ACdlV1z3gAN0CYYWRsBGqCzsmvOG6AB2gRj90Zn8L0/FlPHU/vxwASg7z/EogKj9lPBUsdT+6lxdy/7vvnh0HO/nLQvGUkzA2iAToquPW2ABmibjKStAA3QSdG1pw3QAG2TkbQVoAE6Kbr2tAEaoG0ykrYCNEAnRXdu2iL47g8uouLOqcXZyysQBVZU3OULwgTnFIgCKyrunFqcvbwCUWBFxV2+IExwToEosKLizqnF2csrEAVWVNzlC8IE5xSIAisq7pxanL28AlFgRcVdviBMcE6BKLCi4s6pxdnLKxAFVlTc5QvCBFEABVAABVAABVAABVAABVAABVAABVAABVAABVAABVAABVAABVAABVBgVoF/AdCfvRL/skxiAAAAAElFTkSuQmCC"
                />
            </defs>
        </svg>
    )
}

export default LuckyIcon
