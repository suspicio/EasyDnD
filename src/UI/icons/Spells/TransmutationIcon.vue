<template>
  <div class="transmutation">
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
         width="567.000000pt" height="566.000000pt" viewBox="0 0 567.000000 566.000000"
         preserveAspectRatio="xMidYMid meet">

      <g transform="translate(0.000000,566.000000) scale(0.100000,-0.100000)"
         fill="#000000" stroke="none">
        <path d="M1047 5440 l-639 -5 -187 -255 -188 -255 462 -3 462 -2 6 -617 c4
-339 7 -966 7 -1394 l0 -779 -166 -255 c-242 -374 -299 -505 -292 -675 2 -64
9 -97 27 -133 16 -34 160 -191 483 -530 253 -265 465 -484 470 -486 8 -2 9
755 3 2433 l-7 2436 819 0 820 0 6 -937 c4 -516 7 -1455 7 -2086 l0 -1148
-179 -214 c-99 -117 -177 -216 -174 -219 9 -9 1243 -7 1243 2 0 4 -79 104
-175 222 l-174 215 -3 1848 c-2 1016 -3 1952 -3 2080 l0 232 475 0 c509 0 520
-1 520 -49 0 -30 -22 -59 -145 -186 -116 -121 -153 -172 -202 -277 -44 -96
-63 -184 -63 -304 0 -311 192 -580 491 -685 100 -36 281 -44 394 -19 215 48
426 225 504 423 59 149 -16 314 -163 357 -63 19 -90 19 -155 -1 -63 -18 -132
-83 -173 -161 -20 -38 -40 -59 -75 -80 -152 -89 -332 43 -293 214 12 56 28 77
190 248 89 94 160 204 190 295 89 264 -33 557 -283 680 -161 79 -41 74 -1712
75 -819 0 -1777 -2 -2128 -5z"/>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "TransmutationIcon"
}
</script>

<style lang="scss">
@import "@/assets/styles/constants.scss";

.transmutation {
  width: 55px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: $col6;

  & svg {
    max-height: 35px;
    max-width: 35px;
  }
}
</style>