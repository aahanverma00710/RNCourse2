import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../utils/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';

function SignupScreen() {
  const [isAuthentacting, setIsAuthenticating] = useState(false);
  async function signUpHandler({ email, password }) {
    setIsAuthenticating(true)
    await createUser(email, password)
    setIsAuthenticating(false)
  }
  if (isAuthentacting) {
    return <LoadingOverlay message={"Creating user......"}>

    </LoadingOverlay>
  }
  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
