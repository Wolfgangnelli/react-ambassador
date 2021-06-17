import React, {useState, useEffect, SyntheticEvent, Dispatch} from 'react';
import Layout from '../layout/Layout';
import SubmitButton from '../components/SubmitBtn';
import axios from 'axios';
import Form from '../components/Form';
import { connect } from 'react-redux';
import { User } from '../models/user';
import { setUser } from '../redux/actions/user';

const Profile = (props: {user: User, setUser: any}) => {
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPassword_confirmation] = useState("");
    const [message, setMessage] = useState<string | null>(null);

    useEffect(() => {
        setFirst_name(props.user.first_name);
        setLast_name(props.user.last_name);
        setEmail(props.user.email);
        setMessage(null);
    }, [props.user])


    const handleForm = async (e: SyntheticEvent) => {
        e.preventDefault();

        if(e.currentTarget.getAttribute("id") === "account-info") {
            try {
                   const {data} = await axios.put("/users/info", {
                        first_name,
                        last_name,
                        email
                    });
                    props.setUser(data);
                setMessage("Personal info updated!");
            } catch (error) {
                console.log(error);
                setMessage("Personal info not updated!")
            }
        } else {
            try {
                await axios.put("/users/password", {
                    password,
                    password_confirmation
                });
                setMessage("Password updated!")
            } catch (error) {
                console.log(error);
                setMessage("Password not updated!")
            }
        }
    }


    return (
        <Layout>
        <div className="bg-gray-100 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 rounded-md mt-10">
        <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                    <p className="mt-1 text-xs text-gray-600">Use a permanent address where you can receive mail.</p>
                </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
                <Form handleForm={handleForm} message={message} info={"account-info"}>
                        <div className="px-4 py-5 bg-white sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First name</label>
                                    <input value={first_name} onChange={(e) => setFirst_name(e.target.value)} name="firs_name" id="first_name" type="text" className="py-1 px-2 mt-1 block focus:outline-none focus:ring-green-500 focus:border-green-500 w-full shadow-sm sm:text-sm border-gray-300 border rounded-md" />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last name</label>
                                    <input value={last_name} onChange={(e) => setLast_name(e.target.value)} name="last_name" id="last_name" type="text" className="py-1 px-2 mt-1 block focus:outline-none focus:ring-green-500 focus:border-green-500 w-full shadow-sm sm:text-sm border-gray-300 border rounded-md" />
                                </div>
                                <div className="col-span-6 sm:col-span-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" type="email" className="py-1 px-2 mt-1 block focus:outline-none focus:ring-green-500 border border-gray-300 focus:border-green-500 w-full shadow-sm sm:text-sm rounded-md" />
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <SubmitButton name={"Save"} />
                        </div>
                </Form>
            </div>
        </div>
        <div className="hidden sm:block">
            <div className="py-5">
                <div className="border-t border-gray-200"></div>
            </div>
        </div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Password</h3>
                    <p className="mt-1 text-xs text-gray-600">Update password</p>
                </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
                <Form handleForm={handleForm} message={message} info={"password_update"}>
                        <div className="px-4 py-5 bg-white sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                    <input onChange={(e) => setPassword(e.target.value)} name="password" id="password" type="password" className="py-1 px-2 mt-1 block focus:outline-none focus:ring-green-500 focus:border-green-500 w-full shadow-sm sm:text-sm border-gray-300 border rounded-md" />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">Password confirm</label>
                                    <input onChange={(e) => setPassword_confirmation(e.target.value)} name="password_confirmation" id="password_confirmation" type="password" className="py-1 px-2 mt-1 block focus:outline-none focus:ring-green-500 focus:border-green-500 w-full shadow-sm sm:text-sm border-gray-300 border rounded-md" />
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <SubmitButton name={"Save"} />
                        </div>
                </Form>
            </div>
        </div>
        </div>
        </Layout>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
