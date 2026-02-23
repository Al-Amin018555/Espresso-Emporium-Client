import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {

    const userInfo = {
        name: "alamin",
    };
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;