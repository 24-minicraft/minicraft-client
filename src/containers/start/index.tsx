import { customCookie } from "@/libs/customCookie"
import { Fragment } from "react"
import "../../libs/styles/components.scss"
import "./style.scss"
import { Link } from "react-router-dom"
import { router } from "@/libs/constant/router"

export const Start = () => {
    const cookie = customCookie.get.accessToken()
    return (
        <div className="startButtonBlock">
            {cookie
                ? router.login.map((e) => (
                      <Link to={e.url}>
                          <button className="grayButton" style={{ height: 50 }}>
                              {e.tab}
                          </button>
                      </Link>
                  ))
                : router.noLogin.map((e) => (
                      <Link to={e.url}>
                          <button className="grayButton" style={{ height: 50 }}>
                              {e.tab}
                          </button>
                      </Link>
                  ))}
        </div>
    )
}
