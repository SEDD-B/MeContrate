import { NotebookPen } from "lucide-react";
import Frame from "../components/Dashboard/Frame";
import { useAuth } from "../context/AuthContext";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
// import { Outlet } from "react-router";


export default function Dashboard() {
    const { user } = useAuth()
    return (
        <Box
            bg="radial-gradient(circle at top, #1a1a1d, #0f0f10 70%)"
            width={{base: "xs", md:"100dvw"}}
            height={{base: "100dvh"}}
            justifyContent="center"
            alignContent="center"
        >
            <Container
                width={{base: "xs", md: "90dvw"}}
                height={{base: "xs", md: "90dvh"}}
                bg="gray.900"
                borderRadius={{base: "none", md: "lg"}}
                boxShadow="0 8px 32px rgba(0,0,0,0.6)"
                flexDirection="column"
                p={5}
            >
                <Text
                    fontSize={"3xl"}
                    fontWeight={"bold"}
                >
                    Olá, {user?.name} Gustavo
                </Text>
                <Flex
                    direction="row"
                    justifyContent="center"
                    gap={24}
                >
                    <Frame
                        title="Ofertas"
                        quantity={5}
                    >
                        <NotebookPen />
                    </Frame>
                    <Frame
                        title="Em andamento"
                        quantity={3}
                    />
                    <Frame
                        title="Concluídos"
                        quantity={6}
                    />
                </Flex>
            </Container>
        </Box>
    )
}