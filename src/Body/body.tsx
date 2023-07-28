import { SimpleGrid, Container, Flex, Box, Text, Modal } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Subgrid() {
  const isXs = useMediaQuery("(max-width: 36em)"); // Check for xs size

  const h1Style = {
    marginBottom: isXs ? "20px" : "30px", // Set different marginTop values based on xs size
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
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
      <Flex justify="flex-end">
        <Text
          style={{
            fontSize: 18,
            color: "#4DABF7",
            fontWeight: "bold",
            paddingTop: "10px",
          }}
          onClick={toggleModal}
        >
          환불 규정 안내 &gt;
        </Text>
      </Flex>
      <Modal opened={isModalOpen} onClose={toggleModal} centered>
        <Text
          style={{ fontSize: 20, fontWeight: "bold", padding: "0 0 10px 0" }}
        >
          환불 규정 안내
        </Text>
        <Text style={{ fontWeight: "bold", padding: "0 0 6px 0" }}>
          1. 결제자는 도파민 디펜스에 환불을 요구할 수 있습니다. 환불 정책은
          도파민 디펜스가 안내하는 정책 및 방법에 따라 진행됩니다.
        </Text>
        <Text style={{ fontWeight: "bold", padding: "0 0 3px 0" }}>
          2. 도파민 디펜스의 환불 정책은 다음과 같습니다.
        </Text>
        <Text style={{ fontSize: "15px", padding: "0 0 2px 0" }}>
          가) 결제 후 서비스를 한번도 사용하지 않았다면 환불이 가능합니다.
          '서비스를 한번도 사용하지 않았다'는 것은 도파민 디펜스의 컨텐츠를
          요약해서 챗봇에게 전송한 적이 없음을 의미합니다.
        </Text>
        <Text style={{ fontSize: "15px", padding: "0 0 6px 0" }}>
          나) 결제 후 서비스를 한번이라도 사용했다면 환불이 불가능합니다.
          '서비스를 한번이라도 사용했다'는 것은 도파민 디펜스의 컨텐츠를
          요약해서 챗봇에게 전송한 적이 1회 이상 있음을 의미합니다.
        </Text>
        <Text style={{ fontWeight: "bold", padding: "0 0 10px 0" }}>
          3. 환불 시에는 전액 환불을 원칙으로 하며, 토스페이먼츠를 이용한 결제
          취소 또는 계좌이체로 환불을 진행합니다.
        </Text>
        <Flex justify="flex-end">
          <Text style={{ padding: "0 0 5px 0", fontSize: "12px" }}>
            최종 수정일: 2023.07.28
          </Text>
        </Flex>
      </Modal>
    </Container>
  );
}
