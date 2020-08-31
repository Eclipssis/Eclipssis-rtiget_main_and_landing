<template>
  <div>
    Confirm email
  </div>
</template>

<script>
  export default {
    name: 'confirmEmail',
    //  http://localhost:3000/confirm-email/?token=j-k70_vdNPPNzqngNUTxqZlCm8zMwRuP
    beforeRouteEnter (to, from, next) {
      console.log('from', from)
      console.log('to', to.query.token)
      next(vm => {
        console.log('vm.$router', vm.$router)
        vm.$router.push('/')
        vm.$store.dispatch('auth/checkToken', to.query.token).then((isValid) => {
          console.log('isValid', isValid)
          if (isValid) {
            vm.$store.commit('toggleConfirmEmailDialog', true)
          } else {
            vm.$router.push('/')
          }
        })
        
      })
    },
  }
</script>

<style lang="scss" scoped>

</style>