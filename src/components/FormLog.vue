<template>
  <div class="form-column">
    <div class="form-row" v-for="log in logs" :key="log.id">
      <div class="col-3">
        <input
          class="form-input"
          name="timeReport"
          ref="time"
          @focus="getTime($event)"
          v-model="time"
        />
      </div>
      <div class="col-7">
        <textarea type="text" class="form-input" name="reportNote" v-model="log.content"></textarea>
      </div>
    </div>
    <div class="col-2">
      <div class="form-row">
        <button class="button button-purple button-sm" @click.prevent="newLog"><i class="fa fa-plus"></i></button>
        <button class="button button-blue button-sm" @click.prevent="removeLog"><i class="fa fa-minus"></i></button>
        <button class="button button-indigo button-sm" @click.prevent="sendLog"><i class="fa fa-send"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormLog",
  data() {
    return {
      time: this.calcTime(this.$store.state.zone),
      logs: [
        { time: this.calcTime(this.$store.state.zone), content: "" },
        { time: this.calcTime(this.$store.state.zone), content: "" },
      ],
    };
  },
  props: {
    calcTime: {
      type: Function,
      default(offset) {
        const d = new Date();
        const utc = d.getTime() + d.getTimezoneOffset() * 60000;
        const nd = new Date(utc + 3600000 * offset);
        let month = nd.getMonth();
        month = month < 10 ? `0${month + 1}` : `${month}`;

        return (
          nd.getFullYear() +
          "-" +
          month +
          "-" +
          nd.getDate() +
          " " +
          nd.getHours() +
          ":" +
          nd.getMinutes() +
          ":" +
          nd.getSeconds()
        );
      },
    },
  },
  methods: {
    getTime(event) {
      let time = event.target;
      time.value = this.calcTime(this.$store.state.zone);
      time.disabled = true
    },
    newLog() {
      this.logs.push({
        time: this.calcTime(this.$store.state.zone),
        content: "",
      });
    },
    removeLog() {
        this.logs.pop();
    },
    sendLog() {
      this.$emit('sendLog',this.logs)
    }
  },
};
</script>

<style>
.form-column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.button-sm {
  width: 100% !important;
  margin-top: 5px;
  margin-left: 8px;
}
</style>