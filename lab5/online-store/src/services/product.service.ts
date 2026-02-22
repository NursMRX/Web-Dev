import { Injectable } from '@angular/core';
import { Category } from '../app/models/category.model';
import { Product }  from '../app/models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {

  readonly categories: Category[] = [
    { id: 1, name: 'Monitors',    icon: ''  },
    { id: 2, name: 'Мouse',        icon: ''  },
    { id: 3, name: 'Keyboard',  icon: ''  },
    { id: 4, name: 'Headphones',    icon: ''  },
  ];

  readonly products: Product[] = [

    // ── Мониторы (categoryId: 1) ─────────────────────────────────────────────
    {
      id: 1, categoryId: 1, likes: 0,
      name: '23.8 Xiaomi Gaming Monitor G24i 2026',
      description: 'IPS, 165 Гц, 1 мс GTG, AMD FreeSync Premium, HDMI 2.0 + DP 1.4.',
      price: '64 989', rating: 5,
      image: 'https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-gaming-monitor-g24i-2026/pc/6a0bcf6e9fce20cd2d66b1bf6ceffe94.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/23-8-xiaomi-gaming-monitor-g24i-2026-p24fda-rggl-chernyi-144629223/?c=750000000',
    },
    {
      id: 2, categoryId: 1, likes: 0,
      name: 'Monitor 34" XTREON XTG34C1 black',
      description: 'XTREON XTG34C1 is a widescreen gaming monitor with a 34-inch diagonal curved screen that provides maximum immersion in the virtual world.',
      price: '119 990', rating: 4.9,
      image: 'https://avatars.mds.yandex.net/i?id=cc9ae56f2cb2ec59b4e66bcad40006a0_l-8240493-images-thumbs&n=13',
      images: [],
      link: 'https://kaspi.kz/shop/p/34-xtreon-xtg34c1-chernyi-140680944/?c=750000000',
    },
    {
      id: 3, categoryId: 1, likes: 0,
      name: 'Monitor 27" ASUS TUF Gaming VG27AQL3A',
      description: 'IPS 2K 180 Гц, G-Sync Compatible, ELMB Sync, HDR400, 2×HDMI 2.1.',
      price: '128 688', rating: 4.8,
      image: 'https://www.asus.com/media/global/SKU/90LM0940-B01910/tqhgwqbqla1kzen8.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/27-asus-vg27aql3a-chernyi-113731807/?srsltid=AfmBOorm08ztVjoqsCjKw1wM-bvcQhUYeniH2U35tPR8IyHgA4DeTogA',
    },
    {
      id: 4, categoryId: 1, likes: 0,
      name: 'Monitor 24" MSI G2422 black',
      description: 'IPS 170 Гц, 1 мс, FHD 1920×1080, FreeSync Premium, Anti-Glare.',
      price: '82 990', rating: 4.1,
      image: 'http://avatars.mds.yandex.net/get-vthumb/774658/5cfb882c6892d589366330162c5a0082/800x450',
      images: [],
      link: 'https://kaspi.kz/shop/p/24-msi-g2422c-chernyi-124552443/?c=750000000',
    },
    {
      id: 5, categoryId: 1, likes: 0,
      name: 'Monitor 27" LG UltraGear 27GS60F-B black',
      description: 'LG UltraGear 27GS60F-B gaming monitor, your perfect companion for immersive gaming and entertainment. With a resolution of 1920x1080 and a maximum refresh rate of 180Hz, you will experience incredible clarity and smoothness.',
      price: '139 990', rating: 4.9,
      image: 'https://avatars.mds.yandex.net/i?id=a0aaa75f26c04d8a9d631f5cbb6eb344_l-5682623-images-thumbs&n=13',
      images: [],
      link: 'https://kaspi.kz/shop/p/27-lg-ultragear-27gs60f-b-chernyi-123346801/?c=750000000',
    },

    // ── Мыши (categoryId: 2) ─────────────────────────────────────────────────
    {
      id: 6, categoryId: 2, likes: 0,
      name: 'Logitech G102 violet',
      description: 'LIGHTSYNC RGB, optical sensor 8000 DPI, 6 buttons, 85g, USB.',
      price: '13 690', rating: 5,
      image: 'https://ir-3.ozone.ru/s3/multimedia-1/6071589349.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/logitech-g102-fioletovyi-101391223/?c=750000000',
    },
    {
      id: 7, categoryId: 2, likes: 0,
      name: 'Razer DeathAdder V3 HyperSpeed',
      description: 'Беспроводная, сенсор 26K DPI, 90 ч работы, оптические переключатели.',
      price: '35 990', rating: 5,
      image: 'https://razer.syntes.io/public/tPtkr39adqLShSSJr9esDi/viper-v3-hyperspeed-black-1500x1000-6.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/razer-viper-v3-hyperspeed-chernyi-134889411/?c=750000000',
    },
    {
      id: 8, categoryId: 2, likes: 0,
      name: 'Logitech G305 LIGHTSPEED violet',
      description: 'Беспроводная HERO 12K DPI, до 250 ч от AA, 99г, 6 кнопок.',
      price: '34 780', rating: 5,
      image: 'https://images-na.ssl-images-amazon.com/images/I/31xmkphBIYL._SS768_.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/logitech-lightspeed-g305-910-006022-fioletovyi-101058059/?c=750000000',
    },
    {
      id: 9, categoryId: 2, likes: 0,
      name: 'SteelSeries Aerox 5 Wireless',
      description: 'Беспроводная 18K DPI, 74г, RGB, 180ч работы, AquaBarrier защита.',
      price: '49 990', rating: 4.8,
      image: 'https://i.ebayimg.com/images/g/ynoAAeSwOjZpRlPa/s-l1600.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/steelseries-aerox-5-wireless-chernyi-107575444/?c=750000000',
    },
    {
      id: 10, categoryId: 2, likes: 0,
      name: 'Bloody W63Max',
      description: 'Resolution up to 12000 DPI - ensures high accuracy and response speed. - 🔒 9 programmable keys - customize the controls for your convenience in the game. - 🌈 Adjustable backlight - create a unique atmosphere during the gameplay. - ⚡ 1 ms response time - instant reaction to your actions. - 🎮 Wired connection - stable connection without delays..',
      price: '11 900', rating: 4.9,
      image: 'https://ir-3.ozone.ru/s3/multimedia-1-p/w1200/7113737113.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/bloody-w63max-belyi-121004746/?c=750000000',
    },

    // ── Клавиатуры (categoryId: 3) ───────────────────────────────────────────
    {
      id: 11, categoryId: 3, likes: 0,
      name: 'HyperX Alloy Origins Core PBT TKL',
      description: 'Mechanical TKL, HyperX Red switches, PBT caps, RGB.',
      price: '49 585', rating: 5,
      image: 'https://ir.ozone.ru/s3/multimedia-1-y/7460373310.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/hyperx-alloy-origins-core-pbt-hx-red-tkl-639n7aa-aba-chernyi-111967340/?c=750000000',
    },
    {
      id: 12, categoryId: 3, likes: 0,
      name: 'Ajazz AK820 Pro white',
      description: 'Mechanical 75%, Kailh switches, RGB, Hot-swap, Gasket Mount.',
      price: '25 968', rating: 4.7,
      image: 'https://ir.ozone.ru/s3/multimedia-1-y/7448036434.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/ajazz-ak820-pro-belyi-115277471/?c=750000000',
    },
    {
      id: 13, categoryId: 3, likes: 0,
      name: 'Logitech G515 LIGHTSPEED TKL black',
      description: 'Wireless mechanical TKL, GX Brown, LIGHTSYNC RGB, 40h.',
      price: '63 690', rating: 4.9,
      image: 'https://avatars.mds.yandex.net/i?id=32052024eb762b45effa418c4893cd20_sr-10555105-images-thumbs&n=13',
      images: [],
      link: 'https://kaspi.kz/shop/p/logitech-g515-lightspeed-tkl-chernyi-122742079/?c=750000000',
    },
    {
      id: 14, categoryId: 3, likes: 0,
      name: 'Logitech G413 TKL SE 920-010447 black',
      description: 'The Logitech G413 TKL SE is a mechanical keyboard designed for those who value compactness and high performance in games and work. This keyboard combines a wired connection with backlit keys, making it an ideal choice for any user.',
      price: '40 880', rating: 4.8,
      image: 'https://ir.ozone.ru/s3/multimedia-j/c1000/6694911199.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/logitech-g413-tkl-se-920-010447-chernyi-105773193/?c=750000000',
    },
    {
      id: 15, categoryId: 3, likes: 0,
      name: 'Keychron K2 Pro',
      description: 'Wireless 75%, Hot-swap, Keychron K Pro Red, RGB, Mac/Win.',
      price: '39 990', rating: 4.8,
      image: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/72cb1516-20ff-441a-a135-c01f8195d430.__CR0,0,970,600_PT0_SX970_V1___.png',
      images: [],
      link: 'https://kaspi.kz/shop/p/keychron-k2-pro-chernyi-118623721/?c=750000000',
    },

    // ── Наушники (categoryId: 4) ─────────────────────────────────────────────
    {
      id: 16, categoryId: 4, likes: 0,
      name: 'SteelSeries Arctis Nova Pro Wireless',
      description: 'ANC, Hi-Res audio, multi-system hub, dual wireless, actice noise.',
      price: '149 990', rating: 5,
      image: 'https://i.ytimg.com/vi/V_kBLdRdP_E/maxresdefault.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/steelseries-arctis-nova-pro-wireless-chernyi-140478138/?c=750000000',
    },
    {
      id: 17, categoryId: 4, likes: 0,
      name: 'Razer BlackShark V2 X USB',
      description: 'Wired 7.1, 50mm TriForce drivers, HyperClear microphone, 240g.',
      price: '26 000', rating: 4,
      image: 'https://www.zigzag.am/media/catalog/product/cache/811d9bdbaebf1cf745388b9849057259/h/t/https___medias-p1.000-4.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/naushniki-razer-blackshark-v2-x-usb-chernyi-110934457/?c=750000000',
    },
    {
      id: 18, categoryId: 4, likes: 0,
      name: 'HyperX Cloud Alpha Wireless 4P5D4AA red',
      description: 'Wireless, up to 300 hours of operation, Dual Chamber drivers 50mm, DTS.',
      price: '78 990', rating: 4.8,
      image: 'https://www.impulsegamer.com/articles/wp-content/uploads/2022/05/1.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/naushniki-hyperx-cloud-alpha-wireless-4p5d4aa-krasnyi-104912358/?c=750000000',
    },
    {
      id: 19, categoryId: 4, likes: 0,
      name: 'Logitech G535 Lightspeed Wireless black',
      description: 'Wireless 33ms, 256h, 16 Ohm driver, Flip-to-mute microphone.',
      price: '81 480', rating: 4.5,
      image: 'https://files.pccasegear.com/UserFiles/981-000973-logitech-g535-lightspeed-wireless-gaming-headset-ftr1.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/naushniki-logitech-g535-lightspeed-wireless-chernyi-110239236/?c=750000000',
    },
    {
      id: 20, categoryId: 4, likes: 0,
      name: 'Sony WH-1000XM5',
      description: 'Best ANC in class, 30h, Hi-Res, Multipoint, Speak-to-Chat.',
      price: '134 999', rating: 5,
      image: 'https://avatars.mds.yandex.net/i?id=2c084ea448dbae1fee9b49ff8c795c90_l-5546794-images-thumbs&n=13',
      images: [],
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?c=750000000',
    },
  ];

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}