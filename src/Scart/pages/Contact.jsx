import {
  Heading,
  Box,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  SimpleGrid,
  Tooltip,
  Button
} from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
const Contact = () => {
  return (
    <>
      <Header />
      <Heading textAlign={"center"} mt={4} fontSize={{ base: '24px', md: '36px', lg: '40px' }}>
        Contact Us
        <Box
          margin={"auto"}
          shadow={"lg"}
          w={{base:'600px', md:'500px', sm:'480px'}}
          p={{sm:'4'}}
          mt={2}
          h={'auto'}
          backgroundColor={"white"}
        >
          <HStack p={4}>
            <FormControl isRequired>
            <SimpleGrid columns={{md:'2', sm:'1'}} spacing={2}>
              <Box>
              <FormLabel fontWeight={{sm:'black'}}>First name</FormLabel>
              <Input placeholder="First name" />
              </Box>
              <Box>
              <FormLabel fontWeight={{sm:'black'}}>Last name</FormLabel>
              <Input placeholder="Last name" />
              </Box>
            </SimpleGrid>
            <SimpleGrid mt={2} column={1}>
              <FormLabel fontWeight={{sm:'black'}}>Email</FormLabel>
              <Input type="email" placeholder="abc@gmail.com" />
            </SimpleGrid>
            
            <SimpleGrid mt={2} column={1}>
              <FormLabel fontWeight={{sm:'black'}}>Additional Details</FormLabel>
              <Textarea placeholder='Here is a sample placeholder' />   
            </SimpleGrid>

            <SimpleGrid mt={2} column={1}>
              <Tooltip label="send" aria-label='A tooltip'>
              <Button  color={'#fff'} _hover={false} bgGradient='linear(to-l, #7928CA, #FF0080)'>Send Message</Button>

              </Tooltip>
            </SimpleGrid>
            </FormControl>
          </HStack>
        </Box>
      </Heading>
    </>
  );
};

export default Contact;
