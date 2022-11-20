<template>
  <div class="header-block">
    <div class="header-icon">
      <div class="header-icon__text">
        EasyD&D
      </div>
      <div class="header-icon__img">
        <IconManager icon="SwordIcon" />
      </div>
    </div>
    <nav class="header-nav">
      <div class="header-nav__item" id="Classes">
        <IconManager class="header-nav__item-icon"/>
        <div class="header-nav__item-text">Classes</div>
        <HeaderDropdown class="header-nav__item-dropdown" id="ClassesDropdown">
          <ContentManager content="ContentClasses" />
        </HeaderDropdown>
      </div>
      <div class="header-nav__item" id="Races">
        <IconManager class="header-nav__item-icon" />
        <div class="header-nav__item-text">Races</div>
        <HeaderDropdown class="header-nav__item-dropdown" id="RacesDropdown">
          <ContentManager content="ContentClasses" />
        </HeaderDropdown>
      </div>
      <div class="header-nav__item" id="Spells">
        <IconManager class="header-nav__item-icon" />
        <div class="header-nav__item-text">Spells</div>
        <HeaderDropdown class="header-nav__item-dropdown" id="SpellsDropdown">
          <ContentManager content="ContentClasses" />
        </HeaderDropdown>
      </div>
      <div class="header-nav__item" id="Beasts">
        <IconManager class="header-nav__item-icon" />
        <div class="header-nav__item-text">Beasts</div>
        <HeaderDropdown class="header-nav__item-dropdown" id="BeastsDropdown">
          <ContentManager content="ContentClasses" />
        </HeaderDropdown>
      </div>
      <div class="header-nav__item" id="Artifacts">
        <IconManager class="header-nav__item-icon" />
        <div class="header-nav__item-text">Artifacts</div>
        <HeaderDropdown class="header-nav__item-dropdown" id="ArtifactsDropdown">
          <ContentManager content="ContentClasses" />
        </HeaderDropdown>
      </div>
      <div class="header-nav__item" id="Guides">
        <IconManager class="header-nav__item-icon" />
        <div class="header-nav__item-text">Guides</div>
        <HeaderDropdown class="header-nav__item-dropdown" id="GuidesDropdown">
          <ContentManager content="ContentClasses" />
        </HeaderDropdown>
      </div>
    </nav>
    <div class="header-singIn">
      <IconManager icon="ArrowIcon" class="header-singIn__icon" />
      <div class="header-singIn__text">SignIn</div>
    </div>
  </div>
</template>

<script>
import HeaderDropdown from "@/components/pop-ups/HeaderDropdown";
import IconManager from "@/UI/icons/IconManager";
import ContentManager from "@/components/pop-ups/pop-ups-content/ContentManager";

export default {
  name: "TheHeader",
  components: {
    ContentManager,
    IconManager,
    HeaderDropdown,
  },
  created() {
    const listOfIds = ['', '', '', '', '', '']

    for (const id in listOfIds) {
      document.getElementById('#' + id).addEventListener('mouseenter', () => {})
      document.getElementById('#' + id).addEventListener('mouseleave', () => {})
    }
  },
  data() {
    return {
      currentActive: 'header-disabled'
    }
  },
}
</script>

<style lang="scss">
@import "./src/assets/styles/components/TheHeader";
</style>