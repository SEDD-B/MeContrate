import { Check, DollarSign, Loader, PenBoxIcon, Star } from "lucide-react";
import Frame from "../shared/components/Dashboard/Frame";
import { useAuth } from "../shared/context/AuthContext";
import { Avatar, Box, Container, Flex, Text } from "@chakra-ui/react";
// import { Outlet } from "react-router";


export default function Dashboard() {
    const { user } = useAuth()
    return (
        <Container
            p={0}
            m={0}
        >
            <Box
                //bg="radial-gradient(circle at top, #222227ff, #111113ff 70%)"
                bg="gray.800"
                width={{base: "xs", md:"100dvw"}}
                height={{base: "100dvh"}}
                justifyContent="center"
                alignContent="start"
                textAlign="end"
            >
                <Flex
                    alignItems="center"
                    justifyContent="flex-end"
                    m={3}
                >
                    <Flex
                        flexDirection="column"
                        alignItems="center"
                        mr={2}
                    >
                        <Text
                            fontSize={"md"}
                            fontWeight={"bold"}
                            alignSelf="end"
                        >
                            {user?.name}
                        </Text>
                        <Text as={"small"}>
                            Desenvolvedor Front-End
                        </Text>
                    </Flex>
                    <Avatar.Root
                        size={"xl"}
                        colorPalette={"green"}
                    >
                        <Avatar.Fallback
                            name={user?.name}
                        />
                    </Avatar.Root>
                </Flex>
                <Flex
                    direction="row"
                    justifyContent="center"
                    gap={16}
                >
                    <Frame
                        title="Ganhos Totais"
                        quantity={8320}
                    >
                        <DollarSign />
                    </Frame>
                    <Frame
                        title="Ofertas"
                        quantity={5}
                    >
                        <PenBoxIcon />
                    </Frame>
                    <Frame
                        title="Em andamento"
                        quantity={3}
                    >
                        <Loader />
                    </Frame>
                    <Frame
                        title="Concluídos"
                        quantity={6}
                    >
                        <Check />
                    </Frame>
                    <Frame
                        title="Avaliação Média"
                        quantity={4.8}
                    >
                        <Star />
                    </Frame>
                </Flex>
            </Box>
        </Container>
    )
}