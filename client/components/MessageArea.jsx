'use client';

import { Message } from './Message';

export default function MessageArea() {
    const messages = [
        { date: '2022-03-25T10:15:00', text: 'Hello!', sender: 'bot' },
        {
            date: '2022-03-25T10:16:00',
            text: 'Hi there! How can I help you today?',
            sender: 'bot',
        },
        {
            date: '2022-03-25T10:17:00',
            text: 'I need assistance with my order.',
            sender: 'user',
        },
        {
            date: '2022-03-25T10:18:00',
            text: "Sure, I'd be happy to help with your order. Could you please provide your order number?",
            sender: 'bot',
        },
        { date: '2022-03-25T10:19:00', text: "It's #12345", sender: 'user' },
        { date: '2022-03-25T10:15:00', text: 'Hello!', sender: 'bot' },
        {
            date: '2022-03-25T10:16:00',
            text: 'Hi there! How can I help you today?',
            sender: 'bot',
        },
        {
            date: '2022-03-25T10:17:00',
            text: 'I need assistance with my order.',
            sender: 'user',
        },
        {
            date: '2022-03-25T10:18:00',
            text: "Sure, I'd be happy to help with your order. Could you please provide your order number?",
            sender: 'bot',
        },
        { date: '2022-03-25T10:19:00', text: "It's #12345", sender: 'user' },
        { date: '2022-03-25T10:15:00', text: 'Hello!', sender: 'bot' },
        {
            date: '2022-03-25T10:16:00',
            text: 'Hi there! How can I help you today?',
            sender: 'bot',
        },
        {
            date: '2022-03-25T10:17:00',
            text: 'I need assistance with my order.',
            sender: 'user',
        },
        {
            date: '2022-03-25T10:18:00',
            text: "Sure, I'd be happy to help with your order. Could you please provide your order number?",
            sender: 'bot',
        },
        { date: '2022-03-25T10:19:00', text: "It's #12345", sender: 'user' },
        { date: '2022-03-25T10:15:00', text: 'Hello!', sender: 'bot' },
        {
            date: '2022-03-25T10:16:00',
            text: 'Hi there! How can I help you today?',
            sender: 'bot',
        },
        {
            date: '2022-03-25T10:17:00',
            text: 'I need assistance with my order.',
            sender: 'user',
        },
        {
            date: '2022-03-25T10:18:00',
            text: "Sure, I'd be happy to help with your order. Could you please provide your order number?",
            sender: 'bot',
        },
        { date: '2022-03-25T10:19:00', text: "It's #12345", sender: 'user' },
    ];

    return (
        <div className="flex flex-col h-screen overflow-auto">
            {messages.map((msg, idx) => {
                return <Message text={msg.text} sender={msg.sender} date={msg.date} key={idx} />;
            })}
        </div>
    );
}
