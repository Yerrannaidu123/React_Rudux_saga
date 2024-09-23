// hooks/useMutationObserver.js
import { useEffect } from 'react';

export const useMutationObserver = (targetNode, callback, options) => {
    useEffect(() => {
        if (!targetNode) return;

        const observer = new MutationObserver(callback);
        observer.observe(targetNode, options);

        return () => observer.disconnect();
    }, [targetNode, callback, options]);
};