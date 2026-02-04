import {BackgroundImage, LoginConteiner, LogoImage,LimitedConteiner,TitleLogin} from "../styles/loginScreen.styles"
import { InputDefault } from "../../../shared/components/inputs/inputDefault/inputDefault";
import Button from  "../../../shared/components/buttons/button/button";
import {useState } from "react";
import { useRequests } from "../../../shared/hooks/useRequests";
import type { UserType } from "../types/userType";


const LoginScreen = () => {

  const [username, setUsername] = useState('');
  const [userPassword, setPassword] = useState('');
  const { authRequest, loading } = useRequests();



  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setUsername(event.target.value);
  }
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setPassword(event.target.value);
  }

  const handligLogin = () => {
    // Send a POST request
    authRequest( {
        email: username,
        password: userPassword,
      });
    }
  return (
    <div>
      <BackgroundImage src="./background.png"/>
      <LoginConteiner>
        <LimitedConteiner>
          <LogoImage src="./logo1.png"/>
        </LimitedConteiner>
        <TitleLogin level={2} type="secondary">LOGIN</TitleLogin>
        <InputDefault title = "Username" margin= "16px 0px 16px" onChange={handleUsername} value={username} />
        <InputDefault type = 'password' title = "Password" margin= "16px 0px 16px" onChange={handlePassword} value={userPassword}/>
        <Button loading={loading} type="primary" margin= "16px 0px 16px 0px" onClick={handligLogin} >ENTRAR</Button>
      </LoginConteiner>
    </div>
  );
}
export default LoginScreen;
