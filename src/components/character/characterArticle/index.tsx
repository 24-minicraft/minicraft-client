"use client"
import "./style.scss"
import { useEffect, useRef, useState } from "react"
import { ICharacterArticle } from "@/types/character.type"
import { BattleIcon, CollectionIcon, DefenseIcon, HealthIcon, HealthPlusIcon, LuckyIcon } from "@/assets/icons"
import { userImage } from "@/libs/constant/userImage"
import { useWorkEnd, useWorkStart } from "@/apis/works"
import { useSearchParams } from "react-router-dom"
import { useEquipmentModalStore } from "@/libs/provider/EquipmentProvider"
import { itemComponent } from "@/libs/constant/itemComponent"
import { IMaterials, IWorkEndResponse } from "@/apis/works/type"

interface ICharacterArticleProps {
    data: ICharacterArticle
    idx: number
}

const heartRecoveryTime = 36

type IworkType = "BATTLE" | "COLLECTION"

export const CharacterArticle = ({ data, idx }: ICharacterArticleProps) => {
    const { openModal } = useEquipmentModalStore((state) => state)

    const [modal, setModal] = useState(false)

    const [searchParams] = useSearchParams()
    const [recoveryTime, setRecoveryTime] = useState<number | null>(null)
    const [health, setHealth] = useState<number>(data.health)
    const heartIntervalRef = useRef<any>(null)

    const [workTime, setWorkTime] = useState<number | null>(null)
    const workTimeIntervalRef = useRef<any>(null)
    const NotActivityAlert = () => {
        alert("이미 전투 또는 파견 중입니다")
    }

    useEffect(() => {
        const now = new Date()

        if (data.last_damage_time === null) {
            setRecoveryTime(null)
        } else {
            const givenTime = new Date(data.last_damage_time)
            const diff = now.getTime() - givenTime.getTime()
            const initialRecoveryTime = Math.floor(diff / 1000) % heartRecoveryTime

            setRecoveryTime(initialRecoveryTime)

            if (heartIntervalRef.current) {
                clearInterval(heartIntervalRef.current)
            }

            heartIntervalRef.current = setInterval(() => {
                setRecoveryTime((prev) => {
                    if (prev === null || prev <= 0) {
                        clearInterval(heartIntervalRef.current)
                        heartIntervalRef.current = null
                        return null
                    }
                    return prev - 1
                })
            }, 1000)

            return () => {
                if (heartIntervalRef.current) {
                    clearInterval(heartIntervalRef.current)
                }
            }
        }
    }, [data, heartRecoveryTime])

    useEffect(() => {
        if (data.work == null) return

        const now = new Date()
        const workGivenTime = new Date(data.work.start_time)
        const workDiff = now.getTime() - workGivenTime.getTime()
        const initialWorkTime = Math.floor(data.work.duration - workDiff / 1000)

        setWorkTime(initialWorkTime)

        if (workTimeIntervalRef.current) {
            clearInterval(workTimeIntervalRef.current)
        }

        workTimeIntervalRef.current = setInterval(() => {
            setWorkTime((prev) => {
                if (prev === null || prev <= 0) {
                    clearInterval(workTimeIntervalRef.current)
                    workTimeIntervalRef.current = null
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => {
            if (workTimeIntervalRef.current) {
                clearInterval(workTimeIntervalRef.current)
            }
        }
    }, [data.work])

    useEffect(() => {
        if (recoveryTime === null) return

        if (health === 100) {
            setRecoveryTime(null)
            return
        }

        if (recoveryTime <= 0) {
            setHealth((prev) => {
                setRecoveryTime(heartRecoveryTime)
                return prev
            })
        }
    }, [recoveryTime, health, heartRecoveryTime])

    const { data: endSuccessData, isSuccess: endIsSuccess, mutate: workEndMutate } = useWorkEnd()
    const { data: startSuccessData, isSuccess: startIsSuccess, mutate: workStartMutate } = useWorkStart()

    const workIsEnd = () => {
        workEndMutate({ characterId: data.id })
        data.work = null
        setWorkTime(null)
        setModal(true)
        setTimeout(() => {
            setModal(false)
        }, 3000)
    }

    const workStart = (type: IworkType) => {
        workStartMutate({
            characterId: data.id,
            type,
            param: {
                duration: type === "BATTLE" ? Math.floor(Math.random() * 0) + 60 : Math.floor(Math.random() * 0) + 20,
                region: (searchParams.get("area") as string) == "forest" ? "PLAINS" : "MINE",
            },
        })
        if (startIsSuccess && type == "BATTLE") {
            data.health -= 2
        }
    }

    return (
        <>
            {modal && endIsSuccess && <ResultModal data={endSuccessData} />}
            <div className="characterArticle-container">
                <div className="state">
                    <img src={userImage[idx]} className="character" onClick={() => openModal(data.id, idx)} />
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
        </>
    )
}

const ResultModal = ({ data }: { data: IWorkEndResponse }) => {
    return (
        <div className="ModalWrapper">
            <div className="ModalBlock">
                <span>획득한 자원</span>
                <div>
                    {data.materials.map((e: IMaterials) => (
                        <div key={e.type}>
                            {itemComponent[e.type][32]}
                            <span>{e.amount} 개</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
