import viteLogo from '/vite.svg'
import { Anchor, Box, Group, Image, Stack, Text } from '@mantine/core'

const GeneralHomePage = () => {
    return (
        <Box className="w-full h-0 min-h-screen bg-gray-100">
            <Group className="h-full justify-center">
                <Stack className="gap-3">
                    <Image
                        src={viteLogo}
                        alt="Vite Logo"
                        className="mx-auto size-20 mb-3"
                    />
                    <Stack className="gap-2 text-center">
                        <Text className="font-bold text-xl">
                            React 20 + Vite + Tailwind CSS + Mantine
                        </Text>
                        <Text>
                            {'by '}
                            <Anchor
                                href="https://www.github.com/sofyanox12"
                                target="_blank"
                            >
                                @sofyanox12
                            </Anchor>
                        </Text>
                    </Stack>
                </Stack>
            </Group>
        </Box>
    )
}

export default GeneralHomePage
