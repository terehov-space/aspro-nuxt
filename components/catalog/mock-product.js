export default {
  id: 1,
  title: "Смартфон SY 15",
  priceType: "Цена в Москве",
  availability: "Много",
  hit: true,
  discount: 10,
  quantity: 1,
  rating: 0,
  comments: [],
  // TODO: format price
  documents: [{ title: "Обзор товара", id: 1, size: "15,4 кб", link: "#" }],
  userPrice: 35820.28,
  price: 36000,
  category: "electronics",
  subCategory: "phones",
  image: require("~/assets/img/best-product-phone-1.jpg"),
  saving: "127",
  brand: {
    image: require("~/assets/img/brands-1.png"),
    title: "Линдрос",
    text: "Актуальная техника, продвинутые модели и современный дизайн — все это сочетают в себе товары от известной компании."
  },
  service: {
    name: "Дополнительные услуги",
    title: "Кредитование",
    link: "/test",
    text: "Оказываем услуги по выдаче кредитов под покупку товаров и услуг. Рассматриваем заявки за 15 минут. Получаем одобрение банками в 94% случаев. Выдаем кредиты в день обращения. Требования к заемщику минимальные. Получить желаемое просто!",
  },
  articles: [{
    name: "СОВЕТЫ ПОКУПАТЕЛЯМ — 17.06.2016",
    title: "Почему лучше расплачиваться безналичным расчетом",
    link: "test",
  },
  {
    name: "СОВЕТЫ ПОКУПАТЕЛЯМ — 17.06.2016",
    title: "Почему лучше расплачиваться безналичным расчетом 2",
    link: "test",
  }],
  tags: [
    {
      id: 1,
      title: "хит",
      color: "yellow",
    },
  ],
  video: [{ id: 1, link: "https://www.youtube.com/embed/47AK3aQoi1M" }, { id: 2, link: "https://www.youtube.com/embed/47AK3aQoi1M" }],
  properties: [
    { title: "Разрешение экрана, пикс", value: "2280х1080", id: 1 },
    { title: "Оперативная память (RAM), Гб ", value: "2280х1080", id: 2 },
    { title: "Количество SIM-карт", value: "2280х1080", id: 3 },
  ],
  description: ` Яркие впечатления возможны даже после прошедших мероприятий. Широкоугольная камера и интеллектуальная система съемки уже наравне с профессиональными камерами!

Компактный и эргономичный смартфон с аккумулятором 3500 мАч и последними технологиями. Процессор поддержит высокую скорость обработки информации, а широкоугольный экран позволит увидеть больше, чем обычно. Попробуйте окунуться в мир, полный возможностей и насыщенных красок!

Интеллектуальная система поможет сделать выразительные и яркие фотографии. Широкоугольный объектив с фиксированным фокусом и продвинутыми функциями распознавания дефектов выручит при сложных условиях съемки. Сохраните лучшие моменты жизни в памяти смартфона на 64 ГБ.
  `
}