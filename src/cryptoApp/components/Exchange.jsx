import React from "react";
import {
  Container,
  HStack,
  VStack,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
import Loader from "./Loader";
import Header from "./Header";
import axios from "axios";
import { useEffect } from "react";
import { server } from "../../utils/utils.js";
import ErrorCompoent from "./Error";
import { useState } from "react";
const Exchange = () => {
  const [ExchangeData, setExchage] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState(false);
  useEffect(() => {
    const fetchExchange = async () => {
      try {
        const data = await axios.get(`${server}/exchanges`);
        setExchage(data.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchExchange();
  }, []);

  if (Error) return <ErrorCompoent message={"Error while fetching details!"} />;
  return (
    <>
      <Header />
      <Container maxW="container.xl">
        {Loading ? (
          <Loader />
        ) : (
          //   Horizontal
          <HStack wrap={"wrap"}>
            {ExchangeData
              ? ExchangeData.map((item) => {
                  return (
                    <ExchangeCard
                      name={item.name}
                      key={item.id}
                      rank={item.trust_score_rank}
                      img={item.image}
                      url={item.url}
                    />
                  );
                })
              : null}
          </HStack>
        )}
      </Container>
    </>
  );
};

const ExchangeCard = ({ name, img, rank, url }) => {
  return (
    <>
      <a href={url} target={"blank"}>
        <VStack
          w={52}
          shadow={"lg"}
          p={8}
          borderRadius={"lg"}
          m={4}
          transition={"all 0.3s"}
          css={{
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Image
            src={img}
            w={"10"}
            h={"10"}
            objectFit={"contain"}
            alt={"Exchange"}
          />
          <Heading size={"md"} noOfLines={1}>
            {rank}
          </Heading>
          <Text noOfLines={1}>{name}</Text>
        </VStack>
      </a>
    </>
  );
};
export default Exchange;
