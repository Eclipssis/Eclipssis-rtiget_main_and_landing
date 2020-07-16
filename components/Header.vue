<template>
  <div class="header">
    
    <client-only>
      <modal name="auth-modal" class="auth" :height="'auto'">
        <div class="auth-modal">
          <div class="auth-header">
            <a class="auth-nav" :class="{active: activeAuth === 'login'}" @click="activeAuth = 'login'">ВХОД</a>
            <a class="auth-nav" :class="{active: activeAuth === 'register'}" @click="activeAuth = 'register'">ЗАРЕГИСТРИРОВАТЬСЯ</a>
          </div>
          <div class="auth-body">
            <template v-if="activeAuth === 'login'">
              <div class="mb-4">
                <input type="text" class="auth-input" placeholder="Электронная почта">
                <span class="input-error">Необходимо заполнить «Электронная почта».</span>
              </div>

              <div class="mb-4">
                <input type="password" class="auth-input" placeholder="Пароль">
                <span class="input-error">Необходимо заполнить «Пароль».</span>
              </div>

              <div class="text-right mb-3">
                <a class="link link-black link-undeline">Забыли пароль?</a>
              </div>

              <div>
                <a class="btn btn-large w-100 text-uppercase">Войти</a>
              </div>

              <div class="text-center my-2">Или войти с помощью:</div>

          
              <ul class="social mt-4 mb-3">
                <li class="social-item"><a class="vk-color social-link" title="VKontakte"></a></li>
                <li class="social-item"><a class="fb-color social-link" title="Facebook"></a></li>
                <li class="social-item"><a class="tw-color social-link" title="Twitter"></a></li>
                <li class="social-item"><a class="ok-color social-link" title="Odnoklassniki"></a></li>
                <li class="social-item"><a class="ya-color social-link" title="Yandex"></a></li>
                <li class="social-item"><a class="gl-color social-link" title="Google"></a></li>
              </ul>

              <div class="auth-footer">
                <div>Нет аккаунта?</div>
                <div>
                  <a class="link color-red">Зарегистрироваться</a>
                </div>
              </div>
            </template>

            <template v-if="activeAuth === 'register'">
              <div class="mb-4">
                <input type="text" class="auth-input" placeholder="Электронная почта">
                <span class="input-error">Необходимо заполнить «Электронная почта».</span>
              </div>

              <div class="mb-4">
                <input type="text" class="auth-input" placeholder="Телефон">
                <span class="input-error">
                  Укажите номер телефона, по которому сотрудники сервиса смогут при необходимости связаться с вами. 
                  Мы никому не передадим ваш номер и не будем присылать спам.
                </span>
              </div>

              <Checkbox :vertical-align="'top'" class="mb-4">
                Регистрируясь в Сервисе Вы даете свое согласие на обработку персональных данных согласно 
                <a class="color-blue">Положению о конфиденциальности персональных данных</a>
              </Checkbox>

              <div>
                <a class="btn btn-large w-100 text-uppercase">Зарегистрироваться</a>
              </div>

              <div class="text-center my-2">Или зарегистрироваться с помощью:</div>

              <ul class="social mt-4 mb-3">
                <li class="social-item"><a class="vk-color social-link" title="VKontakte"></a></li>
                <li class="social-item"><a class="fb-color social-link" title="Facebook"></a></li>
                <li class="social-item"><a class="tw-color social-link" title="Twitter"></a></li>
                <li class="social-item"><a class="ok-color social-link" title="Odnoklassniki"></a></li>
                <li class="social-item"><a class="ya-color social-link" title="Yandex"></a></li>
                <li class="social-item"><a class="gl-color social-link" title="Google"></a></li>
              </ul>
              
            </template>
          </div>
        </div>
      </modal>
    </client-only>

    <transition name="slide">
      <div class="search-mob" v-if="searchBlockMob" v-on-clickaway="toggleSearch">
        <div>
          <input 
            v-model="searchText"
            type="text" 
            class="search-text-mob" 
            placeholder="Найти мероприятие" 
            :class="{open: searchBlock}"
          >
        </div>
        <i v-if="searchText.length > 0" class="icon search-close" @click="searchText = ''"></i>
        <i v-else class="icon search" @click="toggleSearch"></i>
      </div>
    </transition>

    <div class="header-section">
      <template v-if="!hideRightSection">
        <div class="menu-toggle" @click="toggleSideNav">
          <i class="menu-bar"></i>
          <i class="menu-bar"></i>
          <i class="menu-bar"></i>
        </div>

        <div>
          <div class="search-button">
            <div class="input-wrap">
              <input 
                type="text" 
                class="search-text" 
                placeholder="Найти мероприятие" 
                :class="{open: searchBlock}"
              >
            </div>
            <i class="icon search" @click="toggleSearch"></i>
          </div>
        </div>
      </template>
    </div>

    <div class="header-section justify-center">
      <div class="logo">
        <img src="@/static/images/logo.png">
      </div>
    </div>

    <div class="header-section justify-end">
      <div class="favorites">
        <span class="favorites-text">Избранное</span>
        <i class="icon heart-black"></i>
        <span class="favorites-count">12</span>
      </div>

      <a href="#!" class="auth-btn" @click="$modal.show('auth-modal')">
        <span class="auth-btn-inner">
          <span class="auth-btn-title">Войти</span>
          <span class="auth-btn-subtitle">в личный кабинет</span>
        </span>
        <i class="icon log-in d-none d-xs-inline-block"></i>
      </a>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { directive as onClickaway } from 'vue-clickaway';
import Checkbox from '@/components/Checkbox.vue';

export default {
  components: {
    Checkbox,
  },
  name: 'Header',

  directives: {
    onClickaway: onClickaway,
  },

  props: {
    hideRightSection: {
      type: Boolean,
      default: false
    },
  },

  data() {
    return {
      activeAuth: 'register',
      searchBlock: false,
      searchBlockMob: false,
      searchText: ''
    }
  },

  mounted () {
    this.searchBlock = window.innerWidth > 1200
  },

  methods: {
    ...mapMutations({
      toggleSideNav: 'toggleSideNav'
    }),

    toggleSearch () {
      if (window.innerWidth > 576 && window.innerWidth < 1200) {
        this.searchBlock = !this.searchBlock
      } else {
        this.searchBlockMob = !this.searchBlockMob
      }
    }
  },
}
</script>

<style lang="sass" scoped>
@import "~/assets/css/partials/_variables.sass";
@import "~/assets/css/partials/_mixins.sass";

.link
  font-size: 10px
  +tablet
    font-size: 12px
  +desktop
    font-size: 14px

.header
  position: absolute
  width: 100%
  display: flex
  align-items: center
  justify-content: space-between
  padding: 10px 20px
  +desktop
    padding: 15px 30px

  &-section
    display: flex
    align-items: center
    flex: 1 1

.search-button
  display: inline-block
  line-height: 23px
  margin-bottom: 4px

.input-wrap
  display: inline-block

.search-text
  width: 100%
  max-width: 120px
  display: none
  font-size: 12px
  margin-right: 12px
  border: none
  background: none
  border-bottom: 1px solid transparent
  +placeholder-color($black)
  color: $black
  transition: all 0.2s ease
  &:focus
    border-bottom: 1px solid #606E77
    outline: none

  &.open
    display: none
    +media-min(768px)
      display: inline-block

  +desktop
    display: inline-block
    max-width: 160px

.menu-toggle
  display: inline-block
  width: 30px
  padding: 5px
  margin-right: 15px
  cursor: pointer
  +desktop
    margin-right: 35px

.menu-bar
  display: block
  height: 1px
  background: $grey-light
  &:nth-child(2)
    +desktop
      width: 15px
      
.menu-bar + .menu-bar
  margin-top: 4px

.favorites
  display: inline-block
  line-height: 12px
  margin-right: 15px
  +tablet
    margin-right: 20px
  +desktop
    display: none

  &-text
    font-size: 11px
    display: none
    +tablet
      display: inline
    +desktop
      display: none

  &-count
    display: inline-block
    height: 12px
    padding: 0 3px
    line-height: 12px
    font-size: 8px
    background: $red
    border-radius: 3px
    color: #fff

  .icon
    margin: 0 7px

.search-mob
  position: absolute
  top: 0
  left: 0
  background: #fff
  width: 100%
  padding: 14px 15px
  .icon
    position: absolute
    top: 50%
    right: 15px
    transform: translate(0, -50%)

.search-text-mob
  width: 100%
  font-size: 12px
  margin-right: 12px
  border: none
  background: none
  border-bottom: 1px solid $black
  +placeholder-color($black)
  color: $black
  padding: 10px 20px 10px 0
  &:focus
    outline: none

.auth-btn
  display: flex
  align-items: center
  text-decoration: none
  font-size: 12px
  &:hover .auth-btn-title, 
  &:focus .auth-btn-title
    color: $red

  &-title
    display: block
    color: $black
    font-weight: 500
    transition: all 0.2s ease

  &-subtitle
    display: block
    color: $grey-light

  &-inner
    margin-right: 8px
    text-align: right

</style>