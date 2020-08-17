import React, { useState } from 'react';
import { MainDiv, CircleButton } from './Card.styles';

export type Status = 'open' | 'completed';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    body?: string;
    dueDate?: string;
    dateCompleted?: string;
    status: Status;
};

export const Card: React.FC<CardProps> = ({ title, body, dueDate, dateCompleted, status}) => {
    const [cardStatus, setCardStatus] = useState(status)
    return(
        <MainDiv status={cardStatus}>
            {cardStatus === 'open' ? <CircleButton /> : null}
            <div>
                {title}
                {body}
                {dueDate}
                {dateCompleted}
            </div>
        </MainDiv>
    );
}