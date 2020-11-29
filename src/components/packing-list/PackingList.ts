import { Component, Vue } from "vue-property-decorator";

import { BButton, VBModal, BSpinner } from "bootstrap-vue";

import EventBus from "@/event-bus";
import { EventTypes } from "@/event-bus/eventTypes";

import { getTrip, getAllItems, markTripAsDone } from "@/api/packing-items.api";

import CategoryBlock from "@/components/packing-category-block/category-block.vue";
import AddModal from "@/components/add-modal/add-modal.vue";
import AddItemModal from "@/components/add-item-modal/add-item-modal.vue";
import AddCategoryModal from "@/components/add-category-modal/add-category-modal.vue";

interface CategoryI {
  categoryName: string;
  id: string;
  items: any[];
}

@Component({
  components: {
    "packing-category": CategoryBlock,
    "add-modal": AddModal,
    "add-item-modal": AddItemModal,
    "add-category-modal": AddCategoryModal,
    "b-button": BButton,
    "b-spinner": BSpinner
  },
  directives: { "b-modal": VBModal }
})
export default class PackingList extends Vue {
  private categories: CategoryI[] = [];
  private items: any[] = [];

  // trip data
  private tripName = "";
  private destenation = "";
  private fellowPassenger = "";
  private startDate: Date | null = null;
  private endDate: Date | null = null;
  private isPackingFinished: boolean | null = null;

  private markedItems: string[] = [];

  mounted() {
    const { params: { id } } = this.$route;

    this.getAllCategories();
    this.getTrip(id);

    EventBus.$on(EventTypes.ITEM_MARKED, (value: string) => {
      if (!this.markedItems.includes(value)) {
        this.markedItems.push(value);
      }

      if (PackingList.isListMarkingComplete(this.items, this.markedItems)) {
        alert("Lista wypełniona");
        this.markTripAsPackingFinished(id);
      }
    });

    EventBus.$on(EventTypes.ITEM_UNMARKED, (value: string) => {
      const index = this.markedItems.indexOf(value);
      this.markedItems.splice(index, 1);

      if (PackingList.isListMarkingComplete(this.items, this.markedItems)) {
        alert("Lista wypełniona");
        this.markTripAsPackingFinished(id);
      }
    });
  }

  private async getTrip(id: string): Promise<void> {
    const res: any = await getTrip(id);
    const { data } = res;
    console.log(data);

    if (res.status === 200) {
      this.tripName = data.name;
      this.destenation = data.destenation;
      this.fellowPassenger = data.fellowPassenger;
      this.startDate = new Date(data.tripStartDate.date);
      this.endDate = new Date(data.tripEndDate.date);
      this.isPackingFinished = data.isPackingFinished;
    }
  }

  private async getAllCategories(): Promise<void> {
    const res: any = await getAllItems();
    const { data } = res;
    this.categories = data;

    this.getAllItemsFromCategories();
  }

  public getAllItemsFromCategories() {
    const items: any[] = [];
    this.categories.map((category: CategoryI) => {
      items.push(...category.items);
    });
    this.items = items;
  }

  private async markTripAsPackingFinished(tripId: string): Promise<void> {
    const args = { id: tripId };
    const res = await markTripAsDone(args);
    console.log(res);
  }

  private static isListMarkingComplete(items: any[], markedItems: string[]): boolean {
    return items.length === markedItems.length;
  }
}
