<template>
  <div class="form-container">
    <form ref="formCreate">
      <div class="form-row">
        <label class="form-label" for="lob">Reported by</label>
        <div class="col-9">
          <input
            type="text"
            name="Reported By"
            class="form-input"
            placeholder="Reported by"
            v-model="ticketData.reportedBy"
            ref="reportedBy"
          />
        </div>
      </div>
      <div class="form-row">
        <label class="form-label" for="LOB">LOB</label>
        <div class="col-9">
          <input
            type="text"
            name="LOB"
            class="form-input"
            placeholder="LOB"
            v-model="ticketData.lob"
          />
        </div>
      </div>
      <div class="form-row">
        <label class="form-label" for="LOB">LOB Schedule: </label>
        <div class="col-9">
          <input
            type="text"
            name="Schedule"
            class="form-input"
            placeholder="Schedule"
            v-model="ticketData.schedule"
          />
        </div>
      </div>
      <div class="form-row">
        <label class="form-label" for="Client">Client</label>
        <div class="col-9">
          <input
            type="text"
            name="Client"
            class="form-input"
            placeholder="Client"
            v-model="ticketData.client"
          />
        </div>
      </div>
      <div class="form-row">
        <label class="form-label" for="Site">Site</label>
        <div class="col-9">
          <input
            type="text"
            name="Site"
            class="form-input"
            placeholder="Site"
            v-model="ticketData.site"
          />
        </div>
      </div>
      <div class="form-row">
        <label class="form-label" for="Platform">Platform</label>
        <div class="col-9">
          <input
            type="text"
            name="Platform"
            class="form-input"
            placeholder="Platform"
            v-model="ticketData.platform"
          />
        </div>
      </div>
      <div class="form-row">
        <label class="form-label" for="Issue">Issue</label>
        <div class="col-9">
          <textarea
            name="Issue"
            class="form-input"
            placeholder="Issue"
            v-model="ticketData.issue"
          ></textarea>
        </div>
      </div>
      <div class="form-row">
        <label class="form-label" for="IP/Hostname">IP/Hostname</label>
        <div class="col-9">
          <input
            type="text"
            name="IP/Hostname"
            class="form-input"
            placeholder="IP/Hostname"
            v-model="ticketData.ipHostname"
          />
        </div>
      </div>
      <div class="form-row">
        <label class="form-label" for="Extension">Extension</label>
        <div class="col-9">
          <input
            type="text"
            name="Extension"
            class="form-input"
            placeholder="Extension"
            v-model="ticketData.extension"
          />
        </div>
      </div>
      <div class="form-row">
        <label class="form-label" for="Start Time">Start Time</label>
        <div class="col-9">
          <input
            type="text"
            name="Start Time"
            class="form-input"
            placeholder="Start Time"
            v-model="ticketData.startTime"
          />
        </div>
      </div>
      <div class="form-row">
        <label class="form-label" for="Report Time">Report Time</label>
        <div class="col-9">
          <input
            type="text"
            name="Report Time"
            class="form-input"
            placeholder="Report Time"
            v-model="ticketData.reportTime"
          />
        </div>
      </div>
      <div class="form-row">
        <label class="form-label" for="End Time">End Time</label>
        <div class="col-9">
          <input
            type="text"
            name="End Time"
            class="form-input"
            placeholder="End Time"
            v-model="ticketData.endTime"
          />
        </div>
      </div>
      <div class="form-row">
        <label class="form-label" for="Impacted/Staffed"
          >Impacted/Staffed</label
        >
        <div class="col-9">
          <input
            type="text"
            name="Impacted/Staffed"
            class="form-input"
            placeholder="Impacted/Staffed"
            v-model="ticketData.impactedStaffed"
          />
        </div>
      </div>
      <div class="form-row">
        <label class="form-label" for="result">Result</label>
        <div class="col-9">
          <textarea ref="result" name="result" class="form-input"></textarea>
        </div>
      </div>
      <h5 class="form-label">Logs</h5>
      <form-log :logs="ticketData.logs"/>
    </form>
    <div class="form-button__container">
      <button-action
        name="Copy"
        icon="copy"
        background="button-blue"
        @clicked="copy"
      ></button-action>
      <button-action
        name="Reset"
        icon="eraser"
        background="button-indigo"
        @clicked="reset"
      ></button-action>
      <button-action
        name="Update"
        icon="edit"
        background="button-warning"
        @clicked="update(ticketData._id)"
      ></button-action>
    </div>
    <div class="form-button__timezone">
      <h5>Select timezone</h5>
      <div class="form-button__timezone-container">
        <label for="brazil">Brazil</label>
        <input
          type="radio"
          name="timezone"
          value="brazil"
          checked
          @click="changeTimezone($event)"
        />
      </div>
      <div class="form-button__timezone-container">
        <label for="portugal">Portugal</label>
        <input
          type="radio"
          name="timezone"
          value="portugal"
          @click="changeTimezone($event)"
        />
      </div>
      <div class="form-button__timezone-container">
        <label for="colombia">Colombia</label>
        <input
          type="radio"
          name="timezone"
          value="colombia"
          @click="changeTimezone($event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonAction from "./ButtonAction.vue";
import FormLog from "./FormLog.vue";

export default {
  name: "EditTicket",
  components: {
    ButtonAction,
    FormLog,
  },
  props: {
    calcTime: {
      type: Function,
      default(offset) {
        const d = new Date();
        const utc = d.getTime() + d.getTimezoneOffset() * 60000;
        const nd = new Date(utc + 3600000 * offset);
        let month = nd.getMonth();
        month = month < 10 ? `0${month+1}` : `${month+1}`;

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
  data() {
    return {
      ticketData: {}
    };
  },
  mounted() {
    this.edit();
  },
  methods: {
     edit() {
      let id = this.$route.params.id;
      console.log(id);
      this.$store
        .dispatch("getTicket", {id})
        .then((ticket) => {
          this.ticketData = ticket.data.ticket
          console.log(this.ticketData);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    changeTimezone(event) {
      let country = event.target.value;
      if (country === "brazil") {
        this.$store.dispatch("changeZone", "-3");
        this.ticketData.startTime = this.calcTime("-3");
        this.ticketData.reportTime = this.calcTime("-3");
        this.ticketData.endTime = this.calcTime("-3");
      } else if (country === "portugal") {
        this.$store.dispatch("changeZone", "0");
        this.ticketData.startTime = this.calcTime("0");
        this.ticketData.reportTime = this.calcTime("0");
        this.ticketData.endTime = this.calcTime("0");
      } else {
        this.$store.dispatch("changeZone", "-5");
        this.ticketData.startTime = this.calcTime("-5");
        this.ticketData.reportTime = this.calcTime("-5");
        this.ticketData.endTime = this.calcTime("-5");
      }
    },
    copy() {
      let titles = ['Reported by', 'LOB', 'LOB Schedule', 'Client', 'Site', 'Platform', 'Issue', 'IP/Hostname', 'Extension', 'Start Time', 'Report Time', 'End Time', 'Impacted/Staffed']
      let result = this.$refs.result
      let inputs = this.ticketData

      titles.forEach( (title, index) => {
        result.value += `${title}: ${Object.values(inputs)[index]}\n`
      })
      result.select();
      document.execCommand("Copy");
      this.$swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Copied to clipboard',
            showConfirmButton: false,
            timer: 1500
          });
    },
    update(id) {
      console.log(id)
      console.log(`este es es body ${this.ticketData.client}`)
      this.$store
        .dispatch("update", {
          id,
          reportedBy: this.ticketData.reportedBy,
          lob: this.ticketData.lob,
          schedule: this.ticketData.schedule,
          client: this.ticketData.client,
          site: this.ticketData.site,
          platform: this.ticketData.platform,
          issue: this.ticketData.issue,
          ipHostname: this.ticketData.ipHostname,
          extension: this.ticketData.extension,
          startTime: this.ticketData.startTime,
          reportTime: this.ticketData.reportTime,
          endTime: this.ticketData.endTime,
          impactedStaffed: this.ticketData.impactedStaffed,
          logs: this.ticketData.logs
        })
        .then((response) => {
          // this.$router.push({ name: "dashboard" });
          console.log(response)
          this.$swal.fire({
            position: 'top-end',
            icon: 'success',
            title: response.data.message,
            showConfirmButton: false,
            timer: 1500
          })
          this.reset();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    reset() {
      this.ticketData.reportedBy = "";
      this.ticketData.lob = "";
      this.ticketData.schedule = "";
      this.ticketData.client = "";
      this.ticketData.site = "";
      this.ticketData.platform = "";
      this.ticketData.issue = "";
      this.ticketData.ipHostname = "";
      this.ticketData.extension = "";
      this.ticketData.impactedStaffed = "";
      this.$refs.reportedBy.focus();
    },
    getLog(event) {
      this.logs = event;
    }
  }
}
</script>

<style>

</style>