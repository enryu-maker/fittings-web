import React from "react";
import {
    Drawer,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { OpenCartAction } from "../../Store/actions";
import { AiOutlineClose } from "react-icons/ai";
import CartCard from "./CartCard";

export function Cart() {
    const dispatch = useDispatch()
    const cartOpen = useSelector(state => state.Reducers.cartOpen)
    const closeDrawer = () => {
        dispatch(OpenCartAction(false))
    };

    return (
        <Drawer
            size={450}
            open={cartOpen}
            onClose={closeDrawer}
            style={theme}
        >
            <div className="flex flex-col">
                <div className="w-full  font-Raleway">
                    <div className="flex items-center justify-between px-5  py-4 font-Raleway border-b-2">
                        <p
                            className='capitalize text-black font-black text-3xl tracking-widest'>
                            cart
                        </p>
                        <button
                            onClick={() => {
                                closeDrawer()
                            }}
                        >
                            <AiOutlineClose
                                color="#000"
                                size={30} />
                        </button>
                    </div>

                </div>
                <CartCard />
                <CartCard />
                <div
                    className="py-5 border-t-2 absolute bottom-0 w-full flex justify-center items-center ">
                        <button
                        className="bg-black hover:bg-white hover:text-black hover:border-black hover:border-[1px] transition-all uppercase text-xs text-white font-Raleway font-thin py-3 w-[88%] self-center"
                        >
                            Checkout Rs. 3100.00
                        </button>
                </div>
            </div>
        </Drawer>
    );
}
const theme = {
    drawer: {
        defaultProps: {
            size: 300,
            overlay: true,
            placement: "left",
            overlayProps: undefined,
            className: "",
            dismiss: undefined,
            onClose: undefined,
            transition: {
                type: "tween",
                duration: 0.3,
            },
        },
        styles: {
            base: {
                drawer: {
                    position: "fixed",
                    zIndex: "z-[9999]",
                    pointerEvents: "pointer-events-auto",
                    backgroundColor: "bg-white",
                    boxSizing: "box-border",
                    width: "w-full",
                    boxShadow: "shadow-2xl shadow-blue-gray-900/10",
                },
                overlay: {
                    position: "absolute",
                    inset: "inset-0",
                    width: "w-full",
                    height: "h-full",
                    pointerEvents: "pointer-events-auto",
                    zIndex: "z-[9995]",
                    backgroundColor: "bg-black",
                    backgroundOpacity: "bg-opacity-40",
                    backdropBlur: "backdrop-blur-xs",
                },
            },
        },
    },
};
