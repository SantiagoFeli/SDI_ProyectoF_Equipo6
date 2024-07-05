import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";



function Google(){
    const googleLogin = async () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
          .then((result) => {
            const user = result.user;
            console.log(user); 
          })
          .catch((error) => {
            console.error(error); 
          });
    }

    


    return(
        <div>
            <p className="continuar-p" > O continuar con</p>
            <div 
                style={{display:"flex",justifyContent:"center",cursor:"pointer"}}
                onClick={googleLogin}
            >
                <img src={"https://onymos.com/wp-content/uploads/2020/10/google-signin-button-1024x260.png"} 
                alt ="Iniciar con Google"
                width={"60%"} />
                    </div>
        </div>
    )

}

export default Google;