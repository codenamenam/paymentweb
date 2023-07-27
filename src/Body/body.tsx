import { SimpleGrid, Container, Flex, Box, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";

export function Subgrid() {
  const isXs = useMediaQuery("(max-width: 36em)"); // Check for xs size

  const h1Style = {
    marginBottom: isXs ? "20px" : "30px", // Set different marginTop values based on xs size
  };

  const navigate = useNavigate();

  return (
    <Container my="md">
      <Flex direction="column" align="center" justify="center">
        <h1 style={h1Style}>구독 항목을 선택해주세요.</h1>
      </Flex>

      <SimpleGrid cols={3} breakpoints={[{ maxWidth: "xs", cols: 1 }]}>
        <Box
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
            textAlign: "center",
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
            cursor: "pointer",

            "&:hover": {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[5]
                  : theme.colors.gray[1],
            },
          })}
          onClick={() => {
            navigate("/pay", { state: { price: 3000, peorid: "1개월" } });
          }}
        >
          <Text style={{ fontSize: 24 }}>1개월</Text>
          <Text style={{ fontSize: 18, fontWeight: "", color: "gray" }}>
            <br />
          </Text>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>3000원</Text>
        </Box>
        <Box
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
            textAlign: "center",
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
            cursor: "pointer",

            "&:hover": {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[5]
                  : theme.colors.gray[1],
            },
          })}
          onClick={() => {
            navigate("/pay", { state: { price: 8000, peorid: "3개월" } });
          }}
        >
          <Text style={{ fontSize: 24 }}>3개월</Text>
          <Text style={{ fontSize: 18, fontWeight: "", color: "gray" }}>
            {" "}
            9̶0̶0̶0̶원
          </Text>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>8000원</Text>
        </Box>
        <Box
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
            textAlign: "center",
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
            cursor: "pointer",

            "&:hover": {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[5]
                  : theme.colors.gray[1],
            },
          })}
          onClick={() => {
            navigate("/pay", { state: { price: 15000, peorid: "6개월" } });
          }}
        >
          <Text style={{ fontSize: 24 }}>6개월</Text>
          <Text style={{ fontSize: 18, fontWeight: "", color: "gray" }}>
            1̶8̶0̶0̶0̶원
          </Text>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>15000원</Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
}
