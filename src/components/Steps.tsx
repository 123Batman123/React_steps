import { FC, useState } from "react"
import { Form } from "./Form"
import { ChangeList } from "./ChangeList"
import { NameColumn } from "./NameColumn"

export type TypeStep = {
    date: string
    distance: number
}

export const Steps: FC = () => {
    const [listSteps, setListSteps] = useState<TypeStep[]>([
        {date: '12.02.2017', distance: 15},
        {date: '15.01.2015', distance: 20},
        {date: '15.01.2013', distance: 20},
    ])

    const delEl = (el:TypeStep) => setListSteps(listSteps.filter(i => i != el))

    return (
        <>
            <NameColumn name="Дата (ДД.ММ.ГГ)" distance="Пройдено км"/>
            <Form changeStep={setListSteps}/>
            <div className="list-steps">
                <NameColumn name="Дата (ДД.ММ.ГГ)" distance="Пройдено км" actions="Действия"/>
                {listSteps.map((item, i) => (
                    <ChangeList key={i} data={item} onDelete={() => delEl(item)}/>
                ))}
            </div>
        </>
    )
}
