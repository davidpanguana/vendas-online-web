import {ButtonAntd} from "./button.styles";
import type {ButtonProps} from 'antd';

interface ButtonCurrentProps extends ButtonProps{
    margin: string;
}
const Button = ({...props}: ButtonCurrentProps) => {
    return <ButtonAntd style = {{margin:props.margin}} {...props}/>;
};

export default Button;