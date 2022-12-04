<template>
  <footer>
    <img alt="footer effect" src="@/assets/icons/footer.png" />
    <div class="footer">
      <div class="footer-left">
        <div class="footer-header">
          Contact Us
        </div>
        <div class="footer-text">
          easydnd@gmail.com
        </div>
      </div>
      <div class="footer-middle">
        <div class="footer-header">
          About Team
        </div>
        <div class="footer-text">
          We are a group of D&D enthusiasts from the GW University <br/>who wants your game flow to be as easy as possible
        </div>
      </div>
      <div class="footer-right">
        <div class="footer-header">
          Stay Connected
        </div>
        <div class="footer-icons">
          <IconManager icon="LinkIcon"/>
          <IconManager icon="InstagramIcon"/>
          <IconManager icon="FacebookIcon"/>
          <IconManager icon="TwitterIcon"/>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import IconManager from "@/UI/icons/IconManager";

export default {
  name: "TheFooter",
  components: {IconManager}
}
</script>

<style lang="scss">
@import "./src/assets/styles/components/TheFooter";
</style>