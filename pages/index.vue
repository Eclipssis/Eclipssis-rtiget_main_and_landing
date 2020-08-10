<template>
  <div class="index-wrap">
    <div class="jumbtrone">
      <div class="container">
        <h1 class="jumbtrone__title">R.TIGER — сервис, который помогает быстро получить услугу в проверенной компании</h1>
        <p class="jumbtrone__text">
          Найдите профессионала с гарантией выполнения заказа по выбранной вами цене 
        </p>

        <div class="main-nav">
          <div class="main-nav__title">
            Расскажите о своем заказе <span class="color-primary">1000 компаниям</span> за 3 минут
          </div>

          <ul class="main-nav__list">
            <li class="main-nav__item">
              <div class="nav nav--active">
                <span class="nav__icon">
                  <i class="icon main-libra"></i>
                </span>
                <div class="nav__body">
                  <span class="nav__title">Юридические услуги</span>
                  <a class="nav__link">Выбрать услугу</a>
                </div>
              </div>
            </li>

            <li class="main-nav__item">
              <div class="nav nav--disabled">
                <span class="nav__icon">
                  <i class="icon calculator"></i>
                </span>
                <div class="nav__body">
                  <span class="nav__title">Услуги бухгалтеров и аудиторов</span>
                </div>
              </div>
            </li>

            <li class="main-nav__item">
              <div class="nav nav--disabled">
                <span class="nav__icon">
                  <i class="icon binocular"></i>
                </span>
                <div class="nav__body">
                  <span class="nav__title">Индивидуальные экскурсии</span>
                </div>
              </div>
            </li>

            <li class="main-nav__item">
              <div class="nav nav--disabled">
                <span class="nav__icon">
                  <i class="icon car"></i>
                </span>
                <div class="nav__body">
                  <span class="nav__title">Доставка грузов и таможенные услуги</span>
                </div>
              </div>
            </li>

            <li class="main-nav__item">
              <div class="nav nav--disabled">
                <span class="nav__icon">
                  <i class="icon translate"></i>
                </span>
                <div class="nav__body">
                  <span class="nav__title">Переводы и переводчики</span>
                </div>
              </div>
            </li>

            <li class="main-nav__item">
              <div class="nav nav--disabled">
                <span class="nav__icon">
                  <i class="icon zoom"></i>
                </span>
                <div class="nav__body">
                  <span class="nav__title">Экспертизы и экспертные услуги</span>
                </div>
              </div>
            </li>

            <li class="main-nav__item">
              <div class="nav nav--disabled">
                <span class="nav__icon">
                  <i class="icon transport"></i>
                </span>
                <div class="nav__body">
                  <span class="nav__title">Пассажирские перевозки</span>
                </div>
              </div>
            </li>

            <li class="main-nav__item">
              <div class="nav nav--active">
                <span class="nav__icon">
                  <i class="icon baloons"></i>
                </span>
                <div class="nav__body">
                  <span class="nav__title">Мероприятия в вашем городе</span>
                  <a class="nav__link">Выбрать услугу</a>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="main-banner">
          <div class="main-banner__body">
            <div class="main-banner__title">Получите <span class="main-banner__money">1000 ₽ </span> за отзыв о сервисе</div>
            <ul class="main-banner__list">
              <li>1. Закажите любую услугу в сервисе R.TIGER</li>
              <li>2. Запишите видеоотзыв о работе сервиса и получите 1000 ₽ на счет</li>
            </ul>
          </div>
          <div>
            <a href="#!" class="main-banner__link">Условия акции</a>
          </div>
        </div>

        <div class="video-block d-sm-none">
          <div class="play-btn">
            <i class="icon play-btn-grey"></i>
          </div>

          <span class="play-text">Видео о работе сервиса</span>
        </div>
      </div>
    </div>

    <div class="info-block">
      <div class="container">
        <h2 class="info-title">Мы <span class="highlight highlight--red">сопровождаем 100% заказов</span> до получения результата</h2>
        <div class="info-subtitle">Наша цель — решить вашу задачу и помочь на любом этапе решения вашего вопроса</div>
      
        <div class="steps">
          <div class="steps__item">
            <div class="step">
              <i class="icon step-1 mb-2"></i>
              <span class="steps__title">Приходите с задачей</span>
            </div>
          </div>

          <div class="steps__item">
            <i class="icon step-arrow"></i>
            <span class="steps__text">Мы сопровождаем заказ до получения результата</span>
          </div>

          <div class="steps__item">
            <div class="step">
              <i class="icon step-2 mb-2"></i>
              <span class="steps__title">Получите решение</span>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col col-8">
            <div class="info-item">
              <div class="info-item__body info-item__body--270 pt-5">
                <span class="info-item__title">
                  <span class="color-primary">1230 компаний </span>
                  подключено к сервису
                </span>
                <span class="info-item__text">Мы собрали специалистов со всей России, чтобы вы точно решили свою задачу </span>
              </div>
              <div class="info-item__image">
                <img src="@/static/content/map.jpg">
              </div>
            </div>
          </div>
          <div class="col col-4">
            <div class="info-item">
              <div class="info-item__body pt-md-3 pt-lg-5">
                <i class="icon rouble-stop mb-2 d-inline-block d-sm-none d-md-block"></i>
                <span class="info-item__title">
                  Сервис для клиентов бесплатный
                </span>
                <span class="info-item__text">потому что нам платят комиссию исполнители после выполнения заказа</span>
              </div>
              <div class="info-item__image d-none d-sm-inline-block d-md-none">
                <i class="icon rouble-stop mb-2"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col col-7">
            <div class="info-item">
              <div class="info-item__body pt-2 pt-md-5">
                <span class="info-item__title mb-md-5 pb-4">
                  Расскажите о своем заказе 1000 компаний за 3 минут
                </span>
                <a href="#!" class="info-item__video">
                  <i class="icon video-play-red mr-2"></i>
                  <span>Видео о работе сервиса</span>
                </a>
              </div>

              <div class="info-item__image">
                <img src="@/static/content/chat-image.jpg">
              </div>
            </div>
          </div>
          <div class="col col-5">
            <div class="info-item">
              <div class="info-item__body info-item__body--198 pt-2 pt-md-5">
                <span class="info-item__title">
                  Мы проверили каждую компанию по 9-ти критериям
                </span>

              </div>

              <div class="info-item__image">
                <div class="piramida">
                  <div class="piramida__item">
                    <img src="@/static/content/piramida-1.png">
                  </div>

                  <div class="piramida__item">
                    <img src="@/static/content/piramida-2.png">
                  </div>

                  <div class="piramida__item">
                    <img src="@/static/content/piramida-3.png">
                  </div>

                  <div class="piramida__item">
                    <img src="@/static/content/piramida-4.png">
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="info-item">
          <div class="info-item__body info-item__body--450 pt-5">
            <span class="info-item__title">
              Мы <span class="highlight highlight--red">сопровождаем 100% заказов</span> до получения результата
            </span>
            <span class="info-item__text">Вы назначайте цену за услугу и в процессе работы она не меняется</span>

            <div class="info-item__notify mt-4">
              <i class="icon touch-arrow mr-2"></i>
              <span>Двигайте ползунок, и смотрите, как меняется количество компаний</span>
            </div>
          </div>

          <div class="info-item__grafik">
            <div class="slider-wrap">
              <div class="slider-block">
                
                <span class="dot dot--start"></span>

                <div class="triangle-bg"></div>

                <div class="slider-tooltips">
                  <span class="slider-tooltips__item start">20 компаний</span>
                  <span class="slider-tooltips__item end">800 компаний</span>
                </div>
                <vue-slider 
                  v-model="value" 
                  :dotSize="[21, 36]"
                  :min="20"
                  :max="800"
                  :tooltip="'always'"
                />
                <div class="slider-legenda">
                  <span class="slider-legenda__item">1 000 ₽</span>
                  <div>
                    <span class="slider-legenda__title">
                      <span class="color-green d-block">Назначь свою цену</span>
                      3 000 ₽
                      <span class="slider-legenda__notify">Именно по этой стоимости будет выполнен заказ</span>
                      </span>
                  </div>
                  <span class="slider-legenda__item">5 000 ₽</span>
                </div>
                <span class="dot dot--end"></span>
              </div>
            </div>
          </div>

          <div class="info-item__description">
            * Цена указана для демонстрации функционала 
          </div>
        </div>


      </div>
    </div>

    <div class="about-us">
      <div class="container">

        <div class="green-banner">
          <div class="green-banner__image">
            <img src="@/static/content/banner-label.png">
          </div>

          <div class="green-banner__body">
            <div class="green-banner__title">Мы гарантируем, что вы получите результат по вашему заказу</div>
            <p class="green-banner__text">Заменим специалиста или вернем вам деньги — на ваш выбор</p>
          </div>
        </div>

        <h2 class="info-title">СМИ о нас</h2>

        <div class="smi-about">
          <div class="smi">
            <div class="smi__image">
              <img src="@/static/content/smi-image-1.jpg">
            </div>

            <div class="smi__inner">
              <p class="smi__text">“С помощью R.TIGER можно опубликовать заявку, зарезервировать бюджет и выбрать из откликнувшихся исполнителей лучшего всего за час”.</p>
              <a class="smi__link">Читать статью</a>
            </div>
          </div>

          <div class="smi">
            <div class="smi__image">
              <img src="@/static/content/smi-image-2.jpg">
            </div>

            <div class="smi__inner">
              <p class="smi__text">“С помощью R.TIGER можно опубликовать заявку, зарезервировать бюджет и выбрать из откликнувшихся исполнителей лучшего всего за час”.</p>
              <a class="smi__link">Читать статью</a>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="talk-about">
      <h2 class="info-title">
        Расскажите о своем заказе <span class="highlight highlight--red">1000 компаниям</span> за 3 минуты
      </h2>

      <div class="nav-list">
        <div class="nav nav--no-hover">
          <span class="nav__icon">
            <i class="icon main-libra"></i>
          </span>
          <div class="nav__body">
            <span class="nav__title">Юридические услуги</span>
            <a class="nav__link">Выбрать услугу</a>
          </div>
        </div>

        <div class="nav nav--no-hover">
          <span class="nav__icon">
            <i class="icon baloons"></i>
          </span>
          <div class="nav__body">
            <span class="nav__title">Мероприятия в вашем городе</span>
            <a class="nav__link">Выбрать мероприятие</a>
          </div>
        </div>
      </div>


    </div>

    <div class="partners">
      <div class="container">
        <h2 class="partners-title">Медиапартнеры</h2>

        <client-only>
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide
              v-for="slide in swiperSlides"
              :key="slide.id"
            >
              <div class="image-wrap">
                <img :src="getSlideImage(slide)">
              </div>
            </swiper-slide>

            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>

          </swiper>
        </client-only>
      </div>
    </div>

  </div>
</template>

<script>

  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/swiper-bundle.min.css'

  export default {

    components: {
      Swiper,
      SwiperSlide
    },

    data() {
      return {
        value: 400,
        swiperSlides: [
          {
            id: 1,
            image: 'partner-1.jpg'
          },
          {
            id: 2,
            image: 'partner-2.jpg'
          },
          {
            id: 3,
            image: 'partner-3.jpg'
          },
          {
            id: 4,
            image: 'partner-1.jpg'
          },
          {
            id: 5,
            image: 'partner-2.jpg'
          },
          {
            id: 6,
            image: 'partner-3.jpg'
          },
          {
            id: 7,
            image: 'partner-1.jpg'
          },
          {
            id: 8,
            image: 'partner-2.jpg'
          },
          {
            id: 9,
            image: 'partner-3.jpg'
          }
        ],
        swiperOption: {
          slidesPerView: 5,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          pagination: {
            el: '.swiper-pagination'
          },
        }
      }
    },

    methods: {
      getSlideImage(slide) {
        return require(`../static/content/${slide.image}`)
      }
    },
  }
</script>

<style lang="sass" scoped>

@import "~/assets/css/partials/_variables.sass"
@import "~/assets/css/partials/_mixins.sass"

</style>