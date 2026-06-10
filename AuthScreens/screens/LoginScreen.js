import { useContext, useState } from 'react';
import { AuthContext } from '../store/authContext';;
import AuthContent from '../components/Auth/AuthContent';
import { login } from '../utils/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { Alert } from 'react-native';
function LoginScreen() {
  const [isLoggingUser, setIsLogginUser] = useState(false);
  const authContext = useContext(AuthContext)
  async function loginHandler({ email, password }) {
    setIsLogginUser(true)
    try {
      const token = await login(email, password)
      authContext.authenticate(token)
    } catch (error) {
      Alert.alert("Auth Failed", "Could not login please try again")
    }

    setIsLogginUser(false)
  }
  if (isLoggingUser) {
    return <LoadingOverlay message={"Loggin user......"}>

    </LoadingOverlay>
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
