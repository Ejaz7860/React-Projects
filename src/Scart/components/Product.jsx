import {
  Container,
  Image,
  Box,
  Badge,
  SimpleGrid,
  Button,
  Heading
} from "@chakra-ui/react";
import React from "react";
import Header from "./Header";
import Sidebar from "./sidebar";
import Img1 from "../Assests/c1.jpg";
import Img2 from "../Assests/c2.jpg";
import Img3 from "../Assests/c3.jpg";
import Img4 from "../Assests/c4.jpg";
import Img5 from "../Assests/c5.jpg";
import Img6 from "../Assests/c6.jpg";




const Product = () => {
  return (
    <div style={{width:'100%',height:'100vh',overflowX:'hidden'}}>
      <Header />
      <Sidebar/>
      <Container  w={'100%'}>
        <SimpleGrid columns={{md:'3', sm:'1'}} m={2} justifyContent={{sm:'center'}}>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg"  m={2} overflow="hidden">
            <Image src={Img1} alt={""} />

            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  New
                </Badge>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                Canon I
              </Box>

              <Box>$1900.00</Box>

              <Box display="flex" mt="2" flexDirection={{sm:'column'}} alignItems="center" justifyContent={{sm:'flex-start'}}>
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  34 reviews
                </Box>
                {/*               <Button>Add to cart</Button>
                 */}

                <Box as="span" mr="2" color="gray.600" fontSize="sm">
                  <Button colorScheme='pink' >cart</Button>{" "}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" m={2} overflow="hidden">
            <Image src={Img2} alt={""} />

            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  New
                </Badge>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                Canon I
              </Box>

              <Box>$1900.00</Box>

              <Box display="flex" mt="2" alignItems="center" justifyContent={'space-between'}>
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  34 reviews
                </Box>
                {/*               <Button>Add to cart</Button>
                 */}

                <Box as="span" mr="2" color="gray.600" fontSize="sm">
                  <Button colorScheme='pink' >Add to cart</Button>{" "}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" m={2} overflow="hidden">
            <Image src={Img3} alt={""} />

            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  New
                </Badge>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                Canon I
              </Box>

              <Box>$1900.00</Box>

              <Box display="flex" mt="2" alignItems="center" justifyContent={'space-between'}>
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  34 reviews
                </Box>
                {/*               <Button>Add to cart</Button>
                 */}

                <Box as="span" mr="2" color="gray.600" fontSize="sm">
                  <Button colorScheme='pink' >Add to cart</Button>{" "}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" m={2} overflow="hidden">
            <Image src={Img4} alt={""} />

            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  New
                </Badge>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                Canon I
              </Box>

              <Box>$1900.00</Box>

              <Box display="flex" mt="2" alignItems="center" justifyContent={'space-between'}>
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  34 reviews
                </Box>
                {/*               <Button>Add to cart</Button>
                 */}

                <Box as="span" mr="2" color="gray.600" fontSize="sm">
                  <Button colorScheme='pink' >Add to cart</Button>{" "}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" m={2} overflow="hidden">
            <Image src={Img5} alt={""} />

            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  New
                </Badge>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                Canon I
              </Box>

              <Box>$1900.00</Box>

              <Box display="flex" mt="2" alignItems="center" justifyContent={'space-between'}>
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  34 reviews
                </Box>
                {/*               <Button>Add to cart</Button>
                 */}

                <Box as="span" mr="2" color="gray.600" fontSize="sm">
                  <Button colorScheme='pink' >Add to cart</Button>{" "}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" m={2} overflow="hidden">
            <Image src={Img6} alt={""} />

            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  New
                </Badge>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                Canon I
              </Box>

              <Box>$1900.00</Box>

              <Box display="flex" mt="2" alignItems="center" justifyContent={'space-between'}>
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  34 reviews
                </Box>
                {/*               <Button>Add to cart</Button>
                 */}

                <Box as="span" mr="2" color="gray.600" fontSize="sm">
                  <Button colorScheme='pink' >Add to cart</Button>{" "}
                </Box>
              </Box>
            </Box>
          </Box>

        </SimpleGrid>
        
      </Container>
    </div>
  );
};

export default Product;
