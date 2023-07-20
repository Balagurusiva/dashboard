import '@styles/rightSide.css'
import  Image from 'next/image' 
import LoginForm from './LoginForm'
import img1 from "@public/icons/goole.png"
import img2 from "@public/icons/apple.png"

function RightSide() {
  return (
    <div className='right-side'>
        <div className='login-container'>
            <div className="sign-in-tag">
                <p className='sign-in'>Sign In</p>
                <p className='in-account'>sign in to your account</p>
            </div>
             
            <div className="login-option">
               <div className="option">
                 <Image 
                      src= {img1}
                      width={12}
                      height={12}
                      alt="picture of google" 
                      style={{objectFit: "contain",marginRight:"5px"}}/>
                   <p>Sign in with google</p>
                 </div>
                 <div className="option">
                 <Image 
                      src= {img2}
                      width={12}
                      height={12}
                      alt="picture of google" 
                      style={{objectFit: "contain",marginRight:"5px"}}/>
                   <p>Sign in with Apple</p>
                 </div>
            </div>

             <LoginForm />
        </div>
    </div>
  )
}

export default RightSide
