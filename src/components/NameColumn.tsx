import { FC } from "react"

type TypePropsNameColumn = {
    name: string
    distance: string
    actions?: string
}

export const NameColumn: FC<TypePropsNameColumn> = ({name, distance, actions}) => {
    return (
        <div className="step column-names">
            <div className="date">
                {name}
            </div>
            <div className="distance">
                {distance}
            </div>
            {actions && <div className="delete">
                {actions}
            </div>}
        </div>
    )
}