import React from "react"
import ReactDOM from "react-dom/client"
import "./GlobalStyle.scss"
import "./libs/styles/reset.scss"
import App from "./App"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { EquipmentModalStoreContextProvider } from "./libs/provider/EquipmentProvider"
import { InventoryStoreContextProvider } from "./libs/provider/InventoryProvider"

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            staleTime: 5000,
        },
    },
})

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
    <React.StrictMode>
        <InventoryStoreContextProvider>
            <EquipmentModalStoreContextProvider>
                <QueryClientProvider client={queryClient}>
                    <App />
                    <ReactQueryDevtools initialIsOpen={false} position="left" />
                </QueryClientProvider>
            </EquipmentModalStoreContextProvider>
        </InventoryStoreContextProvider>
    </React.StrictMode>,
)
