<template>
  <div v-if="servise" class="servise-card">
    <div class="servise-card__image">
      <img v-if="servise.image" :src="require(`@/static/content/${servise.image}`)">
      <img v-else src="@/static/content/servise-placeholder.jpg">
    </div>
    <div class="servise-card__inner">

      <span class="label label--grey mb-2">
        <template v-if="servise.companyType">{{ servise.companyType }}</template>
        <template v-else>OOO</template>
      </span>
      <h3 class="servise-card__title mb-2">{{ servise.title }}</h3>
      <h3 v-if="servise.workDuration" class="servise-card__work-time mb-2">{{ servise.workDuration }}</h3>
      <p v-if="servise.text" class="servise-card__text mb-2">
        {{ servise.text }}
      </p>

      <div v-if="servise.specialization" class="servise-card__special mt-3">
        Специализация: 
        <span class="label label--green">{{ servise.specialization }}</span>
      </div>

      <div class="servise-card__users mt-3">
        <div class="user-card mb-3">
          <div v-if="servise.director.avatar" class="director-avatar mr-2">
            <img :src="require(`@/static/content/${servise.director.avatar}`)">
          </div>
          <div class="user-card__title">
            <span class="font-500">Директор: </span>
            {{ servise.director.name }}
          </div>
        </div>

        <div v-if="servise.staff.length" class="user-card user-card--list">
          <div v-for="(user, index) in servise.staff" :key="index">
            <div class="avatar" v-if="index < 3">
              <img :src="require(`@/static/content/${user.image}`)">
            </div>
          </div>
          
          <div class="user-card__text ml-2 mb-1">и еще {{ servise.staff.length - 3 }} сотрудников</div>
        </div>
      </div>

    </div>
    <div class="servise-card__aside">
      <a class="favorite">
        <span class="favorite__text">Добавить в избранное</span>
        <i class="icon heart-black"></i>
      </a>

      <div v-if="servise.reviews.length" class="rewievs mt-5">
        <span class="rewievs__title mb-3">Отзывы клиентов</span>

        <ul class="rewievs__list">
          <li class="rewievs__list-item" v-for="(review, index) in servise.reviews" :key="index">
            <img :src="require(`@/static/content/${review.image}`)">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ServiseCard',

    props: {
      servise: {
        type: Object,
        default: () => {}
      },
    },
  }
</script>

<style lang="sass" scoped>
.servise-card
  display: flex
  background: #FFFFFF
  padding: 30px
  border: 1px solid rgba(165, 165, 165, 0.5)
  border-radius: 4px
  margin-bottom: 20px
  &__image
    border-radius: 12px
    overflow: hidden
    margin-right: 30px
    align-self: end
    min-width: 130px
    max-width: 130px
    text-align: center

  &__inner
    flex: 1 1

  &__title
    font-weight: 500
    font-size: 26px

  &__work-time
    font-weight: 500
    font-size: 16px

  &__text
    font-size: 14px

  &__special
    font-weight: 500
    font-size: 16px

  &__aside
    padding-left: 30px
    max-width: 300px

  

.user-card
  display: flex
  align-items: center
  color: #606E77

  &--list
    padding-left: 15px
    .avatar
      margin-left: -15px

  &__title
    color: #474E53
    font-size: 16px

  &__text
    font-size: 14px

.avatar
  img
    border-radius: 50%

.director-avatar
  width: 75px
  img
    border-radius: 50%

.favorite
  display: flex
  align-items: center
  justify-content: flex-end
  &__text
    white-space: nowrap
    margin-right: 5px

.rewievs
  &__title
    display: block
    font-weight: 500
    font-size: 17px
  &__list
    display: flex
    flex-wrap: wrap
    margin: 0 -5px
  &__list-item
    flex: 1 1 50%
    max-width: 50%
    padding: 0 5px 5px
    margin-bottom: 5px
    

</style>