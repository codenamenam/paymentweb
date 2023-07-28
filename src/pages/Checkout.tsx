import { useEffect, useRef, useState } from "react";
import {
  loadPaymentWidget,
  PaymentWidgetInstance,
} from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";
import { useLocation } from "react-router-dom";
import { Container, Flex, Button, Center } from "@mantine/core";

import "../App.css";
const clientKey = "test_ck_ADpexMgkW36LmKlJXzJrGbR5ozO0";
const customerKey = "YbX2HuSlsC9uVJW6NMRMj";

export default function Checkout() {
  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);
  const paymentMethodsWidgetRef = useRef<ReturnType<
    PaymentWidgetInstance["renderPaymentMethods"]
  > | null>(null);
  const location = useLocation();
  const [price, setPrice] = useState(location.state?.price);
  const [peorid, setPeorid] = useState(location.state?.peorid);

  useEffect(() => {
    (async () => {
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey);

      const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
        "#payment-widget",
        price
      );

      paymentWidgetRef.current = paymentWidget;
      paymentMethodsWidgetRef.current = paymentMethodsWidget;
    })();
  }, []);

  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current;

    if (paymentMethodsWidget == null) {
      return;
    }

    paymentMethodsWidget.updateAmount(
      price,
      paymentMethodsWidget.UPDATE_REASON.COUPON
    );
  }, [price]);

  return (
    <>
      <Container size="md">
        <Flex direction="column" align="center" justify="center">
          <h1 style={{ marginTop: "100px" }}>도파민 디펜스 결제창</h1>
        </Flex>
        <div id="payment-widget" />
        <Flex direction="column" align="center" justify="center">
          <Button
            onClick={async () => {
              const paymentWidget = paymentWidgetRef.current;

              try {
                //이전 페이지에서 정보 가져와야함
                await paymentWidget?.requestPayment({
                  orderId: nanoid(),
                  orderName: "도파민 디펜스 " + peorid + " 구독",
                  customerName: "익명",
                  customerEmail: "",
                  successUrl: `${window.location.origin}/success`,
                  failUrl: `${window.location.origin}/fail`,
                });
              } catch (err) {
                console.log(err);
              }
            }}
            pos={Center}
          >
            결제하기
          </Button>
        </Flex>
      </Container>
    </>
  );
}
