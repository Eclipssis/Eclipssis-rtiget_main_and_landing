<template>
  <div class="category category-next">
    
    <div class="container">
      <section class="main-block">
        
        <div class="main-block-new text-center">
          <h1 class="main-block__title text-center">Помощь в спорах с застройщиками в Москве</h1>
          <p class="main-block__text">Опишите задачу и получите предложения от юридических <br> компаний в рамках бюджета, который вы укажете</p>
          
          <div class="btn-popup">
            <a class="btn">Оформить заказ и получить предложения от компаний </a>
            <div class="popup">
              <span class="popup__close"></span>
              <h3 class="popup__title">Ищите юристов недорого?</h3>
              <div class="popup__text">Установите цену, и получите предложения от компаний в течении 15 минут.</div>
            </div>
          </div>

          <div>
            <span class="main-block__help-text">
              Мы не раскрываем ваши личные данные
            </span>
          </div>

          <div class="phone-info mt-4">
            <i class="icon phone-icon"></i>
            <div class="phone-info__body">
              <h3 class="phone-info__title">Оформить заявку по телефону </h3>
              <p class="phone-info__text">Наши специалисты оформят заявку за вас бесплатно. </p>
            </div>
          </div>
        </div>

      </section>

      <div class="divider"></div>

      <!-- <ul class="breadcrubm mb-4">
        <li class="breadcrubm__item">
          <a href="#!" class="breadcrubm__link">Санкт-Петербург</a>
        </li>
        <li class="breadcrubm__item active">
          <a class="breadcrubm__link">Юридические услуги</a>
        </li>
      </ul> -->
      <div class="dispute">
        <div class="row">
          <div class="col-sm-7">
            <h2 class="dispute__title">Cпоры с застройщиками</h2>
            <p class="dispute__text">
              По закону  во время развода нажитое супругами имущество делится пополам 
              (если нет брачного контракта, где прописано другое), но вещи можно:
            </p>
            <a class="btn">ЧИТАТЬ ДАЛЕЕ</a>
          </div>
          <div class="col-sm-4 offset-sm-1">
            <div class="dispute__subtitle mb-3 mt-5">Похожие услуги</div>
            <ul class="dispute__list">
              <li><a href="#!">Регистрация ИП</a></li>
              <li><a href="#!">Регистрация ООО</a></li>
              <li><a href="#!">Защита от коллекторов</a></li>
            </ul>
          </div>
        </div>
      </div>


      <div class="secondary-nav-block">

        <div class="row">
          <div class="col-sm-9">
            <h2 class="category-title text-left mb-2">
              <span class="color-primary">472</span> юридических компаний готовы решить вашу задачу
            </h2>

            <p class="mb-4">
              Вам не придется открывать десятки сайтов, звонить или куда-то ездить. 
              R.TIGER объединяет профильных специалистов на одном сайте для решения ваших задач.
            </p>
          </div>
        </div>

        <ServiseCard :servise="serviseList[0]"></ServiseCard>
        <ServiseCard :servise="serviseList[1]"></ServiseCard>
        <ServiseCard :servise="serviseList[2]"></ServiseCard>
        <ServiseCard :servise="serviseList[3]"></ServiseCard>

        <div class="slider-wrap">
          <VueSlickCarousel :arrows="true" :dots="true" class="dots-overlay beige-bg mb-4">
            <div>
              <div class="slider-body">
                <div class="slider-inner">
                  <p class="slider-text mb-2">Преимущества сервиса </p>
                  <h3 class="slider-title">Мы не раскрываем ваши личные данные</h3>
                </div>

                <div class="slider-image">
                  <img src="@/static/content/slider-card.png">
                </div>
              </div>
            </div>

            <div>
              <div class="slider-body">
                <div class="slider-inner">
                  <p class="slider-text">Преимущества сервиса </p>
                  <h3 class="slider-title">Мы не раскрываем ваши личные данные</h3>
                </div>

                <div class="slider-image">
                  <img src="@/static/content/slider-card.png">
                </div>
              </div>
            </div>
          </VueSlickCarousel>
        </div>

        <ServiseCard :servise="serviseList[4]"></ServiseCard>
        <ServiseCard :servise="serviseList[5]"></ServiseCard>
        <ServiseCard :servise="serviseList[6]"></ServiseCard>
        <ServiseCard :servise="serviseList[7]"></ServiseCard>

        <div class="slider-wrap ">
          <div class="review-slider">
            <h2 class="text-left mb-3">Отзывы о сервисе</h2>
            <VueSlickCarousel :arrows="true" :dots="true" class="dots-overlay beige-bg mb-4">
              <div>
                <div class="review-card">
                  <div class="review-card__image">
                    <img src="@/static/content/mark.jpg">
                    <i class="icon review-play"></i>
                  </div>

                  <div class="review-card__name">
                    <i class="icon review-insta mr-1"></i>
                    missrussiatwins
                  </div>
                  <p class="review-card__text">“Мы нашли удобный сервис R.TIGER — найти адекватного юриста в пару кликов очень просто... ” </p>
                </div>
              </div>
            </VueSlickCarousel>
          </div>
        </div>

        <ServiseCard :servise="serviseList[8]"></ServiseCard>
        <ServiseCard :servise="serviseList[9]"></ServiseCard>
        <ServiseCard :servise="serviseList[10]"></ServiseCard>
        <ServiseCard :servise="serviseList[11]"></ServiseCard>

        <div class="slider-wrap">
          <VueSlickCarousel :arrows="true" :dots="true" class="dots-overlay beige-bg mb-4">
            <div>
              <div class="slider-body">
                <div class="slider-inner">
                  <p class="slider-text mb-2">Преимущества сервиса </p>
                  <h3 class="slider-title">Мы не раскрываем ваши личные данные</h3>
                </div>

                <div class="slider-image">
                  <img src="@/static/content/slider-card.png">
                </div>
              </div>
            </div>

            <div>
              <div class="slider-body">
                <div class="slider-inner">
                  <p class="slider-text">Преимущества сервиса </p>
                  <h3 class="slider-title">Мы не раскрываем ваши личные данные</h3>
                </div>

                <div class="slider-image">
                  <img src="@/static/content/slider-card.png">
                </div>
              </div>
            </div>
          </VueSlickCarousel>
        </div>

        <ServiseCard :servise="serviseList[12]"></ServiseCard>
        <ServiseCard :servise="serviseList[13]"></ServiseCard>
        <ServiseCard :servise="serviseList[14]"></ServiseCard>
        <ServiseCard :servise="serviseList[15]"></ServiseCard>

        <div class="slider-wrap">
          <VueSlickCarousel :arrows="true" :dots="true" class="dots-overlay beige-bg mb-4">
            <div>
              <div class="slider-body">
                <div class="slider-inner">
                  <p class="slider-text mb-2">Преимущества сервиса </p>
                  <h3 class="slider-title">Мы не раскрываем ваши личные данные</h3>
                </div>

                <div class="slider-image">
                  <img src="@/static/content/slider-card.png">
                </div>
              </div>
            </div>

            <div>
              <div class="slider-body">
                <div class="slider-inner">
                  <p class="slider-text">Преимущества сервиса </p>
                  <h3 class="slider-title">Мы не раскрываем ваши личные данные</h3>
                </div>

                <div class="slider-image">
                  <img src="@/static/content/slider-card.png">
                </div>
              </div>
            </div>
          </VueSlickCarousel>
        </div>

        <ServiseCard :servise="serviseList[16]"></ServiseCard>
        <ServiseCard :servise="serviseList[17]"></ServiseCard>
        <ServiseCard :servise="serviseList[18]"></ServiseCard>
        <ServiseCard :servise="serviseList[19]"></ServiseCard>

        <div class="slider-wrap">
          <VueSlickCarousel :arrows="true" :dots="true" class="dots-overlay beige-bg mb-4">
            <div>
              <div class="slider-body">
                <div class="slider-inner">
                  <p class="slider-text mb-2">Преимущества сервиса </p>
                  <h3 class="slider-title">Мы не раскрываем ваши личные данные</h3>
                </div>

                <div class="slider-image">
                  <img src="@/static/content/slider-card.png">
                </div>
              </div>
            </div>

            <div>
              <div class="slider-body">
                <div class="slider-inner">
                  <p class="slider-text">Преимущества сервиса </p>
                  <h3 class="slider-title">Мы не раскрываем ваши личные данные</h3>
                </div>

                <div class="slider-image">
                  <img src="@/static/content/slider-card.png">
                </div>
              </div>
            </div>
          </VueSlickCarousel>
        </div>

        <ServiseCard :servise="serviseList[20]"></ServiseCard>
        <ServiseCard :servise="serviseList[21]"></ServiseCard>
        <ServiseCard :servise="serviseList[22]"></ServiseCard>
        <ServiseCard :servise="serviseList[23]"></ServiseCard>

        <div class="main-banner main-banner--grey-bg main-banner--border-none mb-4">
          <div class="main-banner__body">
            <div class="main-banner__title">Получите <span class="main-banner__money">1000 ₽ </span> за отзыв о сервисе</div>
            <button class="btn">Узнать, как получить 1000 ₽</button>
          </div>
          <div>
            <a href="#!" class="main-banner__link">Условия акции</a>
          </div>
        </div>

        <div class="info-item info-item--overlay info-item--border">
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

    <div class="offer">
      <div class="container">
        <div class="row align-center">
          <div class="col-sm-6">
            <h2 class="main-block__title">
              Оформите бесплатную заявку, а мы отправим 
              ее всем юридическим компаниям в сервисе
            </h2>
            <p class="main-block__text">
              Получите первые подтверждения от компаний на выполнение заказа в течении 15 мин после оформления заявки Оформить заявку
            </p>
          
            <div class="row">
              <div class="col-sm-6">
                <a class="btn offer-btn">Оформить заявку</a>
                <span class="main-block__help-text">
                  Мы не раскрываем ваши личные данные
                </span>
              </div>
              <div class="col-sm-6">
                <div class="popup">
                  <span class="popup__close"></span>
                  <h3 class="popup__title">Ищите юристов недорого?</h3>
                  <div class="popup__text">Установите цену, и получите предложения от компаний в течении 15 минут.</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 text-center">
            <img src="@/static/content/offer-image.png">
          </div>
        </div>
      </div>   
    </div>

    <div class="container">
      <section class="find-lawyer">
        <h2 class="title-h2 text-center">Как сервис R.TIGER поможет найти юриста </h2>

        <div class="pb-4">
          <VueSlickCarousel :arrows="false" :slidesToShow="3" :dots="true" class="mb-4">
            <div>
              <div class="lawer-item mb-3">
                <div class="lawer-image">
                  <img src="@/static/content/lawer-image-1.jpg">
                </div>

                <p class="lawer-text">Опишите задачу, ответив на несколько вопросов в анкете</p>
                <div class="lawer-description">в среднем занимает 3 мин</div>
              </div>
            </div>

            <div>
              <div class="lawer-item mb-3">
                <div class="lawer-image">
                  <img src="@/static/content/lawer-image-2.jpg">
                </div>

                <p class="lawer-text"> Мы отравим ваш заказ всем подходящим компаниям в сервисе</p>
              </div>
            </div>

            <div>
              <div class="lawer-item mb-3">
                <div class="lawer-image">
                  <img src="@/static/content/lawer-image-3.jpg">
                </div>

                <p class="lawer-text">Вы получите перечень компаний, готовых работать на ваших условиях</p>
              </div>
            </div>

            <div>
              <div class="lawer-item mb-3">
                <div class="lawer-image">
                  <img src="@/static/content/lawer-image-1.jpg">
                </div>

                <p class="lawer-text">Опишите задачу, ответив на несколько вопросов в анкете</p>
                <div class="lawer-description">в среднем занимает 3 мин</div>
              </div>
            </div>

            <div>
              <div class="lawer-item mb-3">
                <div class="lawer-image">
                  <img src="@/static/content/lawer-image-2.jpg">
                </div>

                <p class="lawer-text"> Мы отравим ваш заказ всем подходящим компаниям в сервисе</p>
              </div>
            </div>

            <div>
              <div class="lawer-item mb-3">
                <div class="lawer-image">
                  <img src="@/static/content/lawer-image-3.jpg">
                </div>

                <p class="lawer-text">Вы получите перечень компаний, готовых работать на ваших условиях</p>
              </div>
            </div>

          </VueSlickCarousel>
        </div>

        <div class="divider"></div>
      </section>

      <div class="main-block-new text-center mb-5">
        <h1 class="main-block__title text-center">Помощь в спорах с застройщиками в Москве</h1>
        <p class="main-block__text">Опишите задачу и получите предложения от юридических <br> компаний в рамках бюджета, который вы укажете</p>
        <div class="btn-popup">
          <a class="btn">Оформить заказ и получить предложения от компаний </a>
          <div class="popup">
            <span class="popup__close"></span>
            <h3 class="popup__title">Ищите юристов недорого?</h3>
            <div class="popup__text">Установите цену, и получите предложения от компаний в течении 15 минут.</div>
          </div>
        </div>
        <div>
          <span class="main-block__help-text">
            Мы не раскрываем ваши личные данные
          </span>
        </div>

        <div class="phone-info mt-4">
          <i class="icon phone-icon"></i>
          <div class="phone-info__body">
            <h3 class="phone-info__title">Оформить заявку по телефону </h3>
            <p class="phone-info__text">Наши специалисты оформят заявку за вас бесплатно. </p>
          </div>
        </div>
      </div>

    </div>

    <section class="same-servises">
      <div class="container">
        <h3 class="title-h3 mb-3">Похожие услуги в городе Санкт-Петербург</h3>
        
        <VueSlickCarousel :arrows="true" :slidesToShow="4" :dots="false" class="servises-same-slick mb-4">
          <div>
            <span class="servise-text">Развод с разделом имущества: инструкция для новичков</span>
          </div>

          <div>
            <span class="servise-text">Что делать дольщикам: застройщик объявлен банкротом</span>
          </div>

          <div>
            <span class="servise-text">Все о возврате налога за лечение: от расчетов до заполнения документов...</span>
          </div>

          <div>
            <span class="servise-text">Подробная инструкция по получению налогового вычета на ребенка инвалида</span>
          </div>

          <div>
            <span class="servise-text">Что делать дольщикам: застройщик объявлен банкротом</span>
          </div>

          <div>
            <span class="servise-text">Подробная инструкция по получению налогового вычета на ребенка инвалида</span>
          </div>

        </VueSlickCarousel>

        <ul class="breadcrubm mb-4">
          <li class="breadcrubm__item">
            <a href="#!" class="breadcrubm__link">Санкт-Петербург</a>
          </li>
          <li class="breadcrubm__item active">
            <a class="breadcrubm__link">Юридические услуги</a>
          </li>
        </ul>

      </div>
    </section>

  </div>
</template>

<script>
  import ServiseCard from "@/components/ServiseCard";
  import fakeServiseList from "@/dummyData/serviseList";

  export default {
    name: 'category',

    components: {
      ServiseCard
    },

    data() {
      return {
        value: 400,
        serviseList: fakeServiseList
      }
    },
  }
</script>

<style lang="sass">

.vue-slider-dot-handle
  border-radius: 17px
  border: 1px solid #A5A5A5
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.15)

.vue-slider-dot-tooltip-inner
  border: none
  background: none
  color: #5A9811
  font-weight: 500
  font-size: 17px
  margin-bottom: 30px

.vue-slider-dot-tooltip-inner-top::after
  border: none
  width: 1px
  height: 30px
  background: #A5A5A5
  top: 28px
</style>