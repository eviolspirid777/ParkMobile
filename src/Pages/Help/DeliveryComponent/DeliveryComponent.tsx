import React from "react";
import styles from "./DeliveryComponent.module.scss";
import { AccordionComponent } from "../../../Shared/Components/Accordion/AccordionComponent";

export const DeliveryComponent = () => {
  const accordionData = [
    ["Доставка и оплата по Краснодару", ""],
    ["Доставка и оплата по России", ""],
    [
      "Сроки подтверждения заказа",
      'После оформления заказа на сайте мы свяжемся для подтверждения заказа выбранным вами методом. Если вы выбрали "Перезвоните мне для подтверждения заказа", менеджер свяжется с вами в течение 30 минут. Пожалуйста, проверьте корректность номера телефона. Мы обрабатываем заказы ежедневно с 9.00 до 22.00.',
    ],
    [
      "Для юридических лиц",
      "Если вас интересуют закупки для офисных нужд компании и построения бизнес-решений с учетом специфики вашего бизнеса, корпоративных подарков, мы предложим вам оптимальные условия покупки с доставкой и широким перечнем дополнительных технических сервисов. Счёт выставляется менеджером при подтверждении заказа. После выставления счета товар резервируется на 3 дня. В течение этого времени необходимо оплатить товар и сообщить менеджеру об оплате.",
    ],
  ];

  return (
    <div className={styles["delivery-block"]}>
      <div className={styles["delivery-block-payment-info"]}>
        <h3>Доставка и оплата</h3>
        <span>
          Для нас доставка - это не просто процесс, это важнейшая часть нашей
          работы. Мы понимаем, что наши клиенты ищут лучшее соотношение
          "Цена-Качество" и находятся по всей России, от Краснодара, где
          находится наш магазин, до Петропавловска-на-Камчатке.
        </span>
        <span>
          Мы гарантируем надежную и оперативную доставку, чтобы каждый клиент
          получил заказ в срок и в отличном состоянии.
        </span>
      </div>
      <div className={styles["delivery-block-krasnodar-delivery"]}>
        <h4>Доставка по городу Краснодару</h4>
        <ul>
          <li>Стоимость доставки: 500 рублей</li>
          <li>Срок доставки: 1 день</li>
        </ul>
        <h5>Варианты оплаты</h5>
        <span>
          наличными при получении, на сайте через онлайн-кассу, переводом (+5%),
          по QR-коду (+5%) или на карту (+5%).
        </span>
      </div>
      <div className={styles["delivery-block-russia-delivery"]}>
        <h4>Доставка по России</h4>
        <ul>
          <li>Стоимость доставки: по тарифам компании</li>
          <li>Срок доставки: 1-7 дней</li>
        </ul>
        <h5>Варианты оплаты</h5>
        <span>
          на сайте через онлайн-кассу, переводом (+5%), по QR-коду (+5%) или на
          карту (+5%).
        </span>
      </div>
      <div className={styles["delivery-block-faq"]}>
        <h3>Часто задаваемые вопросы</h3>
        <AccordionComponent data={accordionData} />
      </div>
    </div>
  );
};