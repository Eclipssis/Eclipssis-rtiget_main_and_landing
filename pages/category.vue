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
    </div>

  </div>
</template>

<script>
  export default {
    name: 'category'    
  }
</script>

<style lang="sass">
.main-block
  padding-top: 160px

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
  
  
</style>
