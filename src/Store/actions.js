import axios from "axios";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { baseURL } from "../Helper/Helper";


export const LoginAction = (setLoading, data, navigate) => {
    setLoading(true);
    return async dispatch => {
        try {
            let response = await axios.post(baseURL + 'account/login/', data);
            await localStorage.setItem('access', response.data.access);
            dispatch({
                type: 'LOGIN',
                payload: response.data.access,
            })
            setLoading(false);
            navigate("/")
        } catch (error) {
            toast.error(error.response.data.msg, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setLoading(false);
        }
    }
}

export const RegisterAction = (setLoading, data, navigate) => {
    return async dispatch => {
        setLoading(true);
        try {
            let response = await axios.post(baseURL + 'account/register/', data);
            if (response.status === 201) {
                toast.success('Account Created Sucessfully Please Verify Otp', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setTimeout(() => {
                    navigate("/otp")
                }, 1500)
            }
            else {
                toast.error(response?.data?.msg, {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            setLoading(false);
        } catch (error) {
            toast.error(error?.response?.data?.msg, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setLoading(false);
        }
    }
}

export const VerifyAction = (data, navigate, setLoading) => {
    setLoading(true)
    return async dispatch => {
        await axios.post(baseURL + 'account/verify/', data)
            .then(res => {
                if (res.status === 200) {
                    toast.success("OTP verified Successfully", {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    setTimeout(() => {
                        navigate('/login')
                        setLoading(false)
                    }, 3000)
                }
            })
            .catch(err => {
                toast.error(err?.response?.data?.msg, {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setLoading(false)
            })
    }
}



export const OpenCartAction = (status) => {
    return async dispatch => {
        dispatch({
            type: 'OPEN_CART',
            payload: status,
        })
    }
}