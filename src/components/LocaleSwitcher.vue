<template>
  <div data-app class="locale-switcher">
      <v-select
        v-model="localeSelected"
        :items="localeList"
        item-text="name"
        item-value="code"
        label="Locale"
        persistent-hint
        return-object
        single-line
        @change="setLocale"
      ></v-select>
  </div>
</template>

<script>
import Vue from "vue";
// Restore locale from cookie, if it was set
import VueCookie from "vue-cookie";
Vue.use(VueCookie);

const localeStrings = [
 {
   code:   "en",
   name: "English"
 },
 {
  code: "fr",
  name: "Français"
 }
];

Vue.config.lang = VueCookie.get("locale") || "en";
console.log(
  "Locale from cookie = " +
    Vue.config.lang +
    ": language = " +
    localeStrings[Vue.config.lang]
);

export default {
  name: "LocaleSwitcher",
  data: function() {
    return {
      activeLocale: Vue.config.lang,
      localeSelected: localeStrings[0],
      localeList: localeStrings
    };
  },
  methods: {
    setLocale: function() {
      var locale = this.localeSelected;
      Vue.config.lang = locale.code;
      this.activeLocale = locale.code;
      this.$cookie.set("locale", locale.code);
      this.$i18n.locale = Vue.config.lang;
      console.log(
        "New locale = " +
          Vue.config.lang +
          ": language = " +
          locale.name
      );
    },
    getLanguageString: function(locale) {
      return this.showFull ? localeStrings[locale] : locale;
    }
  }
};
</script>
