import { Input as InputAntd } from 'antd';
import type { InputProps as InputPropsAntd } from 'antd';
import { BoxInput, TitleInput } from './inputDefault.style';

interface InputDefaultProps extends InputPropsAntd {
    title?: string;
}

export const InputDefault = ( {title, ...props}: InputDefaultProps) =>{
    return (
        <BoxInput>
            {title && <TitleInput>{title}</TitleInput>}
            <InputAntd placeholder="Enter your username" {...props} />
        </BoxInput>
    );
}