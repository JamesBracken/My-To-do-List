import { Link } from "react-router-dom";
import { generatePKCECredentials } from '../../PKCEHelper';

const Nav = () => {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <button onClick={
                    () => {
                        async function getPKCE() {
                            const PKCECredentials = await generatePKCECredentials()
                            window.location.href = `https://eu-north-1dsoci5dtk.auth.eu-north-1.amazoncognito.com/login/continue?client_id=o817ick1fj45frs5gg42nv0sq&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fauth-callback&response_type=code&scope=email+openid+profile&code_challenge=${PKCECredentials}&code_challenge_method=S256`
                        }
                        getPKCE()
                    }
                }>Cognito login btn</button>
                <a href="">Signup</a>
            </nav>
        </>
    )
}

export default Nav;