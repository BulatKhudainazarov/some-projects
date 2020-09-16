import React from 'react'
import {Switch, Route, useRouteMatch, NavLink} from 'react-router-dom'
import './login.scss'
import avatar from '../../images/login/navbar/profilePhoto.jpg'
import eduCoin from '../../images/landing/educoin/eduCoin.svg'
import MyCourses from './containers/myCourses/myCourses'
import Chat from './containers/chat/chat'
import PromoCode from './containers/promoCode/promoCode'
import EditProfile from './containers/editProfile/editProfile'
import Payment from './containers/payment/payment'
import TeacherPage from '../general/teacherPage/teacherPage'
import Subject from '../general/subject/subject'
import Calendar from './containers/calendar/calendar'
import BuySubject from './containers/buySubject/buySubject'
import Lesson from '../general/lesson/lesson'
import Connect from '../general/connect/connect'
import WatchCourse from './containers/watchCourse/watchCourse'
import NotFound from '../general/notFound/notFound'


const Login = () => {
  const {path, url} = useRouteMatch()

  console.log('path:', path, 'url:', url)

  const toggleNavBar = event => {

    if (event.target.classList.contains('btnBurger__menu') || event.target.classList.contains('btnBurger__span')) {
      event.currentTarget.classList.contains('active')
        ? event.currentTarget.classList.remove('active')
        :event.currentTarget.classList.add('active')
    }
  }

  return (
    <section className="loginNav">

      <div onClick={toggleNavBar} className="loginNav__navBar active">
        <div className="loginNav__column loginNav__btnBurger btnBurger">
          <div className="btnBurger__menu">
            <span className="btnBurger__span"/><span className="btnBurger__span"/><span className="btnBurger__span"/>
          </div>
        </div>

        <div className="loginNav__column loginNav__profile loginProf">
          <div className="loginProf__img loginProf__column">
            <img src={avatar} alt="avatar"/>
          </div>

          <div className="loginProf__description loginProf__column">
            <div className="loginProf__name">Student Name</div>
            <div className="loginProf__coins">
              <div className="loginProf__educoin">
                <img src={eduCoin} alt="eduCoin"/>
              </div>
              <span>999999</span>
            </div>
          </div>
        </div>

        <ul className="loginNav__column loginNav__list">
          <li className="loginNav__item">
            <NavLink exact className="loginNav__link" to="/login">
              <div className="loginNav__linkIcon">
                <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.9785 0.246094H2.02148C0.906838 0.246094 0 1.15293 0 2.26758V12.5098C0 13.6244 0.906838 14.5312 2.02148 14.5312H2.91992V17.4062C2.91992 18.1493 3.52448 18.7539 4.26758 18.7539H9.38867C10.1318 18.7539 10.7363 18.1493 10.7363 17.4062V14.5312H20.9785C22.0932 14.5312 23 13.6244 23 12.5098V2.26758C23 1.15293 22.0932 0.246094 20.9785 0.246094ZM9.38867 17.4062H4.26758V13.498C4.26758 12.0627 5.22536 10.5781 6.82812 10.5781C8.43089 10.5781 9.38867 12.0627 9.38867 13.498V17.4062ZM4.98633 7.38867C4.98633 6.37312 5.81258 5.54688 6.82812 5.54688C7.84367 5.54688 8.66992 6.37312 8.66992 7.38867C8.66992 8.40422 7.84367 9.23047 6.82812 9.23047C5.81258 9.23047 4.98633 8.40422 4.98633 7.38867ZM21.6523 12.5098C21.6523 12.8813 21.3501 13.1836 20.9785 13.1836H10.7243C10.6582 12.233 10.2965 11.3044 9.70766 10.5965C9.45857 10.297 9.17592 10.0434 8.86726 9.83898C9.56962 9.25342 10.0176 8.37246 10.0176 7.38867C10.0176 5.63003 8.58677 4.19922 6.82812 4.19922C5.06948 4.19922 3.63867 5.63003 3.63867 7.38867C3.63867 8.37246 4.08663 9.25342 4.78903 9.83894C4.48033 10.0434 4.19768 10.297 3.94863 10.5964C3.35971 11.3044 2.99809 12.233 2.93192 13.1836H2.02148C1.64994 13.1836 1.34766 12.8813 1.34766 12.5098V2.26758C1.34766 1.89603 1.64994 1.59375 2.02148 1.59375H20.9785C21.3501 1.59375 21.6523 1.89603 21.6523 2.26758V12.5098Z" fill="white"/>
                  <path d="M19.4062 3.83984H15.8125C15.4404 3.83984 15.1387 4.14154 15.1387 4.51367C15.1387 4.8858 15.4404 5.1875 15.8125 5.1875H19.4062C19.7784 5.1875 20.0801 4.8858 20.0801 4.51367C20.0801 4.14154 19.7784 3.83984 19.4062 3.83984Z" fill="white"/>
                  <path d="M19.4062 6.71484H15.8125C15.4404 6.71484 15.1387 7.01654 15.1387 7.38867C15.1387 7.7608 15.4404 8.0625 15.8125 8.0625H19.4062C19.7784 8.0625 20.0801 7.7608 20.0801 7.38867C20.0801 7.01654 19.7784 6.71484 19.4062 6.71484Z" fill="white"/>
                  <path d="M19.4062 9.58984H15.8125C15.4404 9.58984 15.1387 9.89154 15.1387 10.2637C15.1387 10.6358 15.4404 10.9375 15.8125 10.9375H19.4062C19.7784 10.9375 20.0801 10.6358 20.0801 10.2637C20.0801 9.89154 19.7784 9.58984 19.4062 9.58984Z" fill="white"/>
                  <path d="M12.9375 10.9375C13.3096 10.9375 13.6113 10.6358 13.6113 10.2637C13.6113 9.89153 13.3096 9.58984 12.9375 9.58984C12.5654 9.58984 12.2637 9.89153 12.2637 10.2637C12.2637 10.6358 12.5654 10.9375 12.9375 10.9375Z" fill="white"/>
                  <path d="M12.9375 8.0625C13.3096 8.0625 13.6113 7.76082 13.6113 7.38867C13.6113 7.01653 13.3096 6.71484 12.9375 6.71484C12.5654 6.71484 12.2637 7.01653 12.2637 7.38867C12.2637 7.76082 12.5654 8.0625 12.9375 8.0625Z" fill="white"/>
                  <path d="M12.9375 5.18762C13.3096 5.18762 13.6113 4.88594 13.6113 4.51379C13.6113 4.14165 13.3096 3.83997 12.9375 3.83997C12.5654 3.83997 12.2637 4.14165 12.2637 4.51379C12.2637 4.88594 12.5654 5.18762 12.9375 5.18762Z" fill="white"/>
                </svg>
              </div>
              <span>Курстарым</span></NavLink>
          </li>
          <li className="loginNav__item">
            <NavLink className="loginNav__link" to="/login/tests">
              <div className="loginNav__linkIcon">
                <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.3242 13.8418H10.1348C9.72486 13.8418 9.39258 14.1741 9.39258 14.584C9.39258 14.9939 9.72486 15.3262 10.1348 15.3262H12.3242C12.7341 15.3262 13.0664 14.9939 13.0664 14.584C13.0664 14.1741 12.7341 13.8418 12.3242 13.8418Z" fill="#FF5773"/>
                  <path d="M12.3242 9.35156H10.1348C9.72486 9.35156 9.39258 9.68384 9.39258 10.0938C9.39258 10.5037 9.72486 10.8359 10.1348 10.8359H12.3242C12.7341 10.8359 13.0664 10.5037 13.0664 10.0938C13.0664 9.68384 12.7341 9.35156 12.3242 9.35156Z" fill="#FF5773"/>
                  <path d="M15.2888 13.0625C15.6988 13.0625 16.031 12.7302 16.031 12.3203V2.96875C16.031 1.33178 14.6993 0 13.0623 0H3.9375C2.30053 0 0.96875 1.33178 0.96875 2.96875V16.0312C0.96875 17.6682 2.30053 19 3.9375 19H13.0622C14.6993 19 16.031 17.6682 16.031 16.0312C16.031 15.6213 15.6988 15.2891 15.2888 15.2891C14.8789 15.2891 14.5467 15.6213 14.5467 16.0312C14.5467 16.8497 13.8808 17.5156 13.0623 17.5156H3.9375C3.11902 17.5156 2.45312 16.8497 2.45312 16.0312V2.96875C2.45312 2.15027 3.11902 1.48438 3.9375 1.48438H13.0623C13.8808 1.48438 14.5467 2.15027 14.5467 2.96875V12.3203C14.5467 12.7302 14.8789 13.0625 15.2888 13.0625Z" fill="#FF5773"/>
                  <path d="M8.49223 2.95307C8.17628 2.69205 7.70844 2.7365 7.44738 3.05253L5.84407 4.99309L5.21143 4.34341C4.9255 4.04977 4.45558 4.0435 4.1619 4.32946C3.86825 4.61543 3.86198 5.0853 4.14794 5.37899L4.94409 6.19662C4.95066 6.20337 4.95734 6.20998 4.96417 6.21647C5.20475 6.44547 5.52585 6.57283 5.85616 6.57283C5.88452 6.57276 5.91305 6.57183 5.94155 6.5699C6.29947 6.54604 6.63372 6.37281 6.8596 6.09438L8.59168 3.99796C8.85279 3.68194 8.80826 3.21414 8.49223 2.95307Z" fill="#FF5773"/>
                  <path d="M8.49198 12.0034C8.17603 11.7423 7.70819 11.7868 7.44713 12.1028L5.84337 14.0439L5.20973 13.3968C4.92291 13.1039 4.45303 13.099 4.16016 13.3858C3.86729 13.6726 3.8624 14.1425 4.14914 14.4354L4.94529 15.2484C4.95137 15.2546 4.95757 15.2607 4.96388 15.2667C5.20446 15.4957 5.5256 15.6231 5.85591 15.6231C5.8843 15.623 5.9128 15.6221 5.9413 15.6202C6.29919 15.5964 6.63343 15.4231 6.85935 15.1447L8.59143 13.0482C8.85253 12.7322 8.808 12.2644 8.49198 12.0034Z" fill="#FF5773"/>
                  <path d="M12.3242 4.78711H10.1348C9.72486 4.78711 9.39258 5.11939 9.39258 5.5293C9.39258 5.93921 9.72486 6.27148 10.1348 6.27148H12.3242C12.7341 6.27148 13.0664 5.93921 13.0664 5.5293C13.0664 5.11939 12.7341 4.78711 12.3242 4.78711Z" fill="#FF5773"/>
                  <path d="M8.49198 7.51314C8.17603 7.25207 7.70819 7.2966 7.44713 7.61259L5.84337 9.55367L5.20973 8.90656C4.92291 8.61369 4.45303 8.60879 4.16016 8.89557C3.86729 9.18235 3.8624 9.65227 4.14914 9.94513L4.94529 10.7582C4.95137 10.7644 4.95757 10.7705 4.96388 10.7765C5.20446 11.0055 5.5256 11.1329 5.85591 11.1329C5.8843 11.1328 5.9128 11.1319 5.9413 11.13C6.29919 11.1061 6.63343 10.9329 6.85935 10.6545L8.59143 8.55802C8.85253 8.242 8.808 7.7742 8.49198 7.51314Z" fill="#FF5773"/>
                </svg>
              </div>
              <span>Тестерім</span>
            </NavLink>
          </li>
          <li className="loginNav__item">
            <NavLink className="loginNav__link loginNav__linkChat" to="/login/chat">
              <div className="loginNav__linkWrapper">
                <div className="loginNav__linkIcon">
                  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.2422 0H1.75781C0.788555 0 0 0.788555 0 1.75781V11.9446C0 12.9139 0.788555 13.7024 1.75781 13.7024H18.2422C19.2114 13.7024 20 12.9139 20 11.9446V1.75781C20 0.788555 19.2114 0 18.2422 0ZM18.0128 1.17188L17.7782 1.36723L10.6974 7.26336C10.2933 7.59984 9.70664 7.59984 9.30258 7.26336L2.22184 1.36723L1.98723 1.17188H18.0128ZM1.17188 2.01789L6.94109 6.82191L1.17188 10.6615V2.01789ZM18.2422 12.5305H1.75781C1.47469 12.5305 1.23789 12.3287 1.18363 12.0614L7.8807 7.6043L8.55273 8.16391C8.97203 8.51305 9.48606 8.68762 10 8.68762C10.514 8.68762 11.028 8.51305 11.4473 8.16391L12.1194 7.6043L18.8164 12.0613C18.7621 12.3287 18.5253 12.5305 18.2422 12.5305ZM18.8281 10.6615L13.0589 6.82195L18.8281 2.01789V10.6615Z" fill="#FF5773"/>
                  </svg>
                </div>

                <span>Чат</span>
              </div>

              <div className="loginNav__linkMessages">
                <span>1</span>
              </div>
            </NavLink>
          </li>
          <li className="loginNav__item">
            <NavLink className="loginNav__link" to="/login/calendar">
              <div className="loginNav__linkIcon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.0714 1.92857H14.1429V0.642869C14.1429 0.287816 13.855 0 13.5 0C13.1449 0 12.8571 0.287816 12.8571 0.642869V1.92857H5.14284V0.642869C5.14284 0.287816 4.85502 0 4.50001 0C4.14499 0 3.85714 0.287816 3.85714 0.642869V1.92857H1.92857C0.863449 1.92857 0 2.79202 0 3.85714V16.0714C0 17.1365 0.863449 18 1.92857 18H16.0714C17.1365 18 18 17.1365 18 16.0714V3.85714C18 2.79202 17.1365 1.92857 16.0714 1.92857ZM16.7143 16.0714C16.7143 16.4265 16.4264 16.7143 16.0714 16.7143H1.92857C1.57352 16.7143 1.2857 16.4265 1.2857 16.0714V7.71428H16.7143V16.0714ZM16.7143 6.42858H1.2857V3.85714C1.2857 3.50209 1.57352 3.21427 1.92857 3.21427H3.85714V4.49997C3.85714 4.85502 4.14496 5.14284 4.50001 5.14284C4.85506 5.14284 5.14288 4.85502 5.14288 4.49997V3.21427H12.8572V4.49997C12.8572 4.85502 13.145 5.14284 13.5 5.14284C13.8551 5.14284 14.1429 4.85502 14.1429 4.49997V3.21427H16.0715C16.4265 3.21427 16.7143 3.50209 16.7143 3.85714V6.42858H16.7143Z" fill="#FF5773"/>
                  <path d="M5.14293 9H3.85723C3.50217 9 3.21436 9.28781 3.21436 9.64287C3.21436 9.99792 3.50217 10.2857 3.85723 10.2857H5.14293C5.49798 10.2857 5.7858 9.99792 5.7858 9.64287C5.7858 9.28781 5.49798 9 5.14293 9Z" fill="#FF5773"/>
                  <path d="M9.64293 9H8.35723C8.00217 9 7.71436 9.28781 7.71436 9.64287C7.71436 9.99792 8.00217 10.2857 8.35723 10.2857H9.64293C9.99799 10.2857 10.2858 9.99792 10.2858 9.64287C10.2858 9.28781 9.99799 9 9.64293 9Z" fill="#FF5773"/>
                  <path d="M14.1429 9H12.8572C12.5022 9 12.2144 9.28781 12.2144 9.64287C12.2144 9.99792 12.5022 10.2857 12.8572 10.2857H14.1429C14.498 10.2857 14.7858 9.99792 14.7858 9.64287C14.7858 9.28781 14.4979 9 14.1429 9Z" fill="#FF5773"/>
                  <path d="M5.14293 11.5715H3.85723C3.50217 11.5715 3.21436 11.8593 3.21436 12.2144C3.21436 12.5695 3.50217 12.8573 3.85723 12.8573H5.14293C5.49798 12.8573 5.7858 12.5695 5.7858 12.2144C5.7858 11.8593 5.49798 11.5715 5.14293 11.5715Z" fill="#FF5773"/>
                  <path d="M9.64293 11.5715H8.35723C8.00217 11.5715 7.71436 11.8593 7.71436 12.2144C7.71436 12.5695 8.00217 12.8573 8.35723 12.8573H9.64293C9.99799 12.8573 10.2858 12.5695 10.2858 12.2144C10.2858 11.8593 9.99799 11.5715 9.64293 11.5715Z" fill="#FF5773"/>
                  <path d="M14.1429 11.5715H12.8572C12.5022 11.5715 12.2144 11.8593 12.2144 12.2144C12.2144 12.5695 12.5022 12.8573 12.8572 12.8573H14.1429C14.498 12.8573 14.7858 12.5695 14.7858 12.2144C14.7858 11.8593 14.4979 11.5715 14.1429 11.5715Z" fill="#FF5773"/>
                  <path d="M5.14293 14.1429H3.85723C3.50217 14.1429 3.21436 14.4308 3.21436 14.7858C3.21436 15.1409 3.50217 15.4286 3.85723 15.4286H5.14293C5.49798 15.4286 5.7858 15.1408 5.7858 14.7858C5.7858 14.4307 5.49798 14.1429 5.14293 14.1429Z" fill="#FF5773"/>
                  <path d="M9.64293 14.1429H8.35723C8.00217 14.1429 7.71436 14.4308 7.71436 14.7858C7.71436 15.1409 8.00217 15.4287 8.35723 15.4287H9.64293C9.99799 15.4287 10.2858 15.1409 10.2858 14.7858C10.2858 14.4308 9.99799 14.1429 9.64293 14.1429Z" fill="#FF5773"/>
                  <path d="M14.1429 14.1429H12.8572C12.5022 14.1429 12.2144 14.4308 12.2144 14.7858C12.2144 15.1409 12.5022 15.4287 12.8572 15.4287H14.1429C14.498 15.4287 14.7858 15.1409 14.7858 14.7858C14.7858 14.4308 14.4979 14.1429 14.1429 14.1429Z" fill="#FF5773"/>
                </svg>
              </div>
              <span>Жоспарларым</span>
            </NavLink>
          </li>
          <li className="loginNav__item">
            <NavLink className="loginNav__link" to="/login/payment">
              <div className="loginNav__linkIcon">
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.6667 0H1.33334C0.596969 0 0 0.596969 0 1.33334V10.6667C0 11.4031 0.596969 12 1.33334 12H14.6667C15.4031 12 16 11.4031 16 10.6667V1.33334C16 0.596969 15.4031 0 14.6667 0ZM14.6667 10.6667H1.33334V6H14.6667V10.6667H14.6667ZM14.6667 4.66666H1.33334V4H14.6667V4.66666H14.6667ZM14.6667 2.66666H1.33334V1.33331H14.6667V2.66666H14.6667Z" fill="#FF5773"/>
                  <path d="M13.3332 7.3334H9.33325V8.66675H13.3332V7.3334Z" fill="#FF5773"/>
                  <path d="M2.66666 10H7.33331C7.7015 10 7.99997 9.70158 7.99997 9.33339V7.33339C7.99997 6.9652 7.7015 6.66673 7.33331 6.66673H2.66666C2.29847 6.66673 2 6.9652 2 7.33339V9.33339C2 9.70158 2.29847 10 2.66666 10ZM3.33334 8.00005H6.66669V8.6667H3.33334V8.00005Z" fill="#FF5773"/>
                </svg>
              </div>
              <span>Төлемдер</span>
            </NavLink>
          </li>
          <li className="loginNav__item">
            <NavLink className="loginNav__link" to="/login/eduCoin">
              <div className="loginNav__linkIcon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.4915 1.73196L6.50815 1.72917L6.52428 1.72417C6.91301 1.60363 7.68576 1.53552 8.87678 1.53552H14.4656V3.41485H8.48815C7.29024 3.41485 6.33746 3.63416 5.66493 4.10816C4.76268 4.58791 4.09754 5.49943 3.64558 6.78954L3.6413 6.80176L3.6383 6.81435C3.53435 7.25141 3.47986 7.63975 3.47986 7.97621C3.47986 9.11648 3.90508 10.1749 4.73403 11.146L4.74176 11.1551L4.75031 11.1633C5.28522 11.681 5.80137 12.0417 6.29914 12.2243C6.84899 12.4705 7.57149 12.5851 8.45024 12.5851H14.4656V14.4645H8.75355C7.22921 14.4645 6.13998 14.2772 5.45416 13.9299L5.44762 13.9266L5.4409 13.9237C3.8498 13.232 2.71803 12.0985 2.03556 10.5142C1.70184 9.72809 1.53436 8.88923 1.53436 7.99524C1.53436 6.07549 2.28795 4.43709 3.81356 3.06765C4.82372 2.29731 5.71535 1.86184 6.4915 1.73196ZM15.25 1V0.75H15H8.87678C7.67839 0.75 6.8208 0.813929 6.33585 0.956151C5.41371 1.1206 4.40551 1.62647 3.31425 2.44665L3.30543 2.45328L3.29723 2.46066C1.60507 3.98328 0.75 5.83232 0.75 7.99524C0.75 8.99166 0.93625 9.93522 1.30983 10.8236L1.30981 10.8236L1.31119 10.8268C2.08121 12.5893 3.35419 13.8651 5.1206 14.6455C5.93868 15.0576 7.16012 15.25 8.75355 15.25H15H15.25V15V12.0496V11.7996H15H8.45024C7.63913 11.7996 7.03263 11.6932 6.61184 11.499L6.60142 11.4942L6.59062 11.4904C6.2093 11.3553 5.78405 11.0728 5.31545 10.6222C4.60706 9.78078 4.26422 8.90048 4.26422 7.97621C4.26422 7.7182 4.30388 7.39968 4.38768 7.01747C4.79194 5.88709 5.35844 5.16175 6.06431 4.79023L6.07956 4.7822L6.09357 4.77215C6.60791 4.40327 7.39384 4.20037 8.48815 4.20037H15H15.25V3.95037V1ZM7.5782 6.28909H7.3282V6.53909V9.46091V9.71091H7.5782H15H15.25V9.46091V6.53909V6.28909H15H7.5782ZM14.4656 7.07461V8.92539H8.11256V7.07461H14.4656Z" fill="#FF5773" stroke="#FF5773" strokeWidth="0.0001"/>
                </svg>
              </div>
              <span>EduCoin</span>
            </NavLink>
          </li>
          <li className="loginNav__item">
            <NavLink className="loginNav__link" to="/login/promo">
              <div className="loginNav__linkIcon">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.60216 13.2923V16.5484L6.96675 15.744L9.50008 18.1956L12.0334 15.744L15.398 16.5484V13.2923L18.8022 12.4496L17.1001 9.19355L18.8022 5.9375L15.398 5.09476V1.83871L12.0334 2.64315L9.50008 0.191536L6.96675 2.64315L3.60216 1.83871V5.09476L0.197998 5.9375L1.90008 9.19355L0.197998 12.4496L3.60216 13.2923ZM3.40425 8.46573L2.65216 6.97178L3.998 6.66533C4.39383 6.58871 4.7039 6.40357 4.92821 6.10988C5.15251 5.8162 5.26466 5.47783 5.26466 5.09476V3.94557L6.53133 4.29033H6.96675C7.41536 4.29033 7.81119 4.12433 8.15425 3.79234L9.50008 2.48992L10.8459 3.79234C11.189 4.12433 11.5848 4.29033 12.0334 4.29033C12.1917 4.29033 12.3369 4.26479 12.4688 4.21371L13.7355 3.94557V5.09476C13.7355 5.47783 13.8477 5.8162 14.072 6.10988C14.2963 6.40357 14.6063 6.58871 15.0022 6.66533L16.348 6.97178L15.5959 8.46573C15.332 8.95094 15.332 9.43616 15.5959 9.92138L16.348 11.4153L15.0022 11.7218C14.6063 11.7984 14.2963 11.9835 14.072 12.2772C13.8477 12.5709 13.7355 12.9093 13.7355 13.2923V14.4415L12.4688 14.0968H12.0334C11.5848 14.0968 11.189 14.2628 10.8459 14.5948L9.50008 15.8972L8.15425 14.5948C7.81119 14.2628 7.41536 14.0968 6.96675 14.0968C6.80841 14.0968 6.66328 14.1223 6.53133 14.1734L5.26466 14.4415V13.2923C5.26466 12.9093 5.15251 12.5709 4.92821 12.2772C4.7039 11.9835 4.39383 11.7984 3.998 11.7218L2.65216 11.4153L3.40425 9.92138C3.66814 9.43616 3.66814 8.95094 3.40425 8.46573ZM8.66883 11.9899L12.6272 8.12097C12.9966 7.76344 12.9966 7.38038 12.6272 6.97178C12.2313 6.63979 11.8355 6.63979 11.4397 6.97178L8.66883 9.69154L7.5605 8.61896C7.16466 8.28697 6.76883 8.28697 6.373 8.61896C6.02994 9.00202 6.02994 9.38508 6.373 9.76815L8.66883 11.9899Z" fill="#FF5773"/>
                </svg>
              </div>
              <span>Promo Code</span>
            </NavLink>
          </li>
          <li className="loginNav__item">
            <NavLink className="loginNav__link" to="/login/edit">
              <div className="loginNav__linkIcon">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.53375 19.25C7.10677 19.2475 6.69218 19.1062 6.3525 18.8475L4.54125 17.5C4.12327 17.1741 3.84594 16.7005 3.7662 16.1766C3.68646 15.6526 3.81038 15.118 4.1125 14.6825C4.27235 14.4465 4.37394 14.1759 4.40893 13.893C4.44391 13.61 4.41129 13.3229 4.31375 13.055L4.26125 12.915C4.19333 12.6725 4.0692 12.4495 3.89892 12.264C3.72864 12.0786 3.51703 11.9359 3.28125 11.8475H3.14125C2.63014 11.6756 2.20746 11.3091 1.965 10.8274C1.72253 10.3458 1.67986 9.78792 1.84625 9.275L2.56375 7C2.6298 6.73642 2.7514 6.48999 2.92041 6.27721C3.08943 6.06444 3.30195 5.89023 3.54375 5.76625C3.76893 5.65023 4.01531 5.5811 4.26799 5.56305C4.52066 5.545 4.77436 5.57841 5.01375 5.66125C5.2744 5.74897 5.55253 5.77171 5.82396 5.72749C6.0954 5.68326 6.35193 5.57342 6.57125 5.4075L6.685 5.32C6.88353 5.16159 7.04399 4.96064 7.15454 4.73197C7.26508 4.5033 7.32291 4.25274 7.32375 3.99875V3.78875C7.3214 3.25336 7.53064 2.73873 7.90593 2.35688C8.28122 1.97504 8.79215 1.75692 9.3275 1.75H11.5588C11.8192 1.7507 12.077 1.80285 12.3172 1.90346C12.5575 2.00407 12.7755 2.15115 12.9588 2.33625C13.344 2.72807 13.558 3.25677 13.5538 3.80625V4.05125C13.5493 4.29253 13.6016 4.53148 13.7065 4.74883C13.8114 4.96617 13.9659 5.15583 14.1575 5.3025L14.2538 5.3725C14.4501 5.51976 14.6792 5.61736 14.9215 5.65697C15.1637 5.69659 15.4119 5.67704 15.645 5.6L15.9425 5.50375C16.1946 5.4202 16.4609 5.38827 16.7255 5.40986C16.9902 5.43145 17.2478 5.50613 17.483 5.62944C17.7182 5.75274 17.9261 5.92215 18.0944 6.12756C18.2627 6.33296 18.3879 6.57016 18.4625 6.825L19.1537 9.03C19.3137 9.53959 19.27 10.0913 19.0318 10.5694C18.7936 11.0474 18.3794 11.4146 17.8763 11.5938L17.7013 11.655C17.4439 11.7393 17.2111 11.8855 17.0234 12.0808C16.8358 12.2761 16.699 12.5145 16.625 12.775C16.5554 13.0172 16.5388 13.2716 16.5766 13.5208C16.6143 13.77 16.7055 14.008 16.8438 14.2188L17.0713 14.5513C17.3729 14.9891 17.4957 15.5259 17.4144 16.0514C17.333 16.5769 17.0537 17.0513 16.6338 17.3775L14.875 18.7338C14.6625 18.8962 14.419 19.0135 14.1595 19.0784C13.9 19.1432 13.63 19.1543 13.366 19.1108C13.1021 19.0674 12.8498 18.9704 12.6248 18.8258C12.3997 18.6812 12.2067 18.492 12.0575 18.27L11.9525 18.1213C11.8092 17.9059 11.6137 17.7303 11.3841 17.611C11.1546 17.4916 10.8986 17.4324 10.64 17.4388C10.3932 17.4451 10.1514 17.5094 9.93407 17.6265C9.71672 17.7435 9.52992 17.91 9.38875 18.1125L9.1875 18.4013C9.03826 18.6248 8.84482 18.8155 8.61909 18.9615C8.39336 19.1074 8.14013 19.2056 7.875 19.25C7.76152 19.2611 7.64723 19.2611 7.53375 19.25ZM3.85 10.1675C4.3441 10.3437 4.78995 10.6334 5.15165 11.0134C5.51335 11.3933 5.78081 11.8528 5.9325 12.355V12.46C6.12144 12.9821 6.18348 13.5416 6.1135 14.0923C6.04351 14.6431 5.84351 15.1693 5.53 15.6275C5.47466 15.6886 5.44402 15.7682 5.44402 15.8506C5.44402 15.9331 5.47466 16.0126 5.53 16.0738L7.41125 17.5C7.43579 17.5193 7.46418 17.5331 7.4945 17.5405C7.52482 17.5479 7.55637 17.5487 7.58704 17.5429C7.6177 17.5371 7.64677 17.5248 7.67229 17.5068C7.69781 17.4889 7.7192 17.4657 7.735 17.4388L7.93625 17.15C8.23978 16.7114 8.64513 16.353 9.11755 16.1054C9.58997 15.8578 10.1154 15.7285 10.6488 15.7285C11.1821 15.7285 11.7075 15.8578 12.18 16.1054C12.6524 16.353 13.0577 16.7114 13.3613 17.15L13.4663 17.3075C13.5039 17.3609 13.56 17.3983 13.6238 17.4125C13.653 17.4168 13.6828 17.4152 13.7114 17.4076C13.7399 17.4001 13.7667 17.3869 13.79 17.3688L15.5925 16.0038C15.6556 15.9537 15.6971 15.8813 15.7085 15.8016C15.7199 15.7218 15.7003 15.6407 15.6538 15.575L15.4263 15.2425C15.1298 14.8103 14.9343 14.3169 14.854 13.799C14.7737 13.2811 14.8108 12.7517 14.9625 12.25C15.1163 11.7227 15.3944 11.24 15.7736 10.8426C16.1527 10.4452 16.6218 10.1447 17.1413 9.96625L17.3163 9.905C17.3892 9.87578 17.4476 9.8189 17.4787 9.74677C17.5099 9.67464 17.5112 9.59312 17.4825 9.52L16.8 7.34125C16.7836 7.30313 16.7597 7.26874 16.7296 7.24016C16.6995 7.21158 16.6639 7.18941 16.625 7.175C16.5992 7.16193 16.5708 7.15512 16.5419 7.15512C16.513 7.15512 16.4845 7.16193 16.4587 7.175L16.1613 7.27125C15.658 7.43735 15.1219 7.47873 14.5991 7.39186C14.0764 7.30498 13.5825 7.09244 13.16 6.7725L13.125 6.69375C12.7196 6.38673 12.3909 5.98991 12.1647 5.53445C11.9385 5.07899 11.8209 4.57729 11.8213 4.06875V3.7975C11.8228 3.71316 11.7914 3.63154 11.7338 3.57C11.6834 3.52451 11.6179 3.49953 11.55 3.5H9.3275C9.29185 3.50223 9.257 3.51147 9.22493 3.5272C9.19287 3.54293 9.16422 3.56484 9.14065 3.59167C9.11707 3.6185 9.09902 3.64972 9.08754 3.68354C9.07606 3.71736 9.07138 3.75311 9.07375 3.78875V4.0075C9.0738 4.52991 8.95392 5.04536 8.72333 5.51412C8.49274 5.98288 8.1576 6.39245 7.74375 6.71125L7.63 6.79875C7.18351 7.13869 6.66026 7.36359 6.10636 7.45362C5.55246 7.54365 4.98492 7.49604 4.45375 7.315C4.41401 7.30166 4.37099 7.30166 4.33125 7.315C4.28187 7.345 4.24468 7.39149 4.22625 7.44625L3.5 9.73C3.47468 9.80778 3.48062 9.89236 3.51654 9.96584C3.55247 10.0393 3.61557 10.096 3.6925 10.1238L3.85 10.1675Z" fill="#FF5773"/>
                  <path d="M10.5 13.5625C9.8943 13.5625 9.30219 13.3829 8.79857 13.0464C8.29494 12.7099 7.90241 12.2316 7.67062 11.672C7.43883 11.1124 7.37818 10.4966 7.49635 9.90254C7.61451 9.30847 7.90619 8.76279 8.33449 8.33449C8.76279 7.90619 9.30847 7.61451 9.90254 7.49635C10.4966 7.37818 11.1124 7.43883 11.672 7.67062C12.2316 7.90241 12.7099 8.29494 13.0464 8.79857C13.3829 9.30219 13.5625 9.8943 13.5625 10.5C13.5625 11.3122 13.2398 12.0912 12.6655 12.6655C12.0912 13.2398 11.3122 13.5625 10.5 13.5625ZM10.5 9.1875C10.2404 9.1875 9.98666 9.26448 9.77082 9.4087C9.55498 9.55292 9.38675 9.7579 9.28741 9.99773C9.18807 10.2376 9.16208 10.5015 9.21272 10.7561C9.26336 11.0107 9.38837 11.2445 9.57192 11.4281C9.75548 11.6116 9.98935 11.7366 10.2439 11.7873C10.4985 11.8379 10.7624 11.8119 11.0023 11.7126C11.2421 11.6133 11.4471 11.445 11.5913 11.2292C11.7355 11.0133 11.8125 10.7596 11.8125 10.5C11.8125 10.1519 11.6742 9.81807 11.4281 9.57192C11.1819 9.32578 10.8481 9.1875 10.5 9.1875Z" fill="#FF5773"/>
                </svg>
              </div>
              <span>Edit Profile</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="loginNav__body">
        <div className="loginNav__container _container">
          <Switch>
            <Route exact path={path} component={MyCourses}/>
            <Route exact path={path + '/chat'} component={Chat}/>
            <Route exact path={path + '/promo'} component={PromoCode}/>
            <Route exact path={path + '/edit'} component={EditProfile}/>
            <Route exact path={path + '/payment'} component={Payment}/>
            <Route exact path={path + '/calendar'} component={Calendar}/>
            <Route exact path={path + '/buy'} component={BuySubject}/>
            <Route exact path={path + '/lesson'} component={Lesson}/>
            <Route exact path={path + '/connecting'} component={Connect}/>
            <Route exact path={path + '/watchCourse'} component={WatchCourse}/>


            <Route path={path + '/teacher'} component={TeacherPage}/>
            <Route path={path + '/subject'} component={Subject}/>

            <Route path="*" component={NotFound}/>
          </Switch>
        </div>
      </div>


    </section>
  )
}

export default Login