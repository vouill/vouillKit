<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated-short fadeIn"
    leave-active-class="animated-short fadeOut"
  >
    <div class="vouill--modal-bg" v-show="show" @click="detectCloseEvent($event)">
      <transition
        name="custom-classes-transition"
        enter-active-class="animated-short fadeIn slideInUp"
        leave-active-class="animated-short fadeOut slideOutUp"
      >
        <div class="vouill--modal" v-show="show">
          <div class="vouill--modal--header">
            <slot name="header">
              <h1>Etiam in risus in tortor</h1>
            </slot>
          </div>
          <div class="vouill--modal--content">
            <slot name="content">
              <h2>Lorem ipsum</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque faucibus lectus,
                quis
                vehicula neque. Mauris interdum id elit vitae fermentum. Nullam ipsum quam, vulputate at vehicula quis,
                hendrerit in dolor. Nulla porttitor lacus turpis, eu placerat quam rutrum non. Nam id tempor enim. Etiam
                ac
                libero ullamcorper justo feugiat bibendum. Integer placerat rutrum arcu vel ullamcorper.</p>
            </slot>
          </div>
          <a class="vouill--modal--action-close" @click="closeModal()">X</a>
        </div>
      </transition>
    </div>
  </transition>

</template>

<style lang="scss">

  .vouill--modal {
    position: relative;
    background-color: white;
    margin: auto;
    margin-top: 10%;
    width: 600px;
    &-bg {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.2);
    }
    &--header {
      text-align: center;
      width: 100%;
      background-color: #F7F7F7;
      padding: 0.5em 0em;
      h1 {
        margin: 0;
      }
    }
    &--content {
      padding: 2em;
      padding-top: 1em;
      h2 {
        margin: 0;
      }
    }
    &--action-close {
      position: absolute;
      top: 0.5em;
      right: 0.5em;
      cursor: pointer;
    }
  }

</style>

<script>
  export default{
    name: 'modal',
    data () {
      return {
        show: false
      }
    },
    props: ['modalId'],
    created: function () {
      this._sub = this.$geb.getFilteredBus({id: this.modalId}).subscribe(obj => {
        switch (obj.action) {
          case 'open':
            this.openModal()
            break
          case 'close':
            this.closeModal()
            break
          default :
            this.toggleModal()
            break
        }
        return
      })
    },
    methods: {
      detectCloseEvent: function (e) {
        if (e.target.attributes === this.$el.attributes) {
          this.closeModal()
        }
      },
      closeModal: function () {
        this.show = false
        // document.body.classList.remove('modal-open')
      },
      openModal: function () {
        this.show = true
        // document.body.classList.add('modal-open')
      },
      toggleModal: function () {
        if (this.show) {
          this.closeModal()
          return
        }
        this.openModal()
      }
    }
  }
</script>
