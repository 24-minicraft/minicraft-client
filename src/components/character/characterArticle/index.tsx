"use client"
import "./style.scss"
import { useEffect, useState } from "react"
import { ICharacterArticle } from "@/types/character.type"
import { BattleIcon, CollectionIcon, DefenseIcon, HealthIcon, HealthPlusIcon, LuckyIcon } from "@/assets/icons"
import { userImage } from "@/libs/constant/userImage"
import { useWorkEnd, useWorkStart } from "@/apis/works"
import { useNavigate, useSearchParams } from "react-router-dom"

interface ICharacterArticleProps {
    data: ICharacterArticle
    idx: number
}

const heartRecoveryTime = 36

type IworkType = "BATTLE" | "COLLECTION"
const today = new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" })

export const CharacterArticle = ({ data, idx }: ICharacterArticleProps) => {
    const [searchParams] = useSearchParams()
    const [recoveryTime, setRecoveryTime] = useState<number | null>(null) // 하트 복구 시간
    const [health, setHealth] = useState<number>(data.health)

    const [workTime, setWorkTime] = useState<number | null>(null)
    const now = new Date(today)

    const NotActivityAlert = () => {
        alert("이미 전투 또는 파견 중입니다")
    }

    useEffect(() => {
        if (data.last_damage_time === null) {
            setRecoveryTime(null)
        } else {
            const givenTime = new Date(data.last_damage_time)
            const diff = now.getTime() - givenTime.getTime()
            setRecoveryTime(Math.floor(diff / 1000) % heartRecoveryTime)

            const interval = setInterval(() => {
                setRecoveryTime((prev) => {
                    if (prev === null) return null

                    if (prev === 0) {
                        clearInterval(interval)
                        return null
                    }
                    return prev - 1
                })
            }, 1000)
            return () => clearInterval(interval)
        }
    }, [data])

    useEffect(() => {
        if (data.work == null) return

        const workGivenTime = new Date(data.work.start_time)
        const workDiff = now.getTime() - workGivenTime.getTime()
        setWorkTime(Math.floor(data.work.duration - workDiff / 1000))
        const interval = setInterval(() => {
            setWorkTime((prev) => {
                if (prev === null) return null

                if (prev <= 0) {
                    clearInterval(interval)
                    setWorkTime(0)
                    return null
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [data.work])

    useEffect(() => {
        if (recoveryTime === null) return
        if (health === 100) {
            setRecoveryTime(null)
            return
        }
        if (recoveryTime <= 0) {
            setHealth((prev) => {
                if (prev === 100) return 100
                return prev + 1
            })
            setRecoveryTime(heartRecoveryTime)
        }
    }, [recoveryTime])

    const { data: endSuccessData, isSuccess: endIsSuccess, mutate: workEndMutate } = useWorkEnd()
    const { data: startSuccessData, isSuccess: startIsSuccess, mutate: workStartMutate } = useWorkStart()

    const workIsEnd = () => {
        workEndMutate({ characterId: data.id })
    }

    const workStart = (type: IworkType) => {
        workStartMutate({
            characterId: data.id,
            type,
            param: {
                duration: 10,
                region: (searchParams.get("area") as string) == "forest" ? "PLAINS" : "MINE",
            },
        })
    }

    return (
        <div className="characterArticle-container">
            <div className="state">
                <img src={userImage[idx]} className="character" />
                <div className="infoContainer">
                    <p className="characterArticle-titleLarge">{data.name}</p>
                    <div className="info">
                        <div className="characterArticle-iconContainer">
                            <p className="characterArticle-titleMedium">{health}</p>
                            <HealthIcon />
                            {recoveryTime !== null && (
                                <div className="plus">
                                    <p className="plus">(</p>
                                    <p className="plus">
                                        {Math.floor(recoveryTime / 60)
                                            .toString()
                                            .padStart(2, "0")}
                                        :{recoveryTime % 60}
                                    </p>
                                    <HealthPlusIcon />
                                    <p className="plus">)</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="info">
                        <div className="characterArticle-iconContainer">
                            <p className="characterArticle-titleMedium">{data.defense}</p>
                            <DefenseIcon />
                        </div>
                        <div className="characterArticle-iconContainer">
                            <p className="characterArticle-titleMedium">{data.lucky}</p>
                            <LuckyIcon />
                        </div>
                    </div>
                </div>
            </div>
            <div className="buttonContainer">
                {data.work && data.work.type === "COLLECTION" ? (
                    workTime && workTime >= 0 ? (
                        <button className="greenButton">파견 중.. ({workTime}초)</button>
                    ) : (
                        <button className="greenButton" onClick={workIsEnd}>
                            <CollectionIcon />
                            파견 완료
                        </button>
                    )
                ) : (
                    <button
                        className="grayButton"
                        onClick={() => (workTime && workTime >= 0 ? NotActivityAlert() : workStart("COLLECTION"))}
                    >
                        <CollectionIcon />
                        파견
                    </button>
                )}

                {data.work && data.work.type === "BATTLE" ? (
                    workTime && workTime >= 0 ? (
                        <button className="greenButton">전투 중.. ({workTime}초)</button>
                    ) : (
                        <button className="greenButton" onClick={workIsEnd}>
                            <BattleIcon />
                            전투 완료
                        </button>
                    )
                ) : (
                    <button
                        className="grayButton"
                        onClick={() => (workTime && workTime >= 0 ? NotActivityAlert() : workStart("BATTLE"))}
                    >
                        <BattleIcon />
                        전투
                    </button>
                )}
            </div>
        </div>
    )
}
