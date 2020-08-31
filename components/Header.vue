<template>
  <div class="header">
    
    <client-only>
      <modal name="auth-modal" class="auth" :height="'auto'" scrollable>
        <div class="auth-modal">
          <div class="auth-header">
            <a class="auth-nav" :class="{active: activeAuth === 'login'}" @click="activeAuth = 'login'">ВХОД</a>
            <a class="auth-nav" :class="{active: activeAuth === 'register'}" @click="activeAuth = 'register'">ЗАРЕГИСТРИРОВАТЬСЯ</a>
          </div>
          <div class="auth-body">
            <template v-if="activeAuth === 'login'">
              <div class="mb-4">
                <input 
                  v-model="login.email" 
                  type="text" 
                  class="auth-input"
                  :class="{'input-error': $v.login.$dirty && $v.login.email.$invalid}" 
                  placeholder="Электронная почта"
                >
                <span class="error-message" v-if="$v.login.$dirty && $v.login.email.$invalid">
                  Необходимо заполнить «Электронная почта».
                </span>
              </div>

              <div class="mb-4">
                <input 
                  v-model="login.password" 
                  type="password" 
                  class="auth-input"
                  :class="{'input-error': $v.login.$dirty && $v.login.password.$invalid}" 
                  placeholder="Пароль"
                >
                <span class="error-message" v-if="$v.login.$dirty && $v.login.password.$invalid">
                  Необходимо заполнить «Пароль».
                </span>
              </div>

              <div class="error-message" v-if="loginError">
                {{ loginError }}
              </div>
              

              <div class="text-right mb-3">
                <a class="link link-black link-undeline" @click="onOpenRecoveryModal">Забыли пароль?</a>
              </div>

              <div>
                <a class="btn btn-large w-100 text-uppercase" @click="onLogin">Войти</a>
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
                  <a class="link color-red" @click="activeAuth = 'register'">Зарегистрироваться</a>
                </div>
              </div>
            </template>
            
            <template v-if="activeAuth === 'register'">
              
              <div class="mb-4">
                <RadioButton v-model="registration.role" name="client" :radioName="'role'" class="d-inline-block mr-5">Клиент</RadioButton>
                <RadioButton v-model="registration.role" name="partner" :radioName="'role'" class="d-inline-block">Партнер</RadioButton>
              </div>

              <div class="mb-4">
                <input 
                  v-model="registration.email" 
                  type="text" 
                  class="auth-input" 
                  :class="{'input-error': $v.registration.$dirty && $v.registration.email.$invalid}" 
                  placeholder="Электронная почта"
                >
                <span v-if="$v.registration.$dirty && $v.registration.email.$invalid" class="error-message">
                  Необходимо заполнить «Электронная почта».
                </span>
              </div>

              <div class="mb-4">
                <input 
                  v-model="registration.phone" 
                  type="text" 
                  class="auth-input"
                  :class="{'input-error': $v.registration.$dirty && $v.registration.phone.$invalid}" 
                  placeholder="Телефон"
                >
                <span class="error-message" v-if="$v.registration.$dirty && $v.registration.phone.$invalid">
                  Укажите номер телефона, по которому сотрудники сервиса смогут при необходимости связаться с вами. 
                  Мы никому не передадим ваш номер и не будем присылать спам.
                </span>
              </div>

              <div class="mb-4">
                <input 
                  v-model="registration.password" 
                  type="password" 
                  class="auth-input"
                  :class="{'input-error': $v.registration.$dirty && $v.registration.password.$invalid}" 
                  placeholder="Пароль"
                >
                <span class="error-message" v-if="$v.registration.$dirty && $v.registration.password.$invalid">
                  Необходимо заполнить «Пароль».
                </span>
              </div>

              <div class="mb-4">
                <input 
                  v-model="registration.passwordRepeat" 
                  type="password" 
                  class="auth-input"
                  :class="{'input-error': $v.registration.$dirty && $v.registration.passwordRepeat.$invalid}"
                  placeholder="Повторите пароль"
                >
                <span class="error-message" v-if="$v.registration.$dirty && $v.registration.passwordRepeat.$invalid">
                  Необходимо что бы пароли совпадали.
                </span>
              </div>

              <div class="input-error mb-4" v-if="registrationError">
                {{ registrationError }}
              </div>

              <Checkbox v-model="politic" :vertical-align="'top'" class="mb-4">
                Регистрируясь в Сервисе Вы даете свое согласие на обработку персональных данных согласно 
                <a class="color-blue">Положению о конфиденциальности персональных данных</a>
              </Checkbox>

              <div>
                <a 
                  class="btn btn-large w-100 text-uppercase"
                  :class="{disabled: !politic}"
                  @click="onRegistration"
                >Зарегистрироваться</a>
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

    <client-only>
      <modal name="register-success" class="auth" :height="'auto'" scrollable>
        <div class="auth-modal">

          <div class="auth-body">

            <h2>Для завершения регистрации пройдите по ссылке отправленной на e-mail.</h2>            

          </div>
        </div>
      </modal>
    </client-only>

    <client-only>
      <modal name="recover-password" class="auth" :height="'auto'" scrollable>
        <div class="auth-modal">

          <div class="auth-body recovery-body">

            <h2 class="text-left">Восcтановить пароль</h2>

            <div class="divider"></div>

            <div class="form-group d-flex">
              <label class="recovery-label">E-mail: *</label>
              <input v-model="recoveryEmail" type="text" class="auth-input" placeholder="Введите E-mail для восcтановления пароля">  
            </div>

            <div class="divider"></div>

            <a class="btn" @click="onRecoveryPassword">Отправить</a>

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

        <!-- <div>
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
        </div> -->
      </template>
    </div>

    <div class="header-section justify-center">
      <div class="logo">
        <img src="~/assets/images/logo.png">
      </div>
    </div>

    <div class="header-section justify-end">

      <div class="favorites">
        <span class="favorites-text">Избранное</span>
        <i class="icon heart-black"></i>
        <span class="favorites-count">12</span>
      </div>

      <div v-if="!user" class="auth-btn" @click="$modal.show('auth-modal')">
        <span class="auth-btn-inner">
          <span class="auth-btn-title">Войти</span>
          <span class="auth-btn-subtitle">в личный кабинет</span>
        </span>
        <i class="icon log-in d-none d-xs-inline-block"></i>
      </div>
    
      <div v-if="user" class="user-cabinet-wrap">
        <a  href="#!" class="auth-btn">
          Личный кабинет
          <i class="icon user-cabinet ml-2"></i>
        </a>

        <ul class="login-menu">
          <li class="login-menu__list">
            <a class="login-menu__link " href="/users/requests/"> Заявки</a>
          </li>
          <li class="login-menu__list">
            <a class="login-menu__link " href="/users/orders/"> Заказы</a>
          </li>
          <li class="login-menu__list">
            <a class="login-menu__link " href="/users/services/"> Мои услуги</a>
          </li>
          <li class="login-menu__list">
            <a class="login-menu__link " href="/users/settings/"> Настройки</a>
          </li>
          <li class="login-menu__list">
            <a class="login-menu__link " href="/users/employees/"> Сотрудники</a>
          </li>
          <li class="login-menu__list">
            <a class="login-menu__link " href="/users/company/"> Компания</a>
          </li>
          <li class="login-menu__list">
            <a class="login-menu__link " href="/users/personal-account"> Транзакции</a>
          </li>
          <li class="login-menu__list">
            <a class="login-menu__link " href="#!" @click="onLogOut"> Выход</a>
          </li>
        </ul>
      </div>
    </div>
    
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex"
const { required, sameAs } = require('vuelidate/lib/validators')
import { validationMixin } from 'vuelidate'
import { directive as onClickaway } from 'vue-clickaway'
import Checkbox from '@/components/Checkbox.vue'
import RadioButton from '@/components/RadioButton.vue'

const registrationFields = {
  email: '',
  phone: '',
  password: '',
  passwordRepeat: '',
  role: 'client'
}

export default {

  name: 'Header',

  components: {
    RadioButton,
    Checkbox
  },

  mixins: [validationMixin],

  directives: {
    onClickaway: onClickaway,
  },

  props: {
    hideRightSection: {
      type: Boolean,
      default: false
    },
  },

  validations: {
    registration: {
      email: {
        required
      },
      phone: {
        required
      },
      password: {
        required
      },
      passwordRepeat: {
        sameAsPassword: sameAs('password')
      }
    },

    login: {
      email: {
        required
      },
      password: {
        required
      }
    }
  },

  data() {
    return {
      activeAuth: 'register',
      searchBlock: false,
      searchBlockMob: false,
      searchText: '',
      politic: false,
      registration: JSON.parse(JSON.stringify(registrationFields)),
      registrationError: null,
      loginError: null,
      login: {
        email: '',
        password: ''
      },
      recoveryEmail: ''
    }
  },

  computed: {
    ...mapState({
      user: state => state.auth.user
    })
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
    },

    onOpenRecoveryModal () {
      this.$modal.show('recover-password')
      this.$modal.hide('auth-modal')
    },

    async onRecoveryPassword () {
      try {
        await this.$store.dispatch('auth/recoveryPassword', this.recoveryEmail)
      } catch (error) {
        
      }
    },

    async onRegistration () {

      this.registrationError = null
      this.$v.registration.$touch()

      if (!this.$v.registration.$invalid) {
        try {
          await this.$store.dispatch('auth/registration', this.registration)
          this.registration = JSON.parse(JSON.stringify(registrationFields))
          this.$v.registration.$reset()
          this.$modal.hide('auth-modal')
          this.$modal.show('register-success')
        } catch (error) {
          console.log('error', error)
          this.registrationError = error.message
        }
      }

      
    },

    async onLogin () {
      this.$v.login.$touch()
      this.loginError = null

      if (!this.$v.login.$invalid) {
        try {
          await this.$store.dispatch('auth/login', this.login)

          this.login = {
            email: '',
            password: ''
          }
          this.$modal.hide('auth-modal')
          this.$v.login.$reset()
        } catch (error) {
          console.log('error', error)
          this.loginError = error.message
        }
      }

      
    },

    onLogOut () {
      this.$store.commit('auth/clearAuthInfo')
    }
  },
}
</script>

<style lang="sass" scoped>
@import "~/assets/css/partials/_variables.sass";
@import "~/assets/css/partials/_mixins.sass";

.link
  cursor: pointer
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


.user-cabinet-wrap
  position: relative
  &:hover .login-menu
    visibility: visible
    opacity: 1

.login-menu
  position: absolute
  visibility: hidden
  opacity: 0
  transition: all 0.4s ease
  background: #fff
  box-shadow: 0 16px 32px rgba(75, 86, 92, 0.09)
  border-radius: 4px
  position: absolute
  width: 183px
  top: 30px
  right: 0
  padding: 0 10px
  &__list
    border-bottom: 1px solid rgba(101, 113, 134, 0.2)
  &__link
    display: block
    width: 100%
    padding: 13px 10px
    font-size: 14px
    line-height: 16px
    color: #222f38
    text-decoration: none
    text-align: right
    transition: all 0.2s ease
    &:hover
      color: #eb4745

.recovery-label
  min-width: 95px
  margin-right: 15px
  font-size: 20px
  padding: 14px 0

.recovery-body
  .auth-input
    font-size: 16px
    padding: 0 10px

</style>