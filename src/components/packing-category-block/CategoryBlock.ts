import { Component, Vue, Prop } from "vue-property-decorator";
import PackingItem from "@/components/packing-item/packing-item.vue";

@Component({
  components: {
    "packing-item": PackingItem
  }
})
export default class CategoryBlock extends Vue {
  @Prop() private categoryName!: string;

  @Prop() private items: any;
}
