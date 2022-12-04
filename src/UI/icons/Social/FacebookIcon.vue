<template>
  <div class="facebook-icon">
    <svg width="12" height="26" viewBox="0 0 12 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
          d="M3.38574 25.2407V13.754H0.444946V9.61819H3.38574V6.0857C3.38574 3.30983 5.12287 0.760674 9.1256 0.760674C10.7462 0.760674 11.9446 0.92114 11.9446 0.92114L11.8502 4.78326C11.8502 4.78326 10.628 4.77097 9.29436 4.77097C7.85091 4.77097 7.61965 5.458 7.61965 6.59831V9.61819H11.9649L11.7759 13.754H7.61965V25.2407H3.38574Z"
          fill="url(#paint0_linear_32_44)"/>
      <defs>
        <linearGradient id="paint0_linear_32_44" x1="6.20495" y1="0.760674" x2="6.20495" y2="25.2407"
                        gradientUnits="userSpaceOnUse">
          <stop stop-color="#A4978E"/>
          <stop offset="0.484375" stop-color="#C2C2C2"/>
          <stop offset="1" stop-color="#BE9063"/>
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  name: "FacebookIcon"
}
</script>

<style lang="scss">
@import "@/assets/styles/constants.scss";

.facebook-icon {
  width: 36px;
  height: 36px;
  border-radius: 100%;
  background: $col2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
}
</style>
