import { message } from "antd";
import { useEffect, useState } from "react";

export const usePostRequest = (options = {}) =>
    useRequest({ method: "POST", ...options });

export const usePutRequest = (options = {}) =>
    useRequest({ method: "PATCH", ...options });

export const useGetRequest = (options = {}) =>
    useRequest({ method: "GET", ...options });

export const useDeleteRequest = (options = {}) =>
    useRequest({ method: "DELETE", ...options });

export const useRequest = (options = {}) => {
    const [response, setResponse] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});

    const request = async (overrideOptions = {}, sync = false) => {
        setLoading(true);

        try {
            const { data } = await $authHost({
                ...options,
                ...overrideOptions,
            });
            // console.log(data,"data")
            if (!sync) setResponse(data);
            if (data.data !== null) {
                return { response: data, success: true };
            } else {
                return { success: false, error: data.error.message };
            }
        } catch (e) {
            setError(e.response || {});
            if (e.response === undefined) {
                message.warning("Internering slabi");
            } else if (e.response.status >= 500) {
                message.warning("Muommo serverda");
            }

            return { error: e.response, success: false };
        } finally {
            if (!sync) setLoading(false);
        }
    };
    console.log(loading, request, error, response);
    return {
        loading,
        request,
        error,
        response,
    };
};

export const useLoad = (options = {}, dependencies = []) => {
    const request = useGetRequest < T > { ...options };
    useEffect(() => {
        request.request();
    }, dependencies);

    return request;
};
