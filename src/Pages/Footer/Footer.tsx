import React from "react";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles["footer-block"]}>
      <div className={styles["footer-block-help"]}>
        <div className={styles["footer-block-help-items"]}>
          <h2>О компании</h2>
          <span>Адреса магазинов</span>
          <span>Контакты</span>
          <span>Обратная связь</span>
        </div>
        <div className={styles["footer-block-help-items"]}>
          <h2>Помощь</h2>
          <span>Доставка и оплата</span>
          <span>Гарантии и возврат</span>
          <span>Trade-in</span>
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
          <span>Instagram*</span>
          <span>VK</span>
          <span>Telegram</span>
        </div>
        <div className={styles["footer-block-help-items"]}>Contact Data</div>
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
