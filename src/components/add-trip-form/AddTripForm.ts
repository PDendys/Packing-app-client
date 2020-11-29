import { Component, Vue } from "vue-property-decorator";
import { BFormDatepicker } from "bootstrap-vue";
import { createTrip } from "@/api/packing-items.api";

@Component({
  components: {
    "b-form-datepicker": BFormDatepicker
  },
  directives: {}
})
export default class AddTripForm extends Vue {
  private name = "";
  private destination = "";
  private fellowPassenger = "";
  private startDate: Date | null = null;
  private endDate: Date | null = null;

  private async addTrip() {
    const args = {
      name: this.name,
      destination: this.destination,
      fellowPassenger: this.fellowPassenger,
      startDate: this.startDate,
      endDate: this.endDate
    };

    const { data, status } = await createTrip(args);
    if (status === 201) {
      const { id } = data.data;
      await this.$router.push({name: 'PackingList', params: { id }})
    }
  }
}
