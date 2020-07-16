<template>
  <div class="rt-menu" :class="{'is-opened': isOpenSideNav}">
    <div class="rt-menu__overlay" @click="toggleSideNav"></div>
    <div class="rt-menu__body">
        <div class="rt-menu__search">
            <form action="/ru/services/search/" method="get">
                <button class="search__item--submit"></button>
                <input type="text" name="query" placeholder="Например: «Таможенные услуги»" minlength="5" required="" class="rt-menu__search-input">
                <div class="rt-menu__search-desc">Например: «Таможенные услуги»</div>
            </form>

        </div>
        <div class="rt-menu__content">
            <nav class="rt-menu__list">
                <li class="rt-menu__list-item">
                    <a class="rt-menu__list-link" href="/">
                        Главная
                    </a>
                </li>

                <li class="rt-menu__list-item">
                    <a class="rt-menu__list-link" href="/ru/journal/">
                        Журнал
                    </a>
                </li>
                <li class="rt-menu__list-item">
                    <a class="rt-menu__list-link" href="/ru/servis-polucheniya-zakazov/">
                        Партнерам
                    </a>
                </li>
                <li class="rt-menu__list-item">
                    <a class="rt-menu__list-link" href="/ru/support/">
                        Помощь
                    </a>
                </li>
            </nav>
        </div>
        <div class="rt-menu__close" @click="toggleSideNav">
          <a class="rt-menu__close-link"></a>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: 'SideMenu',

  computed: {
    ...mapState({
      isOpenSideNav: state => state.isOpenSideNav
    })
  },

  methods: {
    ...mapMutations({
      toggleSideNav: 'toggleSideNav'
    })
  },
}
</script>

<style lang="scss" scoped>
.rt-menu {
	position: fixed;
	width: 100%;
	height: 100%;
	transition: 0.3s ease all;
	left: -300px;
	z-index: -1;
	top: 0
}

.rt-menu__overlay {
	position: fixed;
	z-index: -1;
	background: rgba(255, 255, 255, 0);
	right: 0;
	opacity: 0;
	width: 0.1%;
	height: 100%;
	cursor: url("../static/images/close-cur.png") 23 23, pointer;
	transition: 0.3s ease all
}

.rt-menu__body {
	position: relative;
	z-index: 3;
	max-width: 270px;
	height: 100%;
	background: #222F38;
	color: rgba(255, 255, 255, 0.5)
}

.rt-menu__search {
	padding: 25px 15px 15px
}

.rt-menu__search-input {
	width: 100%;
	background: #3E4D58;
	border-radius: 4px;
	padding: 12px;
	color: white;
  border: none;
  &:focus {
    border: none;
    outline: none;
  }
}

.rt-menu__search-desc {
	font-size: 11px;
	line-height: 112.38%;
	color: rgba(255, 255, 255, 0.45);
	margin: 5px
}

.rt-menu__list-item {
	list-style: none;
	position: relative
}

.rt-menu__list-item>ul {
	padding-left: 15px;
	list-style: none
}

.rt-menu__list-link {
	position: relative;
	display: flex;
	width: 100%;
	height: 100%;
	padding: 10px 15px;
	color: rgba(255, 255, 255, 0.5);
	transition: 0.3s ease all;
	font-weight: normal;
	font-size: 14px;
	line-height: 112.38%;
	cursor: pointer
}

.rt-menu__list-link:hover {
	color: #fff
}

.rt-menu__close {
	position: absolute;
	left: 282px;
	top: 25px
}

@media (max-width: 767.98px) {
	.rt-menu__close {
		left: 270px
	}
}

.rt-menu__close-link {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	height: 19px;
	width: 19px;
	line-height: 1;
	transition: 0.3s ease all;
	cursor: pointer;
	z-index: 3
}

.rt-menu__close-link:before,
.rt-menu__close-link:after {
	height: 1px;
	width: 100%;
	transition: 0.3s ease all;
	top: 50%;
	content: '';
	position: absolute;
	left: 0;
	background: #606E77
}

.rt-menu__close-link:before {
	transform: rotate(45deg)
}

.rt-menu__close-link:after {
	transform: rotate(-45deg)
}

.rt-menu__close-link:hover:before,
.rt-menu__close-link:hover:after,
.rt-menu__close-link:focus:before,
.rt-menu__close-link:focus:after {
	background: #EB4745
}

.rt-menu__close-link:active:before,
.rt-menu__close-link:active:after {
	background: #606E77
}

.rt-menu.is-opened {
	left: 0;
	z-index: 3
}

.rt-menu.is-opened .rt-menu__overlay {
	background: rgba(255, 255, 255, 0.8);
	z-index: 2;
	opacity: 1;
	width: 100%;
	height: 100%
}

.search__item--submit {
  display: none;
}
</style>