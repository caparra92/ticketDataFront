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
            v-model="reportedBy"
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
            v-model="lob"
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
            v-model="schedule"
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
            v-model="client"
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
            v-model="site"
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
            v-model="platform"
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
            v-model="issue"
          ></textarea>
        </div>
      </div>
      <div class="form-row">
        <label class="form-label" for="IP/Hostname"
          >IP/Hostname</label
        >
        <div class="col-9">
          <input
            type="text"
            name="IP/Hostname"
            class="form-input"
            placeholder="IP/Hostname"
            v-model="ipHostname"
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
            v-model="extension"
          />
        </div>
      </div>
      <div class="form-row">
        <label class="form-label" for="Start Time"
          >Start Time</label
        >
        <div class="col-9">
          <input
            type="text"
            name="Start Time"
            class="form-input"
            placeholder="Start Time"
            v-model="startTime"
          />
        </div>
      </div>
      <div class="form-row">
        <label class="form-label" for="Report Time"
          >Report Time</label
        >
        <div class="col-9">
          <input
            type="text"
            name="Report Time"
            class="form-input"
            placeholder="Report Time"
            v-model="reportTime"
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
            v-model="endTime"
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
            v-model="impactedStaffed"
          />
        </div>
      </div>
      <div class="form-row">
        <label class="form-label" for="result">Result</label>
        <div class="col-9">
          <textarea id="result" name="result" class="form-input"></textarea>
        </div>
      </div>
      <h5 class="form-label">Logs</h5>
      <form-log/>
    </form>
    <div class="form-button__container">
      <button-action name="Copy" icon="copy" background="button-blue"></button-action>
      <button-action name="Reset" icon="eraser" background="button-indigo"></button-action>
      <button-action name="Save" icon="save" background="button-purple" @clicked="create"></button-action>
    </div>
    <div class="form-button__timezone">
      <h5>Select timezone</h5>
      <div class="form-button__timezone-container">
        <label for="brazil">Brazil</label>
        <input type="radio" name="timezone" value="brazil" checked @click="changeTimezone($event)">
      </div>
      <div class="form-button__timezone-container">
        <label for="portugal">Portugal</label>
        <input type="radio" name="timezone" value="portugal" @click="changeTimezone($event)">
      </div>
      <div class="form-button__timezone-container">
        <label for="colombia">Colombia</label>
        <input type="radio" name="timezone" value="colombia" @click="changeTimezone($event)">
      </div>
    </div>
  </div>
</template>

<script>
import ButtonAction from './ButtonAction.vue';
import FormLog from './FormLog.vue';

// let date = new Date();
// let time = `${this.calcTime('Brasilia','-3')}`;
// let year = date.getFullYear();
// let month = date.getMonth();
// let day = date.getDate();
// let now = month < 10 ? `${year}-${month + 1}-${day}` : `${year}-${month}-${day}`

export default {
    name: 'FormData',
    components: {
      ButtonAction,
      FormLog
    },
    data() {
      return {
        reportedBy: '',
        lob: '',
        schedule: '',
        client: '',
        site: '',
        platform: '',
        issue: '',
        ipHostname: '',
        extension: '',
        startTime: this.calcTime('-3'),
        reportTime: this.calcTime('-3'),
        endTime: this.calcTime('-3'),
        impactedStaffed: ''
      }
    },
      props: {
    calcTime: {
      type: Function,
      default (offset) {
        const d = new Date()
        const utc = d.getTime() + d.getTimezoneOffset() * 60000
        const nd = new Date(utc + 3600000 * offset)
        let month = nd.getMonth();
        month = month < 10 ? `0${month + 1}` : `${month}`;

        return (
          nd.getFullYear() +
          '-'+
          month +
          '-'+
          nd.getDate() +
          ' '+
          nd.getHours() +
          ':' +
          nd.getMinutes() +
          ':' +
          nd.getSeconds()
        )
      }
    }
  },
    methods: {
      changeTimezone(event) {
        let country = event.target.value
        if(country === 'brazil') {
          this.$store.dispatch('changeZone', '-3')
          this.startTime = this.calcTime('-3')
          this.reportTime = this.calcTime('-3')
          this.endTime = this.calcTime('-3')
        } else if(country === 'portugal') {
          this.$store.dispatch('changeZone', '+1')
          this.startTime = this.calcTime('+1')
          this.reportTime = this.calcTime('+1')
          this.endTime = this.calcTime('+1')
        } else {
          this.$store.dispatch('changeZone', '-5')
          this.startTime = this.calcTime('-5')
          this.reportTime = this.calcTime('-5')
          this.endTime = this.calcTime('-5')
        }
      },
      create() {
        this.$store
        .dispatch("create", {
          reportedBy: this.reportedBy,
          lob: this.lob,
          schedule: this.schedule,
          client: this.client,
          site: this.site,
          platform: this.platform,
          issue: this.issue,
          ipHostname: this.ipHostname,
          extension: this.extension,
          startTime: this.startTime,
          reportTime: this.reportTime,
          endTime: this.endTime,
          impactedStaffed: this.impactedStaffed
        })
        .then(response => {
          // this.$router.push({ name: "dashboard" });
          console.log(response);
          this.$refs.formCreate.reset();
          this.$refs.reportedBy.focus();
        })
        .catch(error => {
          console.log(error)
        })
      }
    }
};
</script>

<style>
    
    .form-button__container{
      display: flex;
      position: absolute;
      left: 60%;
      top: 20%;
      flex-direction: column;
      justify-content: space-between;
    }

    .form-button__timezone{
      display: flex;
      position: absolute;
      left: 60%;
      top: 75%;
      flex-direction: column;
      justify-content: space-between;
    }

    .form-button__timezone h5 {
      margin-bottom: 10px;
    }

    .form-button__timezone-container {
      margin: 5px;
    }

    .form-button__timezone-container input {
      margin-left: 7px;
    }

    .form-button {
      height: 100px;
      width: 200px;
      margin: 10px 0;
      font-size: var(--font_lg);
      text-align: center;
      border-radius: var(--border_radius);
      box-shadow: var(--shadow);
      outline: none;
      cursor: pointer;
    }
</style>