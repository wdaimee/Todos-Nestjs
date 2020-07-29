import { icons } from './icons';
import { Color } from 

export type IconType = keyof typeof icons;

export interface IconProps extends React.HTMLAttributes<HTMLOrSVGElement>{
    icon: IconType;
    size?: string | number;
    color?: string;
}

const BaseIcon: React.FC<IconProps> = ({ icon, ...props }) => {
    const Ikon = icons[icon];
    if (!Ikon) return null;
    return <Ikon {...props} />;
}

export const Icon = styled(BaseIcon)`
    height: ${props => props.size};
    width: ${props => props.size};
    color: ${props => props.theme.colors[color]}

    path, polygon {
        fill: currentColor;
    }
`;