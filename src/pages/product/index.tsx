
type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Organic Cotton Tee",
    price: "$450.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAb22t4khvl7ze06f4QADeI1uW84_oGIxM0d7JAcwi8aGP9BTGB9k7XmZMK2kAKr9oXjNAftyW3cr8kWbynJbeEz0pVnoH6Z24Guh08IuwU1IuPIQ7G9JRBCzvShRF-Wl9AIXdSLQK-SQHPRF7YgZoHRjIeHa0y-2CSg2zWxe6MCE1WPENWfqB3ojT0XrGBwyKYKikkWR2_oKFV45lvPtebkyvJQQVNATFy4XlFgi4UQJI3PLqB_s4rzuM3MhLgdephEk0YP0aBLgx2",
  },
  {
    id: 1,
    name: "Organic Cotton Tee",
    price: "$257.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCh4wuHmDGgMwY68XEUOtTDqNVlO77glzDA6it3sf2EDi8cG4Iy7S1phAVhAgyWQxCJWUq4evWKZgBBrvlzh9Eyfkxjcmq-1T_hyRwr7JGX_c51iiQWckzDcXbb9wbovR-RppW5kwX2AJU9SUlUFugVRdrnzQTXmU51mEfFDWDB798pxX3FKOjaLvcdMg6h9WWwGdt7dUQOG-Crq7OII8izUppADQ2PnAsLedk4hyknwOBKr8cDc4FnQB06VVodaZFSsSXEBF3BaJ3P",
  },
  {
    id: 2,
    name: "Performance Chinos",
    price: "$207.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBGUDOo6OHylpoGgMrJejdQ02xMN_3UqSbO7vX4ihVrMd4NVbZ4QlKd0cGa1eRwCORTc5xmL0gyyNxSJvyHc2zdRRuRcqQwwYsHrpW4NYJhy7rrz8jrs-8tctntOuiW_SCcbjIQAofg5JKAj0Sq4cMFempoJ4_xhR2KrFdO-IzHexTuxvMI7XM_rquYQNyxeFl0Fr9zc4PKguH2W-pN4MxQkpVGOIlWB08xj-_Q82hiSd4kIPgt0Fzq4w0kwaNwEmz4kMNn6V6XKNZ-",
  },
  {
    id: 3,
    name: "Italian Leather Loafers",
    price: "$480.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC9qSOF6iJlqDXw9lS6BnXzCyhYexCsJIWKGA7RomsjWTikJwtxGAYbn9lgaNUFni-kYTzfIAQWMfghkbQlCnvn0dWEftl5fv_0P_O0fpts2BKE_EV_DClkooHl-NbrezCNaRjAYbw4VSM1pzs5-jP_Vi3JiVAiDIMoqxq5zu4UNu8BWrvZ9b9a096IT67VeNKsru6yPJ1VefEx6js70s8Dq_H_xtmsVDeRnWn4Cuun-JjDQ9Rzn7_Zd2c7VSrZoMXNFQTvETWtSgFJ",
  },
  {
    id: 4,
    name: "Minimalist Watch",
    price: "$180",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDukZTrOuQ4QZNrsrTqKUO2evOUB9wJacCNcR2wkXYm2lKFFriNP_OyrupdCcg-UIikOYys10ZOPN53xTGo5v_tKAEgN3M_3myZiMvCvlzJJcs9-soAllh0jsk_Rgk1DecvQWix3FzXOYKhRGx6eefeqY7qBTOKsJOcjUHzum_ZLvTmrQ8Ud96G5C6-c-6RFzdlo3M2c62HcrkFjGsUWedvoYyGyhmmDA2ebEc4R69x0eV0AP8F3x-ZRwz75TRK1JNs3TeSCq_20jr5",
  },
  {
    id: 5,
    name: "Linen Blend Shirt",
    price: "$750.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBP0ilmmv8ubO-iCI4ZFXGMOzE7iPCNNIYAcVQ-EcDscgn2ByPga9L21FWNOlxc0l2F6lE1Xqzj-hfeSLAgvUwdgzU88Dr446-o7vaH7WgXmCQ3r0zCX8lglVdGJNsyAEKk_FuKsIh69S6hBxkS-T_JR5z7Ou0U2IQdTFv2qZnC9Vs59B5q72Z-YRlWPj-F6TgPeTWTzmbgk0ajc2o27PUbmzm0w52skhkfezm21tXUMbONS_mzdn7LmnhoeYNkcwcu0O1C3WYvX-vN",
  },
  {
    id: 6,
    name: "Everyday Sneakers",
    price: "$120.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCh4wuHmDGgMwY68XEUOtTDqNVlO77glzDA6it3sf2EDi8cG4Iy7S1phAVhAgyWQxCJWUq4evWKZgBBrvlzh9Eyfkxjcmq-1T_hyRwr7JGX_c51iiQWckzDcXbb9wbovR-RppW5kwX2AJU9SUlUFugVRdrnzQTXmU51mEfFDWDB798pxX3FKOjaLvcdMg6h9WWwGdt7dUQOG-Crq7OII8izUppADQ2PnAsLedk4hyknwOBKr8cDc4FnQB06VVodaZFSsSXEBF3BaJ3P",
  },
  {
    id: 7,
    name: "Recycled Crossbody Bag",
    price: "$650.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBwGRFz1X4uyx22JcH_V6PW-PQ3tZz_Zli1hAF09m5vMEGo0lBmRk7pc8TcBIms5bQ7YVlSvW2J02VwLilolKkB576hJhqVorcXwUyPCU8Ba71z0Fr13sdQXU_nGHW6qZRp_x3gnD8Y7sniQCC8D_QtQE9wsUr51C-9uk2ETBPsIKcLSIiTDuZ8_DRnKS89YR_iqoNlzNdy8mFGnEVzMiTzL6ot_E7G2cDqxzWye4Q0UhPH99-PM2C08O6Fd0AQjE5rzD1eM_nurEZk",
  },
  {
    id: 8,
    name: "Classic Denim Jeans",
    price: "$910.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCThcpLQYyxxIzWWfFqDs6xbhC2KjYgDk_YSIW5HFAbAaZi5kNUp3IbQBb6OYRyVJYY-jl3zxb3mvOiMuvyzbOTOQtAhiqg2M8yPKAEoE_m2ywEsYBz3iv27swyloC3Dft-Ihno-hEjTrLJhed-WYUA-ano5vPi_ozW34OdRFO-loauFio_A8BmTLzoh-xT9AnZWxjwmV11nJd25EBKju66_Zft3HInvJEue0XPPJXxU5c-xQonrmPG9Jt-7UimW11a6KMG_VoSK9At",
  },
];

export default function ProductGrid() {
  return (
    <section className="py-16 sm:py-24 bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Featured Products
          </h2>
          <a
            href="#"
            className="text-primary font-medium hover:underline mt-2 sm:mt-0"
          >
            View All
          </a>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="group flex flex-col gap-3 pb-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-full overflow-hidden rounded-lg">
                <div
                  className="h-full w-full aspect-[3/4] bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${p.image})` }}
                ></div>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-base font-medium text-slate-900 dark:text-white">
                  {p.name}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {p.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
