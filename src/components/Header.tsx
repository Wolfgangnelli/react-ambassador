import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { formatCurrency } from '../helpers';
import { User } from '../models/user';
import AuthBotton from './AuthBotton';

const Header = (props: {user: User}) => {
    const [title, setTitle] = useState<string>("Welcome!");
    const [description, setDescription] = useState<string>("Share links to earn money");


useEffect(() => {
    if(props.user?.id) {
        setTitle(`${formatCurrency(+props.user.revenue)}`);
        setDescription("You have earn this far");
    } else {
        setTitle("Welcome!");
        setDescription("Share links to earn money");
    }

}, [props.user])

    return (
        <header className="py-4 flex flex-col items-center">
            <h1 className="text-4xl text-center p-1">{title}</h1>
            <p className="p-1 mt-2">{description}</p>
            {!props.user && 
            <p className="flex flex-wrap">
                <Link to="/login">
                    <AuthBotton name={"Login"} />
                </Link>
                <Link to="/register">
                    <AuthBotton name={"Register"} />
                </Link>
            </p>
            }
        </header>
    )
}

const mapStateToProps = (state: {user: any}) => ({
        user: state.user.user
});

export default connect(mapStateToProps)(Header);
