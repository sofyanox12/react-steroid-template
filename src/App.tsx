import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'
import '@mantine/dates/styles.css'
import './index.css'
import { MantineProvider } from '@mantine/core'
import { QueryClientProvider } from '@tanstack/react-query'
import themeConfig from 'shared/setups/themeConfig'
import useGlobalQueryClient from 'shared/hooks/useGlobalQueryClient'
import Router from 'shared/routes'

function App() {
    const queryClient = useGlobalQueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <MantineProvider
                withCssVariables
                theme={themeConfig}
            >
                <Router />
            </MantineProvider>
        </QueryClientProvider>
    )
}

export default App
