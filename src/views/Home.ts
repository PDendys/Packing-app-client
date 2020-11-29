import { Component, Vue } from "vue-property-decorator";
import AddTripForm from "@/components/add-trip-form/add-trip-form.vue";

@Component({
  components: {
    "add-trip-form": AddTripForm
  }
})
export default class Home extends Vue {}
