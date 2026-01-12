import {BackgroundImage, LoginConteiner, LogoImage,LimitedConteiner} from "../styles/loginScreen.styles"
import { InputDefault } from "../../../shared/inputs/inputDefault/inputDefault";

const LoginScreen = () => {
  return (
    <div>
      <BackgroundImage src="./background.png"/>
      <LoginConteiner>
        <LimitedConteiner>
          <LogoImage src="./logo.png"/>
        </LimitedConteiner>
        <InputDefault title = "Username" />
        <InputDefault title = "Password"/>
      </LoginConteiner>
    </div>
  );
}
export default LoginScreen;
