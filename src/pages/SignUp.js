function Signup() {
  return (
    <div className="SignUp">
      <div className="body">
        <section className="left"></section>
        <section className="right">
          <div className="rootbeer">
            <div className="floating">
              <img />
            </div>
            <div className="input-container">
              <div className="descript">
                <div className="header">
                  <h1>Hey There!</h1>
                  <span>
                    Sign in to your account to access your cart and shop!
                  </span>
                </div>
                <button>Sign in with Google</button>
              </div>
              <div className="seperator">
                <div className="rectan lefff"></div>
                <span>or</span>
                <div className="rectan righhh"></div>
              </div>
              <div className="input-field">
                <form>
                  <input type="text"></input>
                  <input type="password"></input>
                  <span>Forgot Password</span>
                  <button>Submit</button>
                  <span>
                    Don't have an account? <span>SIgn up</span>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Signup;
