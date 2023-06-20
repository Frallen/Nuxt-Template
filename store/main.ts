import {overFlow, setLoading} from "~/composables/mixins";
import {populate} from "~/composables/qsMixins";
import {errorMessage, successMessage} from "~/composables/useAlert";


interface stateType {
    isLoading: boolean
    authModalState: boolean
    serviceModalState: boolean
}

export const useMain = defineStore("main", {
    state: (): stateType => ({
        isLoading: false,
        authModalState: false,
        serviceModalState: false,
    }),
    getters: {},
    actions: {
        //Закрыть все кастомные модальные окна
        async hideAllModals() {
            this.authModalState = false
            this.serviceModalState = false
            overFlow(false)
        },
        async AuthModalChanger(state: boolean) {
            this.authModalState = state
            overFlow(state)
        },
       /* async getAnswers() {
            setLoading(true)
            let {data, error} = await useFetch(
                `${useRuntimeConfig().public.strapi.url}/api/answers?${populate()}}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            if (error.value) {

            } else {
                this.Answers = data.value as answersType
            }
            setLoading(false)
        }*/
    },
});
