import {BackgroundImage, LoginConteiner, LogoImage,LimitedConteiner,TitleLogin} from "../styles/loginScreen.styles"
import { InputDefault } from "../../../shared/inputs/inputDefault/inputDefault";
import Button from  "../../../shared/buttons/button/button";

const LoginScreen = () => {
  return (
    <div>
      <BackgroundImage src="./background.png"/>
      <LoginConteiner>
        <LimitedConteiner>
          <LogoImage src="./logo1.png"/>
        </LimitedConteiner>
        <TitleLogin level={2} type="secondary">LOGIN</TitleLogin>
        <InputDefault title = "Username" />
        <InputDefault title = "Password"/>
        <Button type="primary" margin= "16px 0px 16px 0px">ENTRAR</Button>
      </LoginConteiner>
    </div>
  );
}
export default LoginScreen;
