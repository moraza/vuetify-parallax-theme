<template>
  <div class="locale-switcher">
    <!-- {{ initLocale() }} -->
    <b-nav-item-dropdown :dropup="dropup" :text="dropdownLbl" right>
      <b-dropdown-item
        class="locale-link"
        v-for="locale in locales"
        :key="locale.id"
        @click="setLocale(locale)"
        :class="{ 'is-current': locale === activeLocale }"
        href="#">
        {{ getLanguageString(locale) }}
      </b-dropdown-item>
    </b-nav-item-dropdown>
  </div>
</template>

<script>
import Vue from "vue";
// Restore locale from cookie, if it was set
import VueCookie from "vue-cookie";
Vue.use(VueCookie);

const localeStrings = {
  en: "English",
  nl: "Nederlands",
  ru: "Russian",
  ua: "Ukrainian",
  fr: "Français",
  de: "Deutsch"
};

Vue.config.lang = VueCookie.get("locale") || "en";
console.log(
  "Locale from cookie = " +
    Vue.config.lang +
    ": language = " +
    localeStrings[Vue.config.lang]
);

export default {
  name: "LocaleSwitcher",
  props: {
    locales: {
      type: Array,
      default: ["en"]
    },
    showFull: Boolean,
    dropup: Boolean,
    locLabel: {
      type: String,
      default: ""
    }
  },
  data: function() {
    return {
      activeLocale: Vue.config.lang
    };
  },
  computed: {
    dropdownLbl: function() {
      return this.locLabel ? this.locLabel : this.activeLocale;
    }
  },
  methods: {
    setLocale: function(locale) {
      Vue.config.lang = locale;
      this.activeLocale = locale;
      this.$cookie.set("locale", locale);
      this.$i18n.locale = Vue.config.lang;
      console.log(
        "New locale = " +
          Vue.config.lang +
          ": language = " +
          localeStrings[Vue.config.lang]
      );
    },
    getLanguageString: function(locale) {
      return this.showFull ? localeStrings[locale] : locale;
    }
  }
};
</script>
