import { Check, DollarSign, Loader, PenBoxIcon, Star } from "lucide-react";
import Frame from "../shared/components/Dashboard/Frame";
import { useAuth } from "../shared/context/AuthContext";
import { Avatar, Box, Container, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import MonthlyEarningsDarkChart from "../shared/components/Dashboard/MonthlyEarningsDarkChart";
import ProjectTypeDonutDarkChart from "../shared/components/Dashboard/ProjectTypeDonutDarkChart";
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
                width="100dvw"
                minHeight="100dvh"
                height="fit-content"
                justifyContent="center"
                alignContent="start"
                textAlign="end"
                pb={5}
            >
                <Flex
                    alignItems="center"
                    justifyContent="flex-end"
                    mr={{base: 1, md: 3}}
                    my={{base: 2, md: 3}}
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
                    direction={{base: "column", md: "row"}}
                    flexWrap="wrap"
                    justifyContent="center"
                    alignItems="center"
                    gap={{base: 2, md: 16}}
                >
                    <Frame
                        title="Ganhos Totais"
                        quantity={117350.97}
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
                <Grid
                    width="100%"
                    height="fit-content"
                    templateColumns="repeat(12, 1fr)"
                    px={{base: 10, md: 20}}
                    gap={{base: 4, md: 4}}
                    mt={5}
                >
                    <GridItem colSpan={{base: 12, md: 8}}>
                        <MonthlyEarningsDarkChart />
                    </GridItem>
                    <GridItem colSpan={{base: 12, md: 4}}>
                        <ProjectTypeDonutDarkChart />
                    </GridItem>
                </Grid>
            </Box>
            
        </Container>
    )
}