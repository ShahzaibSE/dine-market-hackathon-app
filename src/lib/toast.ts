import toast, {Toaster, Toast} from "react-hot-toast";

export const success = (message: string) => toast(message);


export function PopUpToast(message: string, type: string) {
    if(type === "error"){
        return toast(toast.error(message));
    }else {
        return toast(toast.success(message));
    }
}


