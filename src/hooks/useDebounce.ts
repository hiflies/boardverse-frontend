import {type DependencyList, useEffect} from "react";

export default function useDebounce(callback: () => void, delay: number, deps: DependencyList) {
    useEffect(() => {
        const timer = setTimeout(() => {
            callback()
        }, delay)
        return () => clearTimeout(timer)
    }, deps)
}