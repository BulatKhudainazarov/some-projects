import React from 'react'
import './App.scss'
import Menu from './Layout/containers/menu/menu'
import Main from "./Layout/containers/main/main";
import Features from "./Layout/containers/features/features";
import Literacy from "./Layout/containers/literacy/literacy";
import Courses from "./Layout/containers/courses/courses";
// import Marathon from "./Layout/containers/marathon/marathon";
import Teachers from "./Layout/containers/teachers/teachers";
import Footer from "./Layout/containers/footer/footer";
import EduCoin from './Layout/containers/educoin/educoin'
import Rating from './Layout/containers/rating/rating'
import SocialLinks from './Layout/containers/socialLinks/socialLinks'
import Progress from './Layout/containers/progress/progress'
import Prices from './Layout/containers/prices/prices'

const menuLinks = [
  {name: 'Негізгі', to: '/'},
  {name: 'Курстар', to: '/'},
  {name: 'Материалдар', to: '/'},
  {name: 'Профильt', to: '/'},
  {name: 'Сілтеме', to: '/'},
  {name: 'Байланыс', to: '/'},
]

function App() {
  return (
    <div className="App">
      {/*<ModalSignIn/>*/}

      <Menu
        links={menuLinks}
        isSignIn={false}
      />


      <Main/>
      <Features/>
      <Courses/>
      {/*<Marathon/>*/}
      <Teachers/>
      <EduCoin/>
      <Rating/>
      <Progress/>
      <Literacy/>
      <Prices/>
      <SocialLinks/>


      <Footer/>
    </div>
  );
}

export default App;