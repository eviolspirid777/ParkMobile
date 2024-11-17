import React from "react";
import styles from "./GuranteeComponent.module.scss";
import { AccordionComponent } from "../../../Shared/Components/Accordion/AccordionComponent";

export const GuranteeComponent = () => {
  const liItems = [
    "Гарантийный срок 1 год с момента покупки распространяется на: всю технику Apple, Samsung, смартфоны, планшеты, персональные компьютеры, игровые приставки, акустические системы, бытовую технику, если иное не указано на странице товара;",
    "Гарантийный срок 6 месяцев с момента покупки распространяется на: умные гаджеты, умные часы (за исключением умных часов компании Apple и Samsung), наушники (за исключением наушников компании Apple, Samsung и JBL), если иное не указано на странице товара;",
    "Гарантийный срок 1 месяц с момента покупки распространяются на: все аксессуары, портативные аккумуляторы, сетевые зарядные устройства, если иное не указано на странице товара;",
    "Основанием для гарантии является гарантийный талон;",
    "Транспортировка товара весом менее 5 кг обратно продавцу для обмена/возврата, а также для диагностики и гарантийного обслуживания производится покупателем самостоятельно.",
  ];

  const accordionItems = [
    [
      "Что делать, если пришел бракованный товар",
      "В отношении технически сложного товара в случае обнаружения в нем недостатков вы вправе отказаться от исполнения договора купли-продажи и потребовать возврата уплаченной за такой товар суммы либо предъявить требование о его замене на товар этой же марки (модели, артикула) или на такой же товар другой марки (модели, артикула) с соответствующим перерасчетом покупной цены в течение пятнадцати дней со дня передачи такого товара вам. Перечень технических сложных товаров утвержден Постановлением Правительства РФ от 10.11.2011 N 924 Для подтверждения наличия недостатка в товаре, в соответствии с п.5 ст. 18 ФЗ «О защите прав потребителей» , мы должны принять у вас товар и провести проверку качества товара. Проверка качества проводится в Авторизованных сервисных центрах, имеющих необходимую сертификацию. Проверка качества проводится за счет продавца. Согласно ст. 406, 416 ГК РФ Продавец не может нести ответственность за просрочку исполнения требований покупателя, до получения товара. Хотим отметить что, если в результате проверки качества (экспертизы) товара будет установлено, что его недостатки возникли вследствие обстоятельств, за которые не отвечает продавец (изготовитель), покупатель обязан возместить продавцу (изготовителю), уполномоченной организации или уполномоченному индивидуальному предпринимателю, импортеру расходы на проведение экспертизы, а также связанные с ее проведением расходы на хранение и транспортировку товара.",
    ],
    [
      "Можно ли вернуть товар",
      "Покупатель вправе отказаться от товара в любое время до его передачи, а после передачи товара - в течение 7 дней. Возврат Товара надлежащего качества возможен в случае, если Товар не был в употреблении, сохранены его товарный вид, потребительские свойства, пломбы, фабричные ярлыки и т.п., а также документ, подтверждающий факт и условия покупки указанного товара. Отсутствие у покупателя указанного документа не лишает его возможности ссылаться на другие доказательства приобретения товара у данного продавца. Если при передаче товара будут обнаружены следы эксплуатации Товара или отсутствие полной комплектации товара, мы оставляем за собой право отказать в возврате денежных средств по данным основаниям. Если вы отказались от товара, подарок, выданный вместе с данным товаром, подлежит обязательному возврату с сохранением товарного вида, потребительских свойств, пломб, фабричных ярлыков и т.п.",
    ],
    [
      "Сервисная программа",
      "Все товары, приобретённые в нашем интернет-магазине подлежат гарантийным обязательствам. По вопросам гарантийного обслуживания вы можете обратиться в наш магазин, а также по телефону интернет-магазина +7 928 817-34-75.",
    ],
    [
      "Для товаров, приобретенных в кредит",
      "Обращаем ваше внимание, что для товаров, приобретенных в кредит или рассрочку, вы заключаете договор с банком. При возврате товара, мы возвращаем Вам сумму первоначального взноса (если он был), однако соглашение о потребительском кредите, заключенное между вами и банком, не расторгается и действует до момента полного погашения задолженности. Для осуществления полного досрочного погашения задолженности обращайтесь в банк.",
    ],
  ];

  return (
    <div className={styles["gurantee-block"]}>
      <div className={styles["gurantee-block-gurantee"]}>
        <h3>Гарантии</h3>
        <span>
          Приобретая технику у нас, Вы можете быть абсолютно уверены в том, что
          получите совершенно новый, оригинальный продукт, на который
          распространяется гарантия. Срок гарантийного обслуживания, в течение
          которого осуществляется бесплатный ремонт, устанавливается
          фирмой-производителем
        </span>
        <div className={styles["gurantee-block-gurantee-telephone"]}>
          <span>Подробную информацию уточняйте у менеджера по телефону:</span>
          <a href="tel:79288173475">+7 928 817-34-75</a>
        </div>
        <hr />
      </div>
      <div className={styles["gurantee-block-requirments"]}>
        <h3>Условия гарантии</h3>
        <ul>
          {liItems.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
        <hr />
      </div>
      <div className={styles["gurantee-block-faq"]}>
        <h3>Часто задаваемые вопросы</h3>
        <AccordionComponent data={accordionItems} />
      </div>
    </div>
  );
};
