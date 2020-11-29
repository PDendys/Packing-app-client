import { Component, Vue, Prop } from "vue-property-decorator";

import EventBus from "../../event-bus";
import { EventTypes } from "../../event-bus/eventTypes";

@Component({
  components: {}
})
export default class PackingItem extends Vue {
  @Prop()
  name: string | undefined;

  @Prop()
  id: string | undefined;

  isNeeded = false;
  isUnneeded = false;

  handleNeededClick(): void {
    if (this.isUnneeded) {
      this.isUnneeded = !this.isUnneeded;
    }
    this.isNeeded = !this.isNeeded;
    if (!this.isNeeded && !this.isUnneeded) {
      EventBus.$emit(EventTypes.ITEM_UNMARKED, this.name);
    } else {
      EventBus.$emit(EventTypes.ITEM_MARKED, this.name);
    }
  }

  handleUnneededClick(): void {
    if (this.isNeeded) {
      this.isNeeded = !this.isNeeded;
    }
    this.isUnneeded = !this.isUnneeded;
    if (!this.isNeeded && !this.isUnneeded) {
      EventBus.$emit(EventTypes.ITEM_UNMARKED, this.name);
    } else {
      EventBus.$emit(EventTypes.ITEM_MARKED, this.name);
    }
  }
}
