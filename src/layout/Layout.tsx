import React, {useState, useEffect, Dispatch} from 'react';
import Main from '../components/Main';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import axios from 'axios';
import {connect} from 'react-redux';
import { User } from '../models/user';
import { setUser } from '../redux/actions/user';
import {Redirect} from 'react-router-dom';


const Layout = (props: any) => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
   (
     async () => {
       try {
         const {data} = await axios.get("/user");
  
         props.setUser(data);
       } catch (error) {
         setRedirect(true);
       }
     }
   )()
  }, []);

  if(redirect) {
    return <Redirect to="/login" />
  }

    return (
        <div>
          <Nav />
          <Header title={props.title} />
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
