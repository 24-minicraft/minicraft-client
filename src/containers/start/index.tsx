import { customCookie } from "@/libs/CustomCookie"
import { Fragment } from "react"
import "../../libs/styles/components.scss"
import "./style.scss"
import { Link } from "react-router-dom"
import { router } from "@/libs/constant/router"
import { basicLogo } from "@/assets/logo"

export const Start = () => {
    const cookie = customCookie.get.accessToken()
    return (
        <Fragment>
            <img className="logo" src={basicLogo} />
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
        </Fragment>
    )
}
