import { Box, Flex, Text } from "@chakra-ui/react";

import React from "react";

interface FrameProps {
    title: string;
    quantity: number;
    children?: React.ReactNode;
}

export default function Frame({ title, quantity, children }: FrameProps) {
    return (
        <Flex
            width="190px"
            height="100px"
            justifyContent="space-evenly"
            alignItems="center"
            direction="column"
            // borderImage="linear-gradient(90deg, #2a5cff, #c46cff) 1"
            // borderImageSlice="1"
            bg="radial-gradient(#222222, #141414) padding-box,
                linear-gradient(90deg, #2a5cff, #c46cff) border-box"
            borderRadius="3xl"
            border="2px solid transparent"
            mt={5}
            cursor="pointer"
            transition="2s ease-in-out"
            _hover={{bg:"radial-gradient(#151515, #111111) padding-box, linear-gradient(90deg, #2a5cff, #c46cff) border-box"}}
        >
            <Box>
                <Text
                    fontSize="xl"
                    fontWeight="bold"
                >{title}</Text>
            </Box>
            <Box
                animation="pulse"
            >
                {children}
            </Box>
            <Box>
                <Text
                    fontSize="2xl"
                    fontWeight="bold"
                >{quantity}</Text>
            </Box>
        </Flex>
    )
}