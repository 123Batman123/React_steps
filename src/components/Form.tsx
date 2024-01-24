import { FC, useState } from "react";
import { TypeStep } from "./Steps";

export type TypePropChangeStep = {
    changeStep: React.Dispatch<React.SetStateAction<TypeStep[]>>
}

export const Form: FC<TypePropChangeStep> = ({changeStep}) => {
    const [form, setForm] = useState<TypeStep>({date: '', distance: 0})

    const sortList = (list: TypeStep[]) => { // Функция переводит строку в date, сортирует и возвращает в строку 
        return list.map( i => {
            const splitItem: string[] = i.date.split('.') 
            return {...i, date: new Date(Number(splitItem[2]), Number(splitItem[1])-1, Number(splitItem[0]))}
        }).sort(function(a, b){
            return Number(b.date) - Number(a.date)
        }).map(i => ({
            ...i,
            date: Intl.DateTimeFormat('ru').format(i.date.getTime()),
        }))
    }

    const hundleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        
        changeStep( (prev) => sortList( 
            prev.some( i => i.date == form.date) ? // Проверяем есть ли в State объект с такой датой
            prev.map( (item) => // Если есть, возвращаем массив с измененным обьектом
            (item.date === form.date ? {...item, distance: Number(item.distance) + Number(form.distance)} : item) 
            ) 
            : [...prev, form] // Если нет, добавляем в массив => возвращаем все в сортировку
        ))
    }

    const hundleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const {target:{name, value}} = e
        setForm(prev => ({ ...prev, [name] : value }))
    }
    
    return (
        <form onSubmit={hundleSubmit} action="">
            <input type="text" value={form.date} name='date' onChange={hundleChange}/>
            <input type="text" value={form.distance} name='distance' onChange={hundleChange}/>
            <button>OK</button>
        </form>
    )
}