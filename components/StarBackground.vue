<template>
  <div>
    <div v-for="n in 1" :key="n" class="circle-container">
      <div class="circle" />
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.circle-container {
  width: 100%;
  $particleNum: 200;
  $particleColor: hsl(180, 100%, 80%);

  transform: translateY(-10vh);
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  .circle {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    mix-blend-mode: screen;
    background-image: radial-gradient(
      hsl(180, 100%, 80%),
      hsl(180, 100%, 80%) 10%,
      hsla(180, 100%, 80%, 0) 56%
    );

    animation: fadein-frames 200ms infinite, scale-frames 2s infinite;

    @keyframes fade-frames {
      0% {
        opacity: 1;
      }

      50% {
        opacity: 0.7;
      }

      100% {
        opacity: 1;
      }
    }

    @keyframes scale-frames {
      0% {
        transform: scale3d(0.4, 0.4, 1);
      }

      50% {
        transform: scale3d(2.2, 2.2, 1);
      }

      100% {
        transform: scale3d(0.4, 0.4, 1);
      }
    }
  }

  $particleBaseSize: 20;
  $index: 3;
  @for $i from 1 through $particleNum {
    &:nth-child(#{$i}) {
      position: relative;
      z-index: random($index);

      $circleSize: random($particleBaseSize);
      width: $circleSize + px;
      height: $circleSize + px;

      $startPositionY: random(10) + 100;
      $startPositionX: 100 - random(100);
      $framesName: "move-frames-" + $i;
      $moveDuration: 28000 + random(9000) + ms;

      animation-name: #{$framesName};
      animation-duration: $moveDuration;
      animation-delay: random(37000) + ms;

      @keyframes #{$framesName} {
        from {
          transform: translate(100px, 0%);
        }

        to {
          transform: translate(100px, 4000%);
        }
      }

      //   @keyframes #{$framesName} {
      //     from {
      //       transform: translate(#{random(100) + vw}, #{$startPositionY + vh}, 0);
      //     }

      //     to {
      //       transform: translate(
      //         #{random(100) + vw},
      //         #{- $startPositionY - random(30) + vh},
      //         0
      //       );
      //     }
      //   }

      .circle {
        animation-delay: random(4000) + ms;
      }
    }
  }
}
</style>
