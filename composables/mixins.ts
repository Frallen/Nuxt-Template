import {useMain} from "~/store/main";


export const overFlow = (state: boolean): void => {
    if (process.client) {
        if (state) {
            document.body.style.overflowY = "hidden";
        } else document.body.style.overflowY = "visible";
    }
};
export const setLoading = (loading: boolean): void => {
    useMain().isLoading = loading;
    overFlow(loading)
}



export const scrollTop = (): void => {
    if (process.client) {
        window.scrollTo({
            top: 300,
            behavior: "smooth",
        });
    }
}
/*
export const calcSession = <T>(data: T): number => {
    return data.reduce(
        (total, item) => item.Price + total,
        0)
}

*/




