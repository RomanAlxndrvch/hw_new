import React, {
    SelectHTMLAttributes,
    DetailedHTMLProps,
    ChangeEvent, MouseEventHandler,
} from 'react'
import s from './SuperSelect.module.css'
import {themesType} from "../../../hw12/HW12";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: themesType
    onChangeOption?: (option: number) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({
                                                         options,
                                                         className,
                                                         onChange,
                                                         onChangeOption,
                                                         ...restProps
                                                     }) => {
    const mappedOptions: any[] = options
        ? options.map((o) => (
            <option
                id={'hw7-option-' + o.id}
                className={s.option}
                key={o.id}
                value={o.id}
            >
                {o.value}
            </option>
        ))
        : [] // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChangeOption) onChangeOption(parseInt(e.currentTarget.value))
        if (onChange) onChange(e)
    }

    const finalSelectClassName = s.select + (className ? ' ' + className : '')

    return (
        <select
            className={finalSelectClassName}
            onChange={onChangeCallback}
            {...restProps}
        >
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
