import React from "react";

const SkipWaitButton = () => {
    const handleSkipWaitClick = () => {
        if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' });
            console.log("Skip waiting done")
        }
    };

    return (
        <button onClick={handleSkipWaitClick}>
            Skip Wait
        </button>
    );
};
export default SkipWaitButton;