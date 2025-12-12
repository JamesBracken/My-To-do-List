const AuthCallbackPage = () => {
    const AuthReturnedCode = window.location.search.split("&")[0]
        .replace("?code=", "")
    const codeChallenge = sessionStorage.getItem("codeChallenge");
    sessionStorage.removeItem("codeChallenge")
    return (
        <>
            <h1>Auth callback</h1>
        </>
    )
}
export default AuthCallbackPage;