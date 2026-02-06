import { Result } from "antd";
import Button from "../../../shared/components/buttons/button/button";
import { useNavigate } from "react-router-dom";
import { LoginRoutesEnum } from "../../login/routes";

const PageNotFound = () => {
    const navigate = useNavigate();
    
    const handleBackHome = () => {
        navigate(LoginRoutesEnum.LOGIN);
    }
    return (
        <Result
            status="404"
            title="404 - Page Not Found<"
            subTitle="Sorry, The page you are looking for does not exist."
            extra={<Button onClick={handleBackHome} type="primary" margin={""}>Back Home</Button>}
        />
    );
}

export default PageNotFound;