import { useContext } from "react";
import { UserContext } from "../context/userContext";

function useAuth() {
    const { userData } = useContext(UserContext);
    const { tokens } = userData;

    const obj = useCallback(() => {
        return {
            isLoggedIn:
                !!Object.values(tokens).length &&
                Object.values(tokens).every(
                    (e) => !!e?.trim() && e !== "undefined"
                ),
            hasProfileData: false,
        };
    }, [tokens]);

    return useMemo(obj, [tokens]);
}

export default useAuth;
