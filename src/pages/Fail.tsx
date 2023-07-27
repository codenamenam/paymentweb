import { Center, Container } from "@mantine/core";
import { useSearchParams } from "react-router-dom";

export function FailPage() {
  const [searchParams] = useSearchParams();

  // 고객에게 실패 사유 알려주고 다른 페이지로 이동

  return (
    <>
      <Container my="md">
        <div>
          <Center>
            <h1>결제에 실패하였습니다.</h1>
          </Center>

          <Center>
            <div>{`사유: ${searchParams.get("message")}`}</div>
          </Center>
        </div>
      </Container>
    </>
  );
}
