import React from 'react'
import s from './Message.module.css'

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: {
        id: number,
        user: {
            avatar: any,
            name: string
        },
        message: {
            text: string,
            time: string
        }
    }

}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + props.message.id}
                    src={props.message.user.avatar} alt={'User Avatar'}
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        <span>{props.message.user.name}</span>
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                     {props.message.message.text}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                <span>{props.message.message.time}</span>
            </div>
        </div>
    )
}

export default Message
