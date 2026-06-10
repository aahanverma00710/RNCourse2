import { useContext, useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../utils/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/authContext';

function SignupScreen() {
  const [isAuthentacting, setIsAuthenticating] = useState(false);
  const authContext = useContext(AuthContext)
  async function signUpHandler({ email, password }) {
    setIsAuthenticating(true)
    try {
      const token = await createUser(email, password)
      authContext.authenticate(token)
    } catch (error) {
      Alert.alert("Auth Failed", "Could not sign up please try again")
    }
    setIsAuthenticating(false)
  }
  if (isAuthentacting) {
    return <LoadingOverlay message={"Creating user......"}>

    </LoadingOverlay>
  }
  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
