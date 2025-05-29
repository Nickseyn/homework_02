import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'

/*
* 5 - сделать стили в соответствии с дизайном
* */

export type MessageType = {
    id: number
    user: UserType
    message: MessageContentType
}

type UserType = {
    avatar: string
    name: string
}

type MessageContentType = {
    text: string
    time: string
}

export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar, // можно менять
        name: 'Nickseyn',  // можно менять
    },
    message: {
        text: 'Sup homie, u straight?', // можно менять
        time: '22:00', // можно менять
    },
}

export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar, // можно менять
        name: 'WTFMan', // можно менять
    },
    message: {
        text: 'Same ol’, tryna git gud at this dev shit', // можно менять
        time: '22:02', // можно менять
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                <div>
                    <Message message={message0}/>
                    <FriendMessage message={friendMessage0}/>
                </div>
                <MessageSender M={Message}/>
            </div>
        </div>
    )
}

export default HW1
