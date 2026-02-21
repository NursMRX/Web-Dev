import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  /** Сколько карточек показываем по умолчанию (≈ 2 ряда при 4 колонках) */
  readonly previewCount = 8;

  showAll = false;

  toggleShowAll() {
    this.showAll = !this.showAll;
  }

  get visibleProducts(): Product[] {
    return this.showAll ? this.products : this.products.slice(0, this.previewCount);
  }

  products: Product[] = [
    {
      id: 1,
      name: 'Монитор 23.8" Xiaomi Gaming Monitor G24i 2026 P24FDA-RGGL',
      description: 'Игровой монитор с высокой детализацией и плавностью изображения. IPS, 165 Гц, 1 мс.',
      price: '64 989',
      rating: 5,
      image: 'https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-gaming-monitor-g24i-2026/pc/6a0bcf6e9fce20cd2d66b1bf6ceffe94.jpg',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p08/p45/65975207.jpg'],
      link: 'https://kaspi.kz/shop/p/23-8-xiaomi-gaming-monitor-g24i-2026-p24fda-rggl-chernyi-144629223/?c=750000000'
    },
    {
      id: 2,
      name: 'Мышь Logitech G102 фиолетовый',
      description: 'Играйте максимально эффективно, воспользовавшись игровой мышью G102, доступной в нескольких ярких расцветках. Оживите свою игру и рабочее место, выбрав мышь с поддержкой технологии LIGHTSYNC, датчиком игрового класса и классической 6-кнопочной конструкцией.',
      price: '13 690',
      rating: 5,
      image: 'https://ir-3.ozone.ru/s3/multimedia-1/6071589349.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/logitech-g102-fioletovyi-101391223/?c=750000000'
    },
    {
      id: 3,
      name: 'Клавиатура HyperX Alloy Origins Core PBT HX Red TKL 639N7AA#ABA черный',
      description: 'HyperX Alloy Origins™ Core — это ультракомпактная и прочная клавиатура без цифрового блока со специально разработанными механическими переключателями HyperX, предлагающая геймерам лучшее сочетание стиля, производительности и надежности. Этот вариант повышает долговечность за счет добавления предварительно установленных колпачков клавиш PBT с боковой печатью',
      price: '49585',
      rating: 5,
      image: 'https://ir.ozone.ru/s3/multimedia-1-y/7460373310.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/hyperx-alloy-origins-core-pbt-hx-red-tkl-639n7aa-aba-chernyi-111967340/?c=750000000'
    },
    {
      id: 4,
      name: 'Наушники SteelSeries Arctis Nova Pro Wireless',
      description: 'Премиальные беспроводные игровые наушники с активным шумоподавлением, мультисистемный хаб, Hi-Res аудио.',
      price: '149 990',
      rating: 5,
      image: 'https://i.ytimg.com/vi/V_kBLdRdP_E/maxresdefault.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/steelseries-arctis-nova-pro-wireless-chernyi-140478138/?srsltid=AfmBOoo-fYAJEqVsGCVJC-CEmcXxZgdRHTR5PqZPOcZll0wavbiVIMV8'
    },
    {
      id: 5,
      name: 'Веб-камера Logitech HD Pro Webcam C920',
      description: 'Full HD 1080p/30fps, стереомикрофон с шумоподавлением, физическая шторка конфиденциальности.',
      price: '46 649',
      rating: 4.8,
      image: 'https://m.media-amazon.com/images/I/419Xfrv6VSL.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/logitech-hd-pro-webcam-c920-9500040/?c=750000000'
    },
    {
      id: 6,
      name: 'Коврик для мыши SteelSeries QCK Prism Cloth 3XL',
      description: 'Игровой коврик XXL с RGB подсветкой по краю, ткань с оптимизированной поверхностью, нескользящая основа.',
      price: '24 990',
      rating: 4.5,
      image: 'https://media.steelseriescdn.com/thumbs/filer_public/7c/88/7c882e1a-139c-4511-afd3-9c40260ec6e6/1920x_feature_qck_prism_poster.jpg__1920x700_q100_crop-scale_optimize_subsampling-2.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/steelseries-qck-prism-cloth-3xl-etail-63512-1220x590x4-mm-chernyi-101121956/?c=750000000'
    },
    {
      id: 7,
      name: 'Микрофон HyperX Duocast 4P5E2AA черный',
      description: 'USB микрофон с RGB, четыре режима записи, встроенный антивибрационный крепёж, кнопка mute.',
      price: '54 990',
      rating: 4.9,
      image: 'https://i.pinimg.com/736x/21/37/4c/21374c4eb067abc896ed601d3e9eb9e5.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/mikrofon-hyperx-duocast-4p5e2aa-chernyi-105683960/?c=750000000'
    },
    {
      id: 8,
      name: 'Игровая мышь Razer DeathAdder V3 HyperSpeed',
      description: 'Беспроводная, сенсор 26K DPI, 90-часовой аккумулятор, оптические переключатели 3-го поколения.',
      price: '35 990',
      rating: 5,
      image: 'https://razer.syntes.io/public/tPtkr39adqLShSSJr9esDi/viper-v3-hyperspeed-black-1500x1000-6.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/razer-viper-v3-hyperspeed-chernyi-134889411/?c=750000000'
    },
    {
      id: 9,
      name: 'Клавиатура Ajazz AK820 Pro белый',
      description: 'Ajazz AK820 Pro- это не просто клавиатура, это совершенный инструмент для геймеров и профессионалов. С инновационным дизайном, выдающейся производительностью и функциональностью, эта клавиатура создана для тех, кто стремится к лучшему в играх и работе.',
      price: '25 968',
      rating: 4.7,
      image: 'https://ir.ozone.ru/s3/multimedia-1-y/7448036434.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/ajazz-ak820-pro-belyi-115277471/?c=750000000'
    },
    {
      id: 10,
      name: 'Монитор 34" XTREON XTG34C1 черный',
      description: 'XTREON XTG34C1 — широкоформатный игровой монитор с изогнутым экраном диагональю 34 дюйма, обеспечивающий максимальное погружение в виртуальный мир.',
      price: '119 990',
      rating: 4.9,
      image: 'https://avatars.mds.yandex.net/i?id=cc9ae56f2cb2ec59b4e66bcad40006a0_l-8240493-images-thumbs&n=13',
      images: [],
      link: 'https://kaspi.kz/shop/p/34-xtreon-xtg34c1-chernyi-140680944/?c=750000000'
    },
    {
      id: 11,
      name: 'Наушники Razer BlackShark V2 X USB',
      description: 'Проводные игровые наушники 7.1, драйверы 50мм TriForce, гибкий микрофон HyperClear Cardioid, лёгкие 240г.',
      price: '29 990',
      rating: 4,
      image: 'https://www.zigzag.am/media/catalog/product/cache/811d9bdbaebf1cf745388b9849057259/h/t/https___medias-p1.000-4.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/naushniki-razer-blackshark-v2-x-usb-chernyi-110934457/?c=750000000'
    },
    {
      id: 12,
      name: 'Мышь Logitech Lightspeed G305 910-006022 фиолетовый',
      description: 'Мышь беспроводная Logitech G305 LIGHTSPEED представляет собой игровое устройство с поддержкой беспроводного соединения при помощи USB-ресивера. Беспроводное соединение дает свободу перемещения на расстояние до 10 м. Модель использует светодиодный датчик с поддержкой разрешения 12000 dpi.',
      price: '34 780',
      rating: 5,
      image: 'https://images-na.ssl-images-amazon.com/images/I/31xmkphBIYL._SS768_.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/logitech-lightspeed-g305-910-006022-fioletovyi-101058059/?c=750000000'
    },
  ];

  shareTelegram(product: Product) {
  const url  = encodeURIComponent(product.link);
  const text = encodeURIComponent(`${product.name} — ${product.price} ₸`);
  console.log(product);
  window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
}
}

