 import "@styles/form.css"

const LoginForm = () => {
  return (
    <div className="login-form">

      <div className="mail">
       <p>Email Address</p>
       <input type="email" placeholder="Enter the email" />
      </div>
   
      <div className="pass">
       <p>Password</p>
       <input type="password" placeholder="Enter the password" />
      </div>
      <p className="forget-pass" style={{color:"#346BD4"}}>Forget Password?</p>

       <button>Sign In</button>
    </div>
  )
}

export default LoginForm
