import { Box, Flex, Text } from "@chakra-ui/react";

import React from "react";

interface FrameProps {
    title: string;
    quantity: number;
    children?: React.ReactNode;
}

export default function Frame ({ title, quantity, children }: FrameProps) {
    return (
        <Flex
            width="fit-content"
            height="90px"
            justifyContent="space-around"
            alignItems="center"
            direction="row"
            //borderImage="linear-gradient(90deg, #2a5cff, #c46cff) 1"
            //borderImageSlice="1"
            bg="gray.950"
            borderRadius="3xl"
            border="2px solid transparent"
            p={5}
            gap={3}
            cursor="pointer"
            transition="2s ease-in-out"
            _hover={{bg:"radial-gradient(#151515, #111111) padding-box, linear-gradient(90deg, #2a5cff, #c46cff) border-box"}}
        >
            <Flex
                width="50px"
                height="50px"
                bg="gray.800"
                alignItems="center"
                justifyContent="center"
                borderRadius="md"
            >
                {children}
            </Flex>
            <Flex
                flexDirection="column"
                alignItems="start"
                justifyContent="center"
            >
                <Box>
                    <Text
                        fontSize="3xl"
                        fontWeight="bold"
                    >{ title == "Ganhos Totais" ? (`R$${quantity.toLocaleString()}`) : (`${quantity}`)}</Text>
                </Box>
                <Box
                    mt={-3}
                >
                    <Text
                        fontSize="md"
                        fontWeight="bold"
                    >{title}</Text>
                </Box>
            </Flex>
        </Flex>
    )
}