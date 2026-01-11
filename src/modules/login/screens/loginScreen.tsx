import {BackgroundImage, LoginConteiner, LogoImage,LimitedConteiner} from "../styles/loginScreen.styles"

const LoginScreen = () => {
  return (
    <div>
      <BackgroundImage src="./background.png"/>
      <LoginConteiner>
        <LimitedConteiner>
          <LogoImage src="./logo.png"/>
        </LimitedConteiner>
      </LoginConteiner>

    </div>
  );
}
export default LoginScreen;
