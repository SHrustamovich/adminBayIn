import axios from "axios";
import { domen } from "../constants/urls";
import { getLocalStorage, setLocalStorage } from "./helpers";

const $authHost = axios.create({
    baseURL: `${domen}`,
});

console.log($authHost,"authHost")

$authHost.interceptors.request.use(
    (config) => {
        const accessToken = getLocalStorage("accessToken");

        if (config.headers) {
            if (Boolean(accessToken)) {
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

$authHost.interceptors.response.use(
    (response) => {
        console.log(response,"jjjjj")
        return response;
    },

    async function (error) {
        const originalRequest = error.config;
        let refreshToken = getLocalStorage("refreshToken");

        if (error.response.status === 401 && !!refreshToken) {
            const resulttRes = await $authHost.post(authRefresh, {
                refreshToken: refreshToken,
            });

            if (resulttRes.status === 201) {
                setLocalStorage("accessToken", resulttRes.data.accessToken);

                return $authHost(originalRequest);
            }
        }

        return Promise.reject(error);
    }
);
export { $authHost };
