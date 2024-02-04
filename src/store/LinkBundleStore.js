import {defineStore} from "pinia";

export const useLinkBundleStore = defineStore('linkBundle', {
  state: () => ({
    linkBundles: [],
    linkBundle: {
      linkBundleId: 0,
      description: "",
      isDefault: true
    }
  }),
  getters: {
    getSelectedLinkBundle(state) {
      return state.linkBundle;
    }
  },
  actions: {
    setLinkBundles(linkBundles) {
      this.linkBundles = linkBundles;
      const defaultLinkBundle = linkBundles.filter(n => n.isDefault);
      if(defaultLinkBundle.length !== 0) {
        this.selectLinkBundle(defaultLinkBundle[0]);
      }
    },
    selectLinkBundle(linkBundle) {
      this.linkBundle.linkBundleId = linkBundle.linkBundleId;
      this.linkBundle.description = linkBundle.description;
      this.linkBundle.isDefault = linkBundle.isDefault;
    }
  }
});
