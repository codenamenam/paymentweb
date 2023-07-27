import { useSearchParams } from "react-router-dom";
import { HeaderSimple } from "../header/header";
import { FooterLinks } from "../footer/footer";
import { Center, Flex, Container, Text } from "@mantine/core";

export function SuccessPage() {
  const [searchParams] = useSearchParams();

  // 서버로 승인 요청

  return (
    <>
      <Container my="md">
        <Center>
          <h1>
            결제에 성공하였습니다. 다음 날부터 도파민 디펜스가 제공됩니다.
          </h1>
        </Center>

        <Center>
          <Text>{`주문 아이디: ${searchParams.get("orderId")}`}</Text>
        </Center>
        <Center>
          <Text>{`결제 금액: ${Number(
            searchParams.get("amount")
          ).toLocaleString()}원`}</Text>
        </Center>
      </Container>
    </>
  );
}
