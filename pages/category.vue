<template>
  <div>
    
    <div class="container">
      <section class="main-block">
        <div class="row">
          <div class="col-sm-6">
            <h2 class="main-block__title">
              Расскажите о своем заказе 
              1000 компаниям за 3 минуты 
              в городе Санкт-Петербург
            </h2>
            <p class="main-block__text">Выберите услугу, опишите задачу и получите предложения от компаний в рамках бюджета, который вы укажете.</p>
          
            <div class="row">
              <div class="col-sm-6">
                <a class="btn">Выбрать услугу</a>
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
          <div class="col-sm-6">
            <img src="@/static/content/main-image.png">
          </div>
        </div>
      </section>

      <div class="divider"></div>

      <ul class="breadcrubm mb-4">
        <li class="breadcrubm__item">
          <a href="#!" class="breadcrubm__link">Санкт-Петербург</a>
        </li>
        <li class="breadcrubm__item active">
          <a class="breadcrubm__link">Юридические услуги</a>
        </li>
      </ul>

      <div class="secondary-nav-block">
        <div class="nav-title mb-4">
          <span>Услуги для частных лиц</span>
          
          <div class="onoffswitch mx-3">
            <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" tabindex="0" checked>
            <label class="onoffswitch-label" for="myonoffswitch"></label>
          </div>

          <span>Услуги для бизнеса</span>
        </div>

        <div class="nav-wrap">
          <ul class="secondary-nav">
            <li class="secondary-nav__item">
              <a href="#!" class="secondary-nav__link font-700">Авторское право</a>
            </li>

            <li class="secondary-nav__item">
              <a href="#!" class="secondary-nav__link font-700">Гражданские споры</a>
            </li>

            <li class="secondary-nav__item">
              <a href="#!" class="secondary-nav__link">Имущество</a>
            </li>

            <li class="secondary-nav__item">
              <a href="#!" class="secondary-nav__link">Криптовалюты и блокчейн</a>
            </li>

            <li class="secondary-nav__item">
              <a href="#!" class="secondary-nav__link">Налогообложение</a>
            </li>

            <li class="secondary-nav__item">
              <a href="#!" class="secondary-nav__link">Реклама и СМИ</a>
            </li>

            <li class="secondary-nav__item">
              <a href="#!" class="secondary-nav__link font-700">Социальная защита</a>
            </li>

            <li class="secondary-nav__item">
              <a href="#!" class="secondary-nav__link font-700">Трудовые отношения</a>
            </li>

            <li class="secondary-nav__item">
              <a href="#!" class="secondary-nav__link">Экспертизы</a>
            </li>
          </ul>

          <ul class="secondary-nav">
            <li class="secondary-nav__item">
              <a href="#!" class="secondary-nav__link">Административные вопросы</a>
            </li>

            <li class="secondary-nav__item">
              <a href="#!" class="secondary-nav__link font-700">Жилищные вопросы</a>
            </li>

            <li class="secondary-nav__item">
              <a href="#!" class="secondary-nav__link">Инвестиции</a>
            </li>

            <li class="secondary-nav__item">
              <a href="#!" class="secondary-nav__link">Медицина</a>
            </li>

            <li class="secondary-nav__item">
              <a href="#!" class="secondary-nav__link">Патентование</a>
            </li>

            <li class="secondary-nav__item">
              <a href="#!" class="secondary-nav__link font-700">Семейные вопросы</a>
            </li>

            <li class="secondary-nav__item">
              <a href="#!" class="secondary-nav__link">Страхование</a>
            </li>

            <li class="secondary-nav__item">
              <a href="#!" class="secondary-nav__link font-500">Уголовные дела</a>
            </li>
          </ul>

          <ul class="secondary-nav">
            <li class="secondary-nav__item">
              <a href="#!" class="secondary-nav__link">Военная служба </a>
            </li>

            <li class="secondary-nav__item">
              <a href="#!" class="secondary-nav__link font-500">Защита прав потребителя</a>
            </li>

            <li class="secondary-nav__item">
              <a href="#!" class="secondary-nav__link">Кредиты и ипотека</a>
            </li>

            <li class="secondary-nav__item">
              <a href="#!" class="secondary-nav__link">Международное право</a>
            </li>

            <li class="secondary-nav__item">
              <a href="#!" class="secondary-nav__link">Проектирование и строительство</a>
            </li>

            <li class="secondary-nav__item">
              <a href="#!" class="secondary-nav__link font-700">Создание компании</a>
            </li>

            <li class="secondary-nav__item">
              <a href="#!" class="secondary-nav__link">Таможенные вопросы</a>
            </li>

            <li class="secondary-nav__item">
              <a href="#!" class="secondary-nav__link">Экология</a>
            </li>
          </ul>
        </div>

        <div class="text-center my-5">
          <div class="phone-info">
            <i class="icon phone-icon"></i>
            <div class="phone-info__body">
              <h3 class="phone-info__title">Не знайте какую категорию выбрать? </h3>
              <p class="phone-info__text">Напишите в онлайн-чат или позвоните 8 (800) 350-32-86 (звонок бесплатный)</p>
            </div>
          </div>
        </div>

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

        <ServiseCard></ServiseCard>
        <ServiseCard></ServiseCard>
        <ServiseCard></ServiseCard>
        <ServiseCard></ServiseCard>

        <div class="slider-wrap">
          <VueSlickCarousel :arrows="true" :dots="true" class="dots-overlay mb-4">
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

        <ServiseCard></ServiseCard>
        <ServiseCard></ServiseCard>
        <ServiseCard></ServiseCard>
        <ServiseCard></ServiseCard>

        <div class="slider-wrap">
          <VueSlickCarousel :arrows="true" :dots="true" class="dots-overlay mb-4">
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

        <ServiseCard></ServiseCard>
        <ServiseCard></ServiseCard>
        <ServiseCard></ServiseCard>
        <ServiseCard></ServiseCard>

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

      <section class="divorce-block">
        <h2 class="title-h2 text-left mb-4">Развод с разделом имущества</h2>

        <div class="row">
          <div class="col-sm-8">
            <p class="divorce-text">
              По закону  во время развода нажитое супругами имущество делится пополам 
              (если нет брачного контракта, где прописано другое), но вещи можно:
            </p>
            <ul class="divorce-list">
              <li>оставить одному из супругов;</li>
              <li>продать, а выручку поделить;</li>
              <li>возместить одним супругом другому;</li>
              <li>использовать совместно (например, сдавать в аренду).</li>
            </ul>
            <p class="divorce-text font-700">Обычно каждому из разводящихся остаются его личные предметы, а также вещи:</p>
            <ul class="divorce-list">
              <li>принадлежавшие еще до брака;</li>
              <li>подаренные;</li>
              <li>унаследованные</li>
            </ul>
            <p class="divorce-text">Поделить имущество можно одновременно с разводом или позже — миром (заключив соглашение) или в суде.</p>
            <p class="divorce-text">
              К заявлению в суд
              <span class="text-dashed">прилагаются копии:</span>
            </p>
            <a href="#!" class="btn offer-btn">Читать далее </a>
          </div>
          <div class="col-sm-4"></div>
        </div>
      </section>

      <section class="select-servise mb-4">
        <h2 class="title-h2 text-left">Выберите необходимую услугу в городе Санкт-Петербург</h2>

        <div class="secondary-nav-block">
          <div class="nav-title mb-4">
            <span>Услуги для частных лиц</span>
            
            <div class="onoffswitch mx-3">
              <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch-2" tabindex="0" checked>
              <label class="onoffswitch-label" for="myonoffswitch-2"></label>
            </div>

            <span>Услуги для бизнеса</span>
          </div>

          <div class="nav-wrap">
            <ul class="secondary-nav">
              <li class="secondary-nav__item">
                <a href="#!" class="secondary-nav__link font-700">Авторское право</a>
              </li>

              <li class="secondary-nav__item">
                <a href="#!" class="secondary-nav__link font-700">Гражданские споры</a>
              </li>

              <li class="secondary-nav__item">
                <a href="#!" class="secondary-nav__link">Имущество</a>
              </li>

              <li class="secondary-nav__item">
                <a href="#!" class="secondary-nav__link">Криптовалюты и блокчейн</a>
              </li>

              <li class="secondary-nav__item">
                <a href="#!" class="secondary-nav__link">Налогообложение</a>
              </li>

              <li class="secondary-nav__item">
                <a href="#!" class="secondary-nav__link">Реклама и СМИ</a>
              </li>

              <li class="secondary-nav__item">
                <a href="#!" class="secondary-nav__link font-700">Социальная защита</a>
              </li>

              <li class="secondary-nav__item">
                <a href="#!" class="secondary-nav__link font-700">Трудовые отношения</a>
              </li>

              <li class="secondary-nav__item">
                <a href="#!" class="secondary-nav__link">Экспертизы</a>
              </li>
            </ul>

            <ul class="secondary-nav">
              <li class="secondary-nav__item">
                <a href="#!" class="secondary-nav__link">Административные вопросы</a>
              </li>

              <li class="secondary-nav__item">
                <a href="#!" class="secondary-nav__link font-700">Жилищные вопросы</a>
              </li>

              <li class="secondary-nav__item">
                <a href="#!" class="secondary-nav__link">Инвестиции</a>
              </li>

              <li class="secondary-nav__item">
                <a href="#!" class="secondary-nav__link">Медицина</a>
              </li>

              <li class="secondary-nav__item">
                <a href="#!" class="secondary-nav__link">Патентование</a>
              </li>

              <li class="secondary-nav__item">
                <a href="#!" class="secondary-nav__link font-700">Семейные вопросы</a>
              </li>

              <li class="secondary-nav__item">
                <a href="#!" class="secondary-nav__link">Страхование</a>
              </li>

              <li class="secondary-nav__item">
                <a href="#!" class="secondary-nav__link font-500">Уголовные дела</a>
              </li>
            </ul>

            <ul class="secondary-nav">
              <li class="secondary-nav__item">
                <a href="#!" class="secondary-nav__link">Военная служба </a>
              </li>

              <li class="secondary-nav__item">
                <a href="#!" class="secondary-nav__link font-500">Защита прав потребителя</a>
              </li>

              <li class="secondary-nav__item">
                <a href="#!" class="secondary-nav__link">Кредиты и ипотека</a>
              </li>

              <li class="secondary-nav__item">
                <a href="#!" class="secondary-nav__link">Международное право</a>
              </li>

              <li class="secondary-nav__item">
                <a href="#!" class="secondary-nav__link">Проектирование и строительство</a>
              </li>

              <li class="secondary-nav__item">
                <a href="#!" class="secondary-nav__link font-700">Создание компании</a>
              </li>

              <li class="secondary-nav__item">
                <a href="#!" class="secondary-nav__link">Таможенные вопросы</a>
              </li>

              <li class="secondary-nav__item">
                <a href="#!" class="secondary-nav__link">Экология</a>
              </li>
            </ul>
          </div>

          <div class="row mt-4">
            <div class="col-sm-6">
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
          </div>

        </div>
      </section>

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

  export default {
    name: 'category',

    components: {
      ServiseCard
    },

    data() {
      return {
        value: 400
      }
    },
  }
</script>

<style lang="sass" scoped>

.title-h2
  font-size: 34px
  line-height: 1.2
  font-weight: 400

.main-block
  padding-top: 160px
  margin-bottom: 60px

  &__title
    font-weight: 500
    font-size: 42px
    line-height: 1.2
    letter-spacing: -0.02em
    margin-bottom: 18px
    text-align: left
  &__text
    font-size: 16px
    margin-bottom: 20px

  &__help-text
    display: block
    font-size: 12px
    position: relative
    padding-left: 26px
    margin-top: 22px
    &:before
      content: ' '
      position: absolute
      top: 50%
      margin-top: -10px
      left: 0
      width: 20px
      height: 20px
      background: url('../static/images/lock.svg') 50% no-repeat

.popup
  position: relative
  padding: 12px 15px 15px 21px
  background: #FFF2DE
  border: 2px solid rgba(165, 165, 165, 0.4)
  box-shadow: 0px 12px 20px rgba(96, 110, 119, 0.12)
  border-radius: 2px
  &__close
    display: inline-block
    float: right
    width: 10px
    height: 10px
    background: url('../static/images/popup-close.svg') 50% no-repeat

  &__text
    font-size: 15px
    line-height: 17px
  &__title
    font-size: 15px
    font-weight: 700
    margin-bottom: 4px

  &:after,
  &:before 
    content: ''
    display: block
    position: absolute
    right: 100%
    width: 0
    height: 0
    border-style: solid
  
  &:after 
    top: 30px
    border-color: transparent #FFF2DE transparent transparent 
    border-width: 10px
    margin-right: -2px
  

  &:before 
    top: 29px
    border-color: transparent rgb(219, 211, 199) transparent transparent 
    border-width: 11px
  
.secondary-nav-block
  .nav-title
    display: flex
    justify-content: center
    align-items: center

.nav-wrap
  display: flex
  justify-content: space-between

.secondary-nav
  &__item
    font-size: 18px
    margin-bottom: 15px
    
    &:before
      content: ' '
      display: inline-block
      margin-right: 7px
      width: 7px
      height: 7px
      background-color: #EB4745
      border-radius: 50%

  &__link
    color: #000000
    text-decoration: none
    transition: all 0.2s ease
    &:hover
      color: #EB4745

.phone-info
  display: inline-flex
  align-items: center
  text-align: left
  max-width: 520px
  background: #EDF4F9
  border-radius: 10px
  padding: 18px 20px
  
  &__body
    padding-left: 15px

  &__title
    font-weight: 500
    font-size: 17px

  &__text
    font-size: 15px

.category-title
  font-weight: 900
  font-size: 28px
  
.slider-body
  display: flex
  justify-content: space-around
  align-items: center 
  padding: 30px 80px
  min-height: 250px
  display: flex
  align-items: center
  background: linear-gradient(0deg, #FFFAF3, #FFFAF3)
  border: 1px solid rgba(165, 165, 165, 0.5)
  border-radius: 4px

.slider-inner
  max-width: 400px

.slider-title
  font-weight: 500
  font-size: 27px

.slider-text
  font-size: 14px

.slider-wrap
  padding: 0 40px

.find-lawyer
  padding: 60px 0

.lawer-item
  text-align: center
  padding: 0 10px

.lawer-image
  display: flex
  align-items: center
  justify-content: center
  margin-bottom: 5px
  min-height: 250px
  line-height: 250px
  img
    margin: 0 auto

.lawer-text
  font-weight: 500
  font-size: 21px
  letter-spacing: -0.03em
  margin-bottom: 6px
.lawer-description
  font-weight: 500
  font-size: 18px
  color: #2B8EE0

.offer-btn 
  box-shadow: none
  padding: 18px 35px
  font-weight: 500

.same-servises
  padding: 40px 0 20px
  background: rgba(#A5A5A5, 0.2)
  .title-h3
    font-weight: 500
    font-size: 15px
    color: #606E77



.servise-text
  display: inline-block
  font-size: 13px
  max-width: 260px


.divorce-block
  padding: 0 0 60px

.divorce-text
  font-size: 19px

.divorce-list
  margin-bottom: 15px
  padding-left: 20px
  > li
    font-size: 19px
    line-height: 19px
    display: flex
    align-items: center
    margin-bottom: 12px
    &:before
      content: ''
      display: inline-block
      margin-top: 5px
      width: 5px
      height: 5px
      background: #EB4745
      border-radius: 50%
      margin-right: 15px

</style>
<style lang="sass">
@import "~/assets/css/partials/_variables.sass"
@import "~/assets/css/partials/_mixins.sass"

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

.servises-same-slick.slick-slider 
  .slick-next
    right: -10px

  .slick-prev
    left: -30px

.offer
  background: #222F38
  padding: 50px 0

  .main-block__title
    font-size: 33px
    color: #fff

  .main-block__text,
  .main-block__help-text
    color: #fff

  .main-block__text
    font-size: 15px
    

</style>