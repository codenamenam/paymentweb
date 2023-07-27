import { useSearchParams } from "react-router-dom";

export function SuccessPage() {
  const [searchParams] = useSearchParams();

  // 서버로 승인 요청

  return (
    <div>
      <h1>결제 성공! 다음 날 부터 도파민 디펜스가 제공됩니다.</h1>
      <div>{`주문 아이디: ${searchParams.get("orderId")}`}</div>
      <div>{`결제 금액: ${Number(
        searchParams.get("amount")
      ).toLocaleString()}원`}</div>
    </div>
  );
}
