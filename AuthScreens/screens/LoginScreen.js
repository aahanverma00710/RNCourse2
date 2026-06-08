import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { login } from '../utils/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
function LoginScreen() {
  const [isLoggingUser, setIsLogginUser] = useState(false);
  async function loginHandler({ email, password }) {
    setIsLogginUser(true)
    await login(email, password)
    setIsAuthenticating(false)
  }
  if (isLoggingUser) {
    return <LoadingOverlay message={"Loggin user......"}>

    </LoadingOverlay>
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
