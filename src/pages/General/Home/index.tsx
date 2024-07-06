import steroidVector from 'assets/steroid.svg'
import { Anchor, Box, Group, Image, Stack, Text } from '@mantine/core'

const GeneralHomePage = () => {
    return (
        <Box className="w-full h-0 min-h-screen bg-gray-100">
            <Group className="h-full justify-center">
                <Stack className="gap-3">
                    <Image
                        src={steroidVector}
                        alt="Vite Logo"
                        className="mx-auto size-64 mb-3 animate-pulse"
                    />
                    <Stack className="gap-2 text-center">
                        <Text className="font-bold text-xl text-orange-800">
                            React + Vite + Tailwind CSS + Mantine
                        </Text>
                        <Group className='w-full justify-center gap-3'>
                            <Text>
                                {'by '}
                                <Anchor
                                    href="https://www.github.com/sofyanox12"
                                    target="_blank"
                                >
                                    @sofyanox12
                                </Anchor>
                            </Text>
                            <Box className='animate-spin text-orange-800'>I</Box>
                        </Group>
                    </Stack>
                </Stack>
            </Group>
        </Box>
    )
}

export default GeneralHomePage
