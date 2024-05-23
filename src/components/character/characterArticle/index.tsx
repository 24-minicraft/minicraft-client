"use client"
import "./style.scss"
import { useEffect, useState } from "react"
import { ICharacterArticle } from "@/types/character.type"
import { BattleIcon, CollectionIcon, DefenseIcon, HealthIcon, HealthPlusIcon, LuckyIcon } from "@/assets/icons"
import { userImage } from "@/libs/constant/userImage"
import { useWorkEnd, useWorkStart } from "@/apis/works"

interface ICharacterArticleProps {
    data: ICharacterArticle
    idx: number
}

const heartRecoveryTime = 36

type IworkType = "WAR" | "COLLECTION" | null
const today = new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" })

export const CharacterArticle = ({ data, idx }: ICharacterArticleProps) => {
    const [recoveryTime, setRecoveryTime] = useState<number | null>(null) // 하트 복구 시간
    const [health, setHealth] = useState<number>(data.health)

    const [workTime, setWorkTime] = useState<number | null>(null)
    const now = new Date(today)

    useEffect(() => {
        if (data.lastDamageTime === null) {
            setRecoveryTime(null)
        } else {
            const givenTime = new Date(data.lastDamageTime)
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
        if (data.work.start_time === null) return
        if (data.work.duration === null) return

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
    }, [data])

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
        workEndMutate({ character_id: data.id })
        if (endIsSuccess) {
            data.equipment_list = endSuccessData.materials
            data.health = endSuccessData.health
            data.work = {
                type: null,
                start_time: null,
                duration: null,
                region: null,
            }
        }
    }

    const workStart = (type: IworkType) => {
        if (data.work.type === "COLLECTION") {
            alert("이미 파견 중입니다.")
        } else if (data.work.type === "WAR") {
            alert("이미 전투 중입니다.")
        } else {
            workStartMutate({
                character_id: data.id,
                type,
            })
            if (startIsSuccess) {
            }
            console.log(now.toISOString())
            data.work = {
                type: type,
                start_time: now.toISOString(),
                duration: 1000,
                region: "초원",
            }
            console.log(data)
        }
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
                {data.work.type === "COLLECTION" ? (
                    workTime && workTime >= 0 ? (
                        <button className="greenButton">파견 중.. ({workTime}초)</button>
                    ) : (
                        <button className="greenButton" onClick={workIsEnd}>
                            <CollectionIcon />
                            파견 완료
                        </button>
                    )
                ) : (
                    <button className="grayButton" onClick={() => workStart("COLLECTION")}>
                        <CollectionIcon />
                        파견
                    </button>
                )}

                {data.work.type === "WAR" ? (
                    workTime && workTime >= 0 ? (
                        <button className="greenButton">전투 중.. ({workTime}초)</button>
                    ) : (
                        <button className="greenButton" onClick={workIsEnd}>
                            <BattleIcon />
                            전투 완료
                        </button>
                    )
                ) : (
                    <button className="grayButton" onClick={() => workStart("WAR")}>
                        <BattleIcon />
                        전투
                    </button>
                )}
            </div>
        </div>
    )
}
