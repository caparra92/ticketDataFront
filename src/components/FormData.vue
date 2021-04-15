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
    </form>
    <div class="form-button__container">
      <button-action name="Copy" icon="copy" background="button-blue"></button-action>
      <button-action name="Reset" icon="eraser" background="button-indigo"></button-action>
      <button-action name="Save" icon="save" background="button-purple" @clicked="create"></button-action>
    </div>
  </div>
</template>

<script>
import ButtonAction from './ButtonAction.vue';

export default {
    name: 'FormData',
    components: {
      ButtonAction
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
        startTime: new Date(),
        reportTime: new Date(),
        endTime: new Date(),
        impactedStaffed: ''
      }
    },
    methods: {
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