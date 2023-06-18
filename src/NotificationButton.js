import React from 'react';

const NotificationButton = () => {
    const handleNotificationClick = () => {
        if ('Notification' in window && Notification.permission === 'granted') {
            showNotification();
        } else if ('Notification' in window && Notification.permission !== 'denied') {
            Notification.requestPermission().then(function (permission) {
                if (permission === 'granted') {
                    showNotification();
                }
            });
        }
    };

    const showNotification = () => {
        const notificationOptions = {
            body: 'Dit is een notificatie!',
        };

        new Notification('Nieuwe notificatie', notificationOptions);
    };

    return (
        <button onClick={handleNotificationClick}>
            Toon Notificatie
        </button>
    );
};

export default NotificationButton;