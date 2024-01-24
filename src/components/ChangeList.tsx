import { FC, MouseEventHandler } from "react";
import { TypeStep } from "./Steps";

type TypePropChangeList = {
    data: TypeStep
    onDelete: MouseEventHandler<HTMLButtonElement>
}

export const ChangeList: FC<TypePropChangeList> = ({data, onDelete}) => {
    return (
        <div className="step">
            <div className="date">
                {data.date}
            </div>
            <div className="distance">
                {data.distance}
            </div>
            <button onClick={onDelete} className="delete">
                x
            </button>
        </div>
    )
}