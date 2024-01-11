import { useRef, useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../../context/AuthProvider'
import axios from '../../../api/axios'
const LOGIN_URL = "api/user/login"

const Login = () => {

    const { setAuth } = useContext(AuthContext)
    const emailRef = useRef()
    const errRef = useRef()

    const [email, setEmail] = useState("")
    const [pwd, setPwd] = useState("")
    const [errMsg, setErrMsg] = useState("")
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        emailRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg("")
    }, [email, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ email, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' }
                })
            console.log(response?.data)
            const asesor = response?.data?.asesor
            const contacto = response?.data?.contacto
            const delegacion = response?.data?.delegacion
            const accessToken = response?.data?.accessToken
            setAuth({ email, asesor, contacto, delegacion, accessToken })
            setEmail("")
            setPwd("")
            setSuccess(true)
        } catch (err) {
            if (!err?.response) {
                setErrMsg("No Server Response")
            } else if (err.response?.status === 400) {
                setErrMsg("Missing email or password")
            } else if (err.response?.status === 401) {
                setErrMsg("Unauthorized")
            } else {
                setErrMsg("Login failed")
            }
            errRef.current.focus()
        }
        
        
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="#">Go to Home</a>
                    </p>
                </section>
            ) : (
            <section>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <h1>Sign in</h1>

                <form onSubmit={handleSubmit}>
                    <label htmlFor='email'>Email:</label>
                    <input 
                        type="email" 
                        id="email"
                        ref={emailRef}
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)} 
                        value={email}
                        required
                    />
                    <label htmlFor='password'>Password:</label>
                    <input 
                        type="password" 
                        id="password"
                        onChange={(e) => setPwd(e.target.value)} 
                        value={pwd}
                        required
                    />
                    <button>Sign In</button>
                </form>
                <p>
                    Need an account? <br />
                    <span className='line'>
                        <Link to="/register">
                            <a href="#">Sign up</a>
                        </Link>
                    </span>
                </p>
            </section>
            )}
        </>
    )
}

export default Login