import { Component, Vue } from "vue-property-decorator";
import { BButton, BModal, VBModal } from "bootstrap-vue";

import { createCategory } from "@/api/packing-items.api";

@Component({
  components: {
    "b-button": BButton,
    "b-modal": BModal
  },
  directives: { "b-modal": VBModal }
})
export default class AddCategoryModal extends Vue {
  private readonly modalId = "add-category-modal";

  private categoryName = "";

  private async handleFormSubmit() {
    const args = { name: this.categoryName };
    const res = await createCategory(args);

    if (res.status === 201) {
      this.hideModal();
      this.$emit("refetchList");
      this.categoryName = "";
    }
  }

  private hideModal() {
    this.$nextTick(() => {
      this.$refs["modal"].hide();
    });
  }
}
