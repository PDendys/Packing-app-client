import { Component, Vue } from "vue-property-decorator";
import { BButton, BModal, VBModal } from "bootstrap-vue";

import { createItem, getAllCategories } from "@/api/packing-items.api";

interface CategoryI {
  categoryName: string;
  id: string;
}

@Component({
  components: {
    "b-button": BButton,
    "b-modal": BModal
  },
  directives: { "b-modal": VBModal }
})
export default class AddItemModal extends Vue {
  private categories: CategoryI[] = [];

  private categoryId: number | null = null;
  private itemName = "";

  mounted() {
    this.getAllCategories();
  }

  private async getAllCategories(): Promise<void> {
    const res: any = await getAllCategories();
    const { data } = res;
    this.categories = data;
  }

  private async addCategory() {
    const args = {
      categoryId: this.categoryId,
      name: this.itemName
    };

    const res = await createItem(args);

    if (res.status === 201) {
      this.hideModal();
      this.$emit("refetchList");
      this.categoryId = null;
      this.itemName = "";
    }
  }

  private hideModal() {
    this.$nextTick(() => {
      this.$refs["modal"].hide();
    });
  }
}
