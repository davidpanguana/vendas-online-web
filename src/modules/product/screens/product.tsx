
import { useGlobalContext } from "../../../shared/hooks/useGlobalContext";


const Product = ()  => {
  const { user } = useGlobalContext();

  return <h1>{`Welcome ${user?.name || 'Guest'}`}</h1>;
}
export default Product;