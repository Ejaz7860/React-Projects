import React from "react";
import { Button, Container, HStack } from "@chakra-ui/react";
import Loader from "./Loader";
import Header from "./Header";
import axios from "axios";
import { useEffect } from "react";
import { server } from "../../utils/utils.js";
import ErrorCompoent from "./Error";
import { useState } from "react";
import CoinCard from "./CoinsCard";
const Coins = () => {
  const [CoinsData, setCoins] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [curreny, setCurrency] = useState("inr");

  const currencySymbol =
    curreny === "inr" ? "₹" : curreny === "eur" ? "€" : "$";
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const data = await axios.get(
          `${server}/coins/markets?vs_currency=${curreny}&page=${page}`
        );
        console.log(data.data);
        setCoins(data.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [curreny, page]);

  // Array for pagination
  const btnArray = new Array(132);
  const changePage = () => {
    setPage(2);
    setLoading(true);
  };

  if (Error) return <ErrorCompoent message={"Error while fetching details!"} />;
  return (
    <>
      <Header />
      <Container maxW="container.xl">
        {Loading ? (
          <Loader />
        ) : (
          //   Horizontal
          <>
            <HStack wrap={"wrap"}>
              {CoinsData
                ? CoinsData.map((item) => {
                    return (
                      <CoinCard
                        id={item.id}
                        name={item.name}
                        key={item.id}
                        symbol={item.symbol}
                        img={item.image}
                        price={item.current_price}
                        currencySymbol={currencySymbol}
                      />
                    );
                  })
                : null}
            </HStack>

            <HStack w={"full"} overflow={"auto"} p={"8"} >
              {btnArray.map((item, index) => {
                return(
                  <Button
                  bgColor={"blackAlpha.900"}
                  color={"white"}
                  onClick={() => changePage(index + 1)}
                >
                  {index + 1}
                </Button>
                )
              })}
            </HStack>
          </>
        )}
      </Container>
    </>
  );
};

export default Coins;
