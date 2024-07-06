import { QueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'

const useGlobalQueryClient = () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: 1,
                refetchOnWindowFocus: false,
                throwOnError(error) {
                    // Throw error...

                    return !(error instanceof AxiosError)
                },
            },
            mutations: {
                onError() {
                    // Handle error...
                },
            },
        },
    })

    return queryClient
}

export default useGlobalQueryClient
