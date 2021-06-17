import React, {useState, useEffect, Dispatch} from 'react';
import Main from '../components/Main';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import axios from 'axios';
import {connect} from 'react-redux';
import { User } from '../models/user';
import { setUser } from '../redux/actions/user';
import {useLocation} from 'react-router-dom';


const Layout = (props: any) => {
  let location = useLocation();

  useEffect(() => {
   (
     async () => {
       try {
         const {data} = await axios.get("/user");
  
         props.setUser(data);
       } catch (error) {
       }
     }
   )()
  }, []);

let header;
if(location.pathname === "/" || location.pathname === "/backend" || location.pathname === "/frontend") {
  header =  <Header />;
}


    return (
        <div>
          <Nav />
         {header}
          <Main>
            {props.children}
          </Main>
          <Footer />
        </div>
    )
}

const mapStateToProps = (state: {user: any}) => {
  return {
    user: state.user.user
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    setUser: (user: User) => dispatch(setUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
