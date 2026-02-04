import { Spin } from "antd"
import { useEffect } from "react";
import { Await, useNavigate} from "react-router-dom";
import { getAuthorizationToken, unsetAuthorizationToken} from "../../../shared/functions/connections/auth";
import { LoginRoutesEnum } from "../../login/routes";
import { ProductRoutesEnum } from "../../product/screens/routes";
import { connectAPIGET } from "../../../shared/functions/connections/connection.API";
import { USER_URL } from "../../../shared/constants/url";

const FirstScreen = () => {

  const navigate = useNavigate();
  
  useEffect(() => {
    const verifyToken = async () => {
      const token = getAuthorizationToken();
      if (token) {
        await connectAPIGET(USER_URL)
          .then(() => {
            navigate(ProductRoutesEnum.PRODUCT);
          })
          .catch(() => {
            unsetAuthorizationToken();
            navigate(LoginRoutesEnum.LOGIN);
          });
      }else {
        navigate(LoginRoutesEnum.LOGIN);
      }
    }
    verifyToken();
  }, []);
    
  return <Spin/>
}

export default FirstScreen