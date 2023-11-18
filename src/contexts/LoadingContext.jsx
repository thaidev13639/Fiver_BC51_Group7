import { createContext, useState } from "react"

const DEFAULT_STATE = {
    isLoading: false,
}

export const LoadingContext = createContext(DEFAULT_STATE)

export const LoadingProvider = (props) => {
    const [loading, setLoading] = useState(DEFAULT_STATE)

    document.querySelector("body").style.overflow = loading.isLoading ? "hidden" : "unset";

    return (
        <LoadingContext.Provider value={[loading, setLoading]}>
            {
                loading.isLoading && (
                    <div className="wrapper-loading">
                        <div className="loader" />
                    </div>
                )
            }
            {props.children}
        </LoadingContext.Provider>
    )
}