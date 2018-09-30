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

function extractLocaleItemByString(locale, getNameOnly) {
  var result = 'Not found';
  localeStrings.forEach(function(item) {
    if(item.code === locale) {
      if(getNameOnly)
      result = item.name;
      else
      result = item;
    }
  })
  return result;
}

export default {
  name: "LocaleSwitcher",
  data: function() {
    return {
      activeLocale: Vue.config.lang,
      localeSelected: extractLocaleItemByString(Vue.config.lang, false),
      localeList: localeStrings
    };
  },
  mounted() {
    this.$i18n.locale = Vue.config.lang;
  },
  methods: {
    setLocale: function() {
      var locale = this.localeSelected;
      Vue.config.lang = locale.code;
      this.activeLocale = locale.code;
      this.$cookie.set("locale", locale.code);
      this.$i18n.locale = Vue.config.lang;
    }
  }
};
</script>
