import { use } from "react";
import { AuthContext } from "../contexts/AuthContext";

const SignIn = () => {

    const { signInUser } = use(AuthContext);

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                const userInfo = {
                    email,
                    lastSignInTime: result.user.metadata.lastSignInTime,
                }
                fetch('https://espresso-emporium-server-opal-three.vercel.app/user', {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                   
            })
            .catch(error => alert(error))
    }
    return (
        <div className="card bg-base-100 max-w-sm mx-auto my-6 shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Sign In now!</h1>
                <form onSubmit={handleSignIn} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" name="email" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" name="password" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;