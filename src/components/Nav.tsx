import React, {Dispatch, useState} from 'react';
import DropdownMenu from '../components/DropdownMenu';
import {connect} from 'react-redux';
import { User } from '../models/user';
import { setUser } from '../redux/actions/user';
import {Link} from 'react-router-dom';
import Button from './Button';
import axios from 'axios';
import AuthButton from './AuthBotton';

const Nav = (props: {user: User, setUser: any}) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const loguot = async () => {
        await axios.post("logout");
        props.setUser(null);
    }

    return (
        <nav className="w-full decoration-clone bg-gradient-to-b from-green-500 to-blue-600 h-14 flex justify-around items-center">
            <Link to="/" className="text-white font-semibold uppercase">Ambassador</Link>
            <div className="flex items-center">
            <div className="relative inline-block px-2 py-1">
                <Button setIsActive={setIsActive} isActive={isActive} />
                {isActive && <DropdownMenu />}
            </div>
            <div className="z-10 md:left-auto m-[2px]">
                {!props.user ? (
            <div className="rounded-t-[10px] md:rounded-lg flex items-stretch justify-end px-2 py-1 md:m-1">
                    <Link to="/login" className="bg-black bg-opacity-20 hover:bg-opacity-30 flex mr-1 px-3 py-2 text-xs font-medium text-white rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-50">Login</Link>
                    <Link to="/register" className="bg-black bg-opacity-20 hover:bg-opacity-30 flex mr-1 px-3 py-2 text-xs font-medium text-white rounded-md  focus-visible:outline-none  focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-50">Sign-up</Link>
            </div>
                ) : (
                    <div className="rounded-t-[10px] md:rounded-lg flex items-stretch justify-end px-2 py-1 md:m-1">
                        <button onClick={loguot} className="bg-black bg-opacity-20 hover:bg-opacity-30 flex mr-1 px-3 py-2 text-xs font-medium text-white rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-50">Logout</button>
                        <Link to="/profile" title="profile" className="bg-black bg-opacity-20 hover:bg-opacity-30 flex mr-1 px-3 py-2 text-xs font-medium text-white rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-50 uppercase">{props.user.first_name}</Link>
                   </div>
                )}
            </div>
            </div>
        </nav>
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

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

