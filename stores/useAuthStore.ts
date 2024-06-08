import {api} from "~/api";

export const useAuthStore = defineStore('auth', () => {
    const authData = ref(null);
    const authCookie = useCookie('authData')

    async function signup(data: object) {
        try {
            const res = await api.post('/auth/signup', data);
            saveAuthData(res.data);

        } catch (e:any) {
            throw new Error(e.response.data.message);
        }
    }

    function saveAuthData(data: any) {
        authData.value = data;
        authCookie.value = btoa(JSON.stringify(data));
    }

    function readAuthData() {
        if (authCookie.value && authCookie.value !== null) {
            authData.value = JSON.parse(atob(authCookie.value));
        }
    }

    function deleteAuthData() {
        authCookie.value = null;
        authData.value = null;
    }

    async function signin(data:object) {
        try {
            const res = await api.post('/auth/signin', data);
            saveAuthData(res.data);

        } catch (e:any) {
            throw new Error(e.response.data.message);
        }

    }

    async function signout() {
        if (authData.value) {
            await api.post('/auth/signout', null, {
                headers: {
                    authorization: 'Bearer ' + authData.value.token,
                }
            });
            deleteAuthData()
        }
    }

    readAuthData();

    return {
        authData,
        signup,
        signin,
        signout,
    }
})