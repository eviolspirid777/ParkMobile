import React from "react";
import styles from "./Footer.module.scss";
import { TelegramIcon } from "./Telegram";
import reqesits from "../../assets/Reqesits/reqesits.png";
import { useAtom } from "jotai";
import { selectedRouteAtom } from "../../Store/RouteStore";

export const Footer = () => {
  const [, setSelectedRoute] = useAtom(selectedRouteAtom);

  const handlePathNavigate = (path: string) => {
    setSelectedRoute(path);
  };

  return (
    <div className={styles["footer-block"]}>
      <div className={styles["footer-block-help"]}>
        <div className={styles["footer-block-help-items"]}>
          <h2>О компании</h2>
          <span onClick={handlePathNavigate.bind(this, "about-contacts")}>
            Адреса магазинов
          </span>
          <span onClick={handlePathNavigate.bind(this, "about-contacts")}>
            Контакты
          </span>
          <span onClick={handlePathNavigate.bind(this, "about-contacts")}>
            Обратная связь
          </span>
        </div>
        <div className={styles["footer-block-help-items"]}>
          <h2>Помощь</h2>
          <span onClick={handlePathNavigate.bind(this, "delivery")}>
            Доставка и оплата
          </span>
          <span onClick={handlePathNavigate.bind(this, "gurantee")}>
            Гарантии и возврат
          </span>
          <span onClick={handlePathNavigate.bind(this, "trade-in")}>
            Trade-in
          </span>
          <span>Рассрочка и кредит</span>
        </div>
        <div className={styles["footer-block-help-items"]}>
          <h2>Каталог</h2>
          <span>Mac</span>
          <span>iPhone</span>
          <span>Watch</span>
          <span>iPad</span>
          <span>Аксессуары</span>
          <span>Гаджеты</span>
        </div>
        <div className={styles["footer-block-help-items"]}>
          <h2>Подпишись</h2>
          <a
            href="https://www.instagram.com/parkmobile_"
            title="Запрещенная в РФ организация META"
          >
            Instagram*
          </a>
          <a href="https://vk.com/parkmobile">VK</a>
          <a href="https://t.me/parkmobile_krasnodar">Telegram</a>
        </div>
        <div
          className={styles["footer-block-help-items"]}
          style={{ width: "255px" }}
        >
          <div className={styles["footer-block-help-items-first-block"]}>
            <div
              className={
                styles["footer-block-help-items-first-block-number-address"]
              }
            >
              <h2>+7 928 817-34-75</h2>
              <div>
                <a href="https://yandex.ru/maps/-/CDxYZJo0">
                  с 11:00 до 20:00, без выходных г. Краснодар ул.Советская, 36
                </a>
              </div>
            </div>
            <a href="https://t.me/parkmobile_krasnodar">
              <TelegramIcon />
            </a>
          </div>
          <span className={styles["subscribe-text"]}>
            Подпишитесь на наш телеграмм канал, чтобы получать уведомления о
            наших лучших предложениях
          </span>
          <div className={styles["reqesits"]}>
            <img src={reqesits} alt="" />
          </div>
        </div>
      </div>
      <hr />
      <div className={styles["footer-block-info"]}>
        <span>
          ИП Безганс Эмиль Владимирович | ОГРНИП: 323237500114924 | ИНН:
          090108428776
        </span>
        <span>Политика конфиденциальности</span>
        <span>Оферта</span>
      </div>
    </div>
  );
};
