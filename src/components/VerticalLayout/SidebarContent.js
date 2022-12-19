import PropTypes from "prop-types"
import React, { useEffect, useRef } from "react"

// //Import Scrollbar
import SimpleBar from "simplebar-react"

// MetisMenu
import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"

//i18n
import { withTranslation } from "react-i18next"

const SidebarContent = props => {
  const ref = useRef()
  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    const pathName = props.location.pathname

    const initMenu = () => {
      new MetisMenu("#side-menu")
      let matchingMenuItem = null
      const ul = document.getElementById("side-menu")
      const items = ul.getElementsByTagName("a")
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i]
          break
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem)
      }
    }
    initMenu()
  }, [props.location.pathname])

  useEffect(() => {
    ref.current.recalculate()
  })

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300
      }
    }
  }

  function activateParentDropdown(item) {
    item.classList.add("active")
    const parent = item.parentElement
    const parent2El = parent.childNodes[1]
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }

    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement

      if (parent2) {
        parent2.classList.add("mm-show") // ul tag

        const parent3 = parent2.parentElement // li tag

        if (parent3) {
          parent3.classList.add("mm-active") // li
          parent3.childNodes[0].classList.add("mm-active") //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add("mm-show") // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add("mm-show") // li
              parent5.childNodes[0].classList.add("mm-active") // a tag
            }
          }
        }
      }
      scrollElement(item)
      return false
    }
    scrollElement(item)
    return false
  }

  return (
    <React.Fragment>
      <SimpleBar className="h-100" ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{props.t("Menu")} </li>
            <li>
              <Link to="/#" className="active">
                <i className="fas fa-desktop"></i>
                {props.t("Dashboards")}
              </Link>
            {/* <ul className="sub-menu"> */}
            <li className>
                <Link to="/billing">
                  <i className="fas fa-file-invoice"></i>
                  {props.t("Billing")}
                </Link>
              </li>
              <li>
                <Link to="/appointment">
                  <i className="fas fa-calendar"></i>
                  {props.t("Appointment")}
                </Link>
              </li>
              <li>
                <Link to="/opd">
                  <i className="fas fa-stethoscope"></i>
                  {props.t("OPD-Out Patient")}
                </Link>
              </li>
              <li>
                <Link to="/ipd">
                  <i className="fas fa-procedures"></i>
                  {props.t("IPD-In Patient")}
                </Link>
              </li>
              <li>
                <Link to="/pharmacy">
                  <i className="fas fa-mortar-pestle"></i>
                  {props.t("Pharmacy")}
                </Link>
              </li>
            {/* </ul> */}
            </li>

            <li>
              <Link to="/pathology">
                <i className="fas fa-flask"></i>
                <span>{props.t("Pathology")}</span>
              </Link>
            </li>

            <li>
              <Link to="/radiology">
                <i className="fas fa-microscope"></i>
                <span>{props.t("Radiology")}</span>
              </Link>
            </li>
            <li>
              <Link to="/bloodbank">
                <i className="fas fa-tint"></i>
                <span>{props.t("Blood Bank")}</span>
              </Link>
            </li>

            <li>
              <Link to="/ambulance" className="">
                <i className="fas fa-ambulance"></i>
                <span>{props.t("Ambulance")}</span>
              </Link>

              <li>
                <Link to="/frontoffice">
                  <i className="fas fa-hospital-alt"></i>
                  {props.t("Front Office")}
                </Link>
              </li>
              <li>
                <Link to="#" className="has-arrow">
                  <i className="fa fa-birthday-cake"></i>
                  <span>{props.t("Birth & Death Record")}</span>
                </Link>
                <ul className="sub-menu" style={{marginLeft: '-6px'}}>
                  <li>
                    <Link to="/birthrecord">{props.t("Birth Record")}</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="deathrecord">{props.t("Death Record")}</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/hr">
                  <i className="fas fa-sitemap"></i>
                  <span>{props.t("Human Resource")}</span>
                </Link>
              </li>
              <li>
                <Link to="#" className="has-arrow">
                  <i className="fas fa-money-bill"></i>
                  {props.t("Finance")}
                </Link>
                <ul style={{marginLeft: '-30px'}}>
                  <li>
                    <Link to="/income">{props.t("Income")}</Link>
                  </li>
                  <li>
                    <Link to="/expenses">{props.t("Expenses")}</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#" className="has-arrow">
                  <i className="fas fa-video"></i>
                  <span>{props.t("Live Consultation")}</span>
                </Link>
                <ul style={{marginLeft: '-30px'}}>
                  <li>
                    <Link to="/liveconsult">{props.t("Live Consultation")}</Link>
                  </li>
                  <li>
                    <Link to="/livemeeting">{props.t("Live Meeting")}</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/certificate">
                  <i className="far fa-newspaper"></i>
                  {props.t("Certificate")}
                </Link>
              </li>
              <li>
                <Link to="#" className="has-arrow">
                  <i className="fas fa-print"></i>
                  {props.t("Reports")}
                </Link>
                <ul style={{marginLeft: '-30px'}}>
                  <li>
                    <Link to="/opdreport">{props.t("OPD Report")}</Link>
                  </li>
                  <li>
                    <Link to="ipdreport">{props.t("IPD Report")}</Link>
                  </li>
                  <li>
                    <Link to="#">{props.t("OPD Balance Report")}</Link>
                  </li>
                  <li>
                    <Link to="#">{props.t("IPD Balance Report")}</Link>
                  </li>
                  <li>
                    <Link to="#">{props.t("OPD Discharged Report")}</Link>
                  </li>
                  <li>
                    <Link to="#">{props.t("IPD Discharged Report")}</Link>
                  </li>
                  <li>
                    <Link to="/bloodreport">{props.t("Blood Issue Report")}</Link>
                  </li>
                  <li>
                    <Link to="/pathologyreport">{props.t("Pathology Report")}</Link>
                  </li>
                  <li>
                    <Link to="/radiologyreport">{props.t("Radiology Report")}</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/inventory">
                  <i className="fas fa-luggage-cart"></i>
                  {props.t("Inventory")}
                </Link>
              </li>
              <li>
                <Link to="/message">
                  <i className="far fa-envelope"></i>
                  {props.t("Messaging")}
                </Link>
              </li>
              <li>
                <Link to="frontcms">
                  <i className="fa fa-solar-panel"></i>
                  {props.t("Front CMS")}
                </Link>
              </li>
            </li>
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  )
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(SidebarContent))
