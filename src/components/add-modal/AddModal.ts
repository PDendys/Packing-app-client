import { Component, Vue } from "vue-property-decorator";
import { BButton, BModal, VBModal } from "bootstrap-vue";

@Component({
  components: {
    "b-button": BButton,
    "b-modal": BModal
  },
  directives: { "b-modal": VBModal }
})
export default class AddModal extends Vue {
}
