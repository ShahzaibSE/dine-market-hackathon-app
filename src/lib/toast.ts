import toast, {Toaster, Toast} from "react-hot-toast";

export const success = (message: string) => toast(message);


export function PopUpToast(message: string, type: string) {
    if(type === "error"){
        toast.error(message);
    }else {
        toast.success(message);
    }
}


