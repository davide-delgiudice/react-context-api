import { createContext, useState } from "react"

const AlertContexts = createContext();

const AlertProvider = ({ children }) => {
    const initialData = { type: "", message: "" };

    const [alertData, setAlertData] = useState(initialData);

    return (
        <AlertContexts.Provider value={{ alertData, setAlertData }}>
            {children}
        </AlertContexts.Provider>
    );
};

export { AlertProvider };