import { Input as InputAntd } from 'antd';
import type { InputProps as InputPropsAntd } from 'antd';
import { BoxInput, TitleInput } from './inputDefault.style';

interface InputDefaultProps extends InputPropsAntd {
    title?: string;
    margin: string;
}

export const InputDefault = ( {...props}: InputDefaultProps) =>{
    return (
        <BoxInput style = {{margin:props.margin}}>
            {props.title && <TitleInput>{props.title}</TitleInput>}
            <InputAntd placeholder="Enter your username" {...props} />
        </BoxInput>
    );
}