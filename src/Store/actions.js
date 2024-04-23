import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosIns, { baseURL } from "../Helper/Helper";

export const Init = () => {
    return async dispatch => {
        try {
            const access = await localStorage.getItem('access');
            const user_role = await localStorage.getItem('role');
            const cart = await localStorage.getItem('cart');
            const profile_complete = JSON.parse(await localStorage.getItem('profile_complete'));
            const is_verified = JSON.parse(await localStorage.getItem('is_verified'));
            console.log("init", user_role)
            dispatch(
                {
                    type: 'LOGIN',
                    payload: {
                        access: access,
                        user_role: user_role === null ? 1 : user_role,
                        profile_complete: profile_complete === null ? false : profile_complete,
                        is_verified: is_verified === null ? false : is_verified
                    },
                },
                {
                    type: 'CART',
                    payload: JSON.parse(cart)
                }
            )
        }
        catch (err) {
        }
    }
}

export const LoginAction = (setLoading, data, navigate) => {
    setLoading(true);
    return async dispatch => {
        try {
            let response = await axios.post(baseURL + 'account/login/', data);
            await localStorage.setItem('access', response.data.access);
            await localStorage.setItem('role', response.data.user_role);
            await localStorage.setItem('profile_complete', response.data.is_profile_complete);
            await localStorage.setItem('is_verified', response.data.is_verify);

            dispatch({
                type: 'LOGIN',
                payload: {
                    access: response?.data?.access,
                    user_role: response?.data?.user_role,
                    profile_complete: response?.data?.is_profile_complete,
                    is_verified: response?.data?.is_verify
                },
            })
            setLoading(false);

            if (response?.data?.is_verify) {
                navigate("/")
            }
            else if (!response.data.is_profile_complete) {
                navigate("/kycverification")
            }
            else if (response.data.is_profile_complete && !response.data.is_verify) {
                navigate("/under-verification")

            }

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
                    navigate("/otp", {
                        state: data?.email
                    })
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
            console.log(error)
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



export const patchProfile = (setLoading, data, navigate) => {
    let formData = new FormData();
    formData.append('gst_certificate', data.gst_certificate);
    formData.append('gst_no', data.gst_no);
    formData.append('pan_no', data.pan_no);
    formData.append('pan_card', data.pan_card);
    setLoading(true)
    return async dispatch => {
        await axiosIns.patch(baseURL + `account/edit-profile/`, formData, {
            headers: {
                'content-type': 'multipart/form-data',
            }
        }).then((res) => {
            toast.success("Document Uploading Done under KYC", {
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
                setLoading(false)
                navigate("/")
            }, 2000)
        }).catch((err) => {
            setLoading(false)
            console.log(err?.response?.data)
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
        })
    }
}

export const GetCateogry = () => {
    return async dispatch => {
        await axios.get(baseURL + `product/main-categories/`).then((res) => {
            dispatch({
                type: 'CAT',
                payload: res.data,
            })
        }).catch((err) => {
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
        })
    }
}

export const updateCartAction = (data) => {
    return async dispatch => {
        dispatch({
            type: 'CHANGE_QUANTITY',
            payload: data,
        })
    }
}

export const GetSpotlight = () => {
    return async dispatch => {
        await axios.get(baseURL + `web/spotlights/`).then((res) => {
            dispatch({
                type: 'SPOT',
                payload: res.data,
            })
        }).catch((err) => {
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
        })
    }
}

export const GetBest = () => {
    return async dispatch => {
        await axios.get(baseURL + `web/bestsellers/`).then((res) => {
            dispatch({
                type: 'BEST',
                payload: res.data,
            })
        }).catch((err) => {
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
        })
    }
}

export const GetSubCateogry = (id, setData) => {
    return async dispatch => {
        await axios.get(baseURL + `product/categories/${id}`).then((res) => {
            setData(res.data);
        }).catch((err) => {
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
        })
    }
}

export const GetProducts = (id, setData, setLoading, role) => {
    console.log("dd", role)
    setLoading(true)
    return async dispatch => {
        await axios.get(baseURL + `product/sub-categories/${id}/`)
            .then((res) => {
                setData(res.data)
                setLoading(false);
            }).catch((err) => {
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
                setLoading(false);
            })
    }
}

export const GetProduct = (id, role, setData, setLoading) => {
    console.log(role)
    setLoading(true)
    return async dispatch => {
        await axios.get(baseURL + `product/view/${id}/${role}/`)
            .then((res) => {
                console.log(res.data)
                setData(res.data)
                setLoading(false);
            }).catch((err) => {
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
                setLoading(false);
            })
    }
}

export const LogoutAction = () => {
    return async dispatch => {
        await localStorage.clear()
        dispatch({
            type: "LOGOUT",
            payload: null
        })
    }
}

export const GetPrivacy = (setData, setLoading) => {

    return async dispatch => {
        await axios.get(baseURL + `static-data/privacy-policy/`)
            .then((res) => {
                console.log(res.data)
                setData(res.data)
                setLoading(false);
            }).catch((err) => {
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
                setLoading(false);
            })
    }
}

export const GetBanner = () => {
    return async dispatch => {
        await axios.get(baseURL + `static-data/get-banners/`)
            .then((res) => {
                dispatch({
                    type: 'BANNER',
                    payload: res.data,
                })
            }).catch((err) => {
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
            })
    }
}
export const GetProfile = () => {
    return async dispatch => {
        await axiosIns.get(baseURL + `account/`)
            .then((res) => {
                dispatch({
                    type: 'PROFILE',
                    payload: res.data,
                }
                )
            }).catch((err) => {
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
            })
    }
}


export const GetTerms = (setData, setLoading) => {

    return async dispatch => {
        await axios.get(baseURL + `static-data/terms-and-conditions/`)
            .then((res) => {
                console.log(res.data)
                setData(res.data)
                setLoading(false);
            }).catch((err) => {
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
                setLoading(false);
            })
    }
}

export const GetRefund = (setData, setLoading) => {

    return async dispatch => {
        await axios.get(baseURL + `static-data/refund-cancellation-policy/`)
            .then((res) => {
                console.log(res.data)
                setData(res.data)
                setLoading(false);
            }).catch((err) => {
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
                setLoading(false);
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

export const addCart = (cart, data, setLoading) => {
    setLoading(true)
    return async dispatch => {
        if (cart.length > 0) {
            cart?.map((item) => {
                if (item.product_code === data.product_code) {
                    toast.success('Added to Cart', {
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
                else {
                    cart.push(data)
                    dispatch({
                        type: 'ADD_TO_CART',
                        payload: cart,
                    })
                    console.log(cart)
                    localStorage.setItem("cart", JSON.stringify(cart))
                    toast.success('Added to Cart', {
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
            })
            setLoading(false)
        }
        else {
            cart.push(data)
            dispatch({
                type: 'ADD_TO_CART',
                payload: cart,
            })
            console.log(cart)
            localStorage.setItem("cart", JSON.stringify(cart))
            toast.success('Added to Cart', {
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
        }
    }
}

export const removeCart = (cart, data, setLoading) => {
    setLoading(true)
    return async dispatch => {
        const new_cart = cart.filter(function (item) {
            return item.product_code !== data.product_code
        })
        await localStorage.setItem("cart", JSON.stringify(new_cart))
        toast.success('Updated from Cart', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        dispatch({
            type: 'CART',
            payload: new_cart,
        })
        setLoading(false)
    }
}

export const createOrder = (setLoading, data, navigate) => {
    setLoading(true);
    return async dispatch => {
        try {
            await axiosIns.post(baseURL + 'account/paymenttransactions/', data);
            setLoading(false);
            navigate("/success")
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