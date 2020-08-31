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
          <div class="col-sm-8">
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
          <div class="col-sm-4">
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
          <div class="col-sm-7">
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
          <div class="col-sm-5">
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

    <!-- Modals -->

    <client-only>
      <modal name="confirm-email" :width="'30%'" :height="'auto'" class="confirm-email">
        <div class="confirm-email-body">
          
          <h2 class="text-center">Cпасибо за регистрацию.</h2>
          
        </div>
      </modal>
    </client-only>

  </div>
</template>

<script>

  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/swiper-bundle.min.css'
  import { mapState } from "vuex";

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

    computed: {
      ...mapState({
        confirmEmailDialog: state => state.dialogs.confirmEmailDialog
      })
    },

    methods: {
      getSlideImage(slide) {
        return require(`../static/content/${slide.image}`)
      }
    },

    beforeRouteEnter (to, from, next) {
      console.log('from', from)
      console.log('to', to.query.token)
      next(vm => {
        console.log('vm.$router', vm.$router)
        if (vm.confirmEmailDialog) {
          vm.$modal.show('confirm-email')
        }
        
      })
    },
  }
</script>

<style lang="sass" scoped>

@import "~/assets/css/partials/_variables.sass"
@import "~/assets/css/partials/_mixins.sass"

.jumbtrone
  padding-top: 90px
  background: rgba(75, 159, 229, 0.1)
  padding-bottom: 50px
  +laptop
    padding-top: 122px
  +desktop
    padding-top: 162px

  &__title
    font-size: 22px
    line-height: 1.2
    margin-bottom: 15px
    +tablet
      padding: 0 80px
      font-size: 24px
    +laptop
      padding: 0
      font-size: 38px
      max-width: 925px
      margin: 0 auto 15px

  &__text
    font-size: 15px
    line-height: 1.3
    margin-bottom: 25px
    text-align: center
    font-weight: 300
    +tablet
      font-size: 17px
      max-width: 465px
      margin: 0 auto 35px
    +laptop
      font-size: 20px
      margin-bottom: 35px

.main-nav
  
  background: #ffffff
  padding: 25px 20px
  margin: 0 -15px 15px
  +laptop
    border-radius: 20px
    padding: 35px 40px
    margin-bottom: 40px

  
  &__title
    text-align: center
    font-weight: 500
    font-size: 19px
    letter-spacing: -0.03em
    margin-bottom: 25px 

  &__list
    display: flex
    align-items: center
    flex-wrap: wrap
    +laptop
      margin: 0 -10px
    +desktop
      margin: 0 -20px

  &__item
    flex: 1 1 100%
    margin-bottom: 5px
    +tablet
      flex: 1 1 50%
      max-width: 50%
    +laptop
      flex: 1 1 25%
      max-width: 25%
      padding: 0 10px
    +desktop
      padding: 0 20px

.nav
  display: flex
  align-items: center
  padding: 13px
  max-width: 290px
  margin: 0 auto
  transition: all 0.2s ease
  +desktop
    padding: 17px

  &--active
    border: 1px dashed #606E77
    border-radius: 4px

  &--disabled
    opacity: 0.35
    .nav__icon
      filter: grayscale(2)

    .nav__title
      color: #606E77

  &:hover
    background: #edf5fc

  &--no-hover:hover
    background: none
  
  &__icon
    min-width: 45px
    text-align: center
    margin-right: 10px
  &__body

  &__title
    font-size: 15px
    line-height: 1.2
    color: #474E53
    display: block
  &__link
    color: $red-light
    font-weight: 500
    font-size: 12px
    line-height: 1.1
    text-decoration: underline
    &:hover
      text-decoration: none

.main-banner
  display: flex
  justify-content: space-between
  flex-direction: column
  padding: 22px 20px
  background-color: $red
  background-image: url('../static/images/banner-image.png'), url('../static/images/main-banner-bg.png')
  background-repeat: no-repeat
  border-radius: 20px
  background-position: 196% 88px, 85% 54px
  background-size: 78%
  +tablet 
    flex-direction: row
    padding: 22px 25px
    background-size: 60%
    background-position: 135% -5%, 95% 35%
  +laptop
    background-position: 100% 20%, 77% 45%
    background-size: initial
  &__body
    color: #fff

  &__title
    font-size: 20px
    font-weight: 700
    margin-bottom: 10px
    max-width: 200px
    +tablet
      max-width: 240px
      font-size: 23px
    +laptop
      max-width: 100%

  &__list
    font-size: 14px
    max-width: 300px
    display: none
    +tablet
      display: block
    +laptop
      max-width: 100%

  &__money
    font-size: 27px
    +tablet
      font-size: 38px
    +laptop
      font-size: 44px

  &__link
    display: inline-block
    color: #fff
    font-size: 14px
    letter-spacing: -0.03em
    margin-top: 80px
    +tablet
      margin-top: 0

.video-block
  padding: 20px 0
  max-width: 210px
  margin: 0 auto
  display: flex
  align-items: center
  .play-btn
    display: inline-flex
    align-items: center
    justify-content: center
    width: 40px
    height: 40px
    margin-right: 10px
    background: url('../static/images/play-btn-bg.jpg') 50% no-repeat

  .play-text
    color: $red
    text-decoration-line: underline
    font-size: 14px

.info-block
  padding: 50px 0 30px
  background: rgba(179, 192, 202, 0.1)

.info-title
  font-size: 20px
  font-weight: 500
  margin-bottom: 10px
  +tablet
    font-size: 22px
  +laptop
    font-size: 28px


.info-subtitle
  font-size: 14px
  max-width: 370px
  margin: 0 auto
  text-align: center

.steps
  display: flex
  justify-content: center
  margin-bottom: 60px
  flex-direction: column
  +tablet
    flex-direction: row

.steps
  text-align: center
  margin-top: 50px
  &__item
    padding: 0 10px
    &:nth-child(2)
      display: flex
      max-width: 300px
      margin: 20px auto
      +tablet
        display: block
        max-width: 100%
        margin: 0
      
 
  &__title
    display: block
    font-weight: 500
    font-size: 16px
  &__text
    display: block
    font-size: 14px
    max-width: 200px
    margin: 0 auto
    text-align: left
    +tablet
      max-width: 100%

  .step-arrow
    flex: 1 1
    margin-bottom: 10px
    margin-top: 15px
    transform: rotate(90deg)
    max-width: 50px
    +tablet
      max-width: 100%
      transform: none
  
.info-item
  background: #ffffff
  border-radius: 20px
  display: flex
  align-items: center
  justify-content: space-between
  flex-wrap: wrap
  margin-bottom: 20px
  padding: 10px 12px
  flex-direction: column
  +tablet
    flex-direction: row
    padding: 20px 20px  
  +laptop
    align-items: flex-start
    padding: 10px 20px
    min-height: 275px

  &__body
    flex: 1 1
    margin-right: 15px
    margin-bottom: 20px
    +tablet
      max-width: 35%
      margin-bottom: 0
    +laptop
      max-width: 100%

    &--270
      +tablet
        max-width: 280px
    &--198
      +laptop
        max-width: 115px
      +desktop
        max-width: 198px
    &--450
      +tablet
        max-width: 100%
      +laptop
        max-width: 450px

  &__grafik
    text-align: center
    flex: 1 1 100%
    width: 100%
    +laptop
      flex: 1 1

  &__title
    display: block
    font-weight: 500
    line-height: 1.45
    font-size: 18px
    +tablet
      font-size: 20px
      line-height: 1.2
    +desktop
      font-size: 22px

  &__text
    font-size: 14px
    display: block
    margin-top: 10px
  &__image
    text-align: center
    flex: 1 1
  &__video
    font-size: 13px
    line-height: 19px
    color: $red
    display: inline-flex
    align-items: center
    text-decoration: underline
    &:hover
      text-decoration: none
  &__description
    font-size: 11px
    line-height: 11px
    opacity: 0.7
    width: 100%
    text-align: right
    padding-top: 20px
  &__notify
    display: flex
    max-width: 280px
    font-size: 13px

  .vue-slider-dot-handle
    border-radius: 17px
    border: 1px solid #A5A5A5
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.15)

  .vue-slider-dot-tooltip-inner
    border: none
    background: none
    color: $green
    font-weight: 500
    font-size: 17px
    margin-bottom: 30px
  
  .vue-slider-dot-tooltip-inner-top::after
    border: none
    width: 1px
    height: 30px
    background: #A5A5A5
    top: 28px

.piramida
  &__item
    position: relative
    margin-top: -13px
    transition: all 0.4s ease
    &:hover
      transform: scale(1.1)
    &:nth-child(1)
      margin-top: 0
    // &:nth-child(2)
    //   margin-top: -5px
    // &:nth-child(3)
    //   margin-top: -5px
    // &:nth-child(4)
    //   margin-top: -5px
    
.slider-wrap
  margin-top: 18px

.slider-block
  position: relative
  overflow: hidden
  padding: 10px 12px 10px
  .dot
    position: absolute
    z-index: 2
    width: 7px
    height: 7px
    background: #474E53
    border-radius: 50%
    bottom: 26px
    &--start
      left: 10px
    &--end
      right: 10px

.triangle-bg
  position: relative
  bottom: -21px
  width: 100%
  height: 96px
  background: url('../static/images/slider-triangle.png') 100% 100% no-repeat
  background-size: 85%

.slider-legenda
  position: absolute
  display: flex
  justify-content: space-between
  width: 100%
  bottom: -62px
  font-weight: 500
  text-align: center
  &__item
    font-size: 16px
  &__title
    font-size: 18px
    display: block
  &__notify
    display: block
    font-weight: normal
    font-size: 12px

.slider-tooltips
  position: absolute
  width: 100%
  display: flex
  justify-content: space-between
  bottom: 45px
  &__item
    font-weight: 500
    font-size: 16px
    &.start
      align-self: flex-end
    &.end
      padding-right: 20px
      margin-bottom: 45px
      +mobile
        margin-bottom: 75px
      +tablet
        margin-bottom: 75px
      +laptop
        margin-bottom: 55px
      +desktop
        margin-bottom: 75px

.about-us
  padding: 45px 0

.about-us-title
  font-weight: 700
  font-size: 28px
  line-height: 33px
  margin-bottom: 25px

.green-banner
  display: flex
  align-items: center
  flex-direction: column-reverse
  background: rgba(47, 168, 79, 0.06)
  border: 1px solid #2FA84F
  border-radius: 7px
  padding: 10px 30px
  max-width: 730px
  margin: 0 auto 45px
  text-align: center
  +tablet
    flex-direction: row
    text-align: left

  &__image
    margin-right: 15px
  &__body

  &__title
    font-weight: 500
    font-size: 20px
    line-height: 1.1
    margin-bottom: 10px
    +laptop
      font-size: 24px

  &__text
    font-size: 14px
    line-height: 1.3
    +tablet
      font-size: 16px

.smi-about
  padding: 15px 0 15px
  +laptop
    padding: 25px 0 40px

.smi-title
  text-align: center
  margin-bottom: 20px
  font-weight: 700
  font-size: 18px
  +tablet
    font-weight: 500
    font-size: 26px

.smi + .smi
  margin-top: 30px

.smi
  display: flex
  flex-direction: column
  max-width: 915px
  margin: 0 auto
  +laptop
    align-items: center
    flex-direction: row

  &__image
    max-width: 140px
    margin-right: 20px
    +laptop
      max-width: initial
      min-width: 170px
      margin-right: 40px
      

  &__divider
    height: 140px
    width: 1px
    background: #C7CED4
    margin: 0 30px

  &__text
    font-size: 14px
    line-height: 1.6
    margin-bottom: 12px
    +laptop
      font-size: 18px

  &__link
    display: inline-block
    border-bottom: 1px dashed #222F38
    font-size: 14px
    &:hover
      border-bottom: 1px dashed transparent

    +laptop
      font-size: 15px

.talk-about
  background: rgba(179, 192, 202, 0.1)
  padding: 25px 15px
  +laptop
    padding: 50px 0

.nav-list
  display: flex
  justify-content: center
  flex-direction: column
  +tablet 
    flex-direction: row
  .nav
    margin: 0
    max-width: 400px

  .info-title
    margin-bottom: 30px

.partners
  padding: 15px 0
  background: #ffffff

.partners-title

div.swiper
  padding: 30px 0
  .image-wrap
    text-align: center

.confirm-email-body
  min-height: 300px
  padding-top: 50px

</style>