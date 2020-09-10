<template>
  <div class="servise-card">
    <div class="servise-card__image">
      <img src="@/static/content/servise-image.jpg">
    </div>
    <div class="servise-card__inner">

      <span class="label label--grey mb-2">Коллегия адвокатов</span>
      <h3 class="servise-card__title mb-2">Группа компаний "КРОНОС"</h3>
      <h3 class="servise-card__work-time mb-2">Работает с 2012 года</h3>
      <p class="servise-card__text mb-2">
        Юристы нашей компании оказывают гражданам и юридическим лицам: квалифицированные юридические консультации и 
        юридические услуги почти во всех отраслях...
      </p>

      <div class="servise-card__special">
        Специализация: 
        <span class="label label--green mb-3">Коллегия адвокатов</span>
      </div>

      <div class="servise-card__users">
        <div class="user-card mb-3">
          <div class="avatar mr-2">
            <img src="@/static/content/user-avatar-1.jpg">
          </div>
          <div class="user-card__title">
            <span class="font-500">Директор: </span>
            Михайловский М. В.
          </div>
        </div>

        <div class="user-card user-card--list">
          <div class="avatar">
            <img src="@/static/content/user-avatar-2.jpg">
          </div>
          <div class="avatar">
            <img src="@/static/content/user-avatar-3.jpg">
          </div>
          <div class="avatar">
            <img src="@/static/content/user-avatar-4.jpg">
          </div>

          <div class="user-card__text ml-2 mb-1">и еще 5 сотрудников</div>
        </div>
      </div>

    </div>
    <div class="servise-card__aside">
      <a class="favorite">
        <span class="favorite__text">Добавить в избранное</span>
        <i class="icon heart-black"></i>
      </a>

      <div class="rewievs mt-5">
        <span class="rewievs__title mb-3">Отзывы клиентов</span>

        <ul class="rewievs__list">
          <li class="rewievs__list-item">
            <img src="@/static/content/review-image.png">
          </li>

          <li class="rewievs__list-item">
            <img src="@/static/content/review-image.png">
          </li>

          <li class="rewievs__list-item">
            <img src="@/static/content/review-image.png">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ServiseCard'
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
  &__inner

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

.favorite
  display: flex
  align-items: center
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

</style>