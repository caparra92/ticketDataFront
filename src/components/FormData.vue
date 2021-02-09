<template>
  <div class="form-container">
    <form>
      <div class="form-row">
        <label class="col-sm-3 col-form-label" for="lob">Reported by</label>
        <div class="col-sm-9">
          <input
            type="text"
            id="Reported By"
            name="Reported By"
            class="form-control text-input"
            placeholder="Reported by"
          />
        </div>
      </div>
      <div class="form-row">
        <label class="col-sm-3 col-form-label" for="LOB">LOB</label>
        <div class="col-sm-9">
          <input
            type="text"
            id="LOB"
            name="LOB"
            class="form-control text-input"
            placeholder="LOB"
          />
        </div>
      </div>
      <div class="form-row">
        <label class="col-sm-3 col-form-label" for="LOB">LOB Schedule: </label>
        <div class="col-sm-9">
          <input
            type="text"
            id="schedule"
            name="Schedule"
            class="form-control text-input"
            placeholder="Schedule"
          />
        </div>
      </div>
      <div class="form-row">
        <label class="col-sm-3 col-form-label" for="Client">Client</label>
        <div class="col-sm-9">
          <input
            type="text"
            id="Client"
            name="Client"
            class="form-control text-input"
            placeholder="Client"
          />
        </div>
      </div>
      <div class="form-row">
        <label class="col-sm-3 col-form-label" for="Site">Site</label>
        <div class="col-sm-9">
          <input
            type="text"
            id="Site"
            name="Site"
            class="form-control text-input"
            placeholder="Site"
          />
        </div>
      </div>
      <div class="form-row">
        <label class="col-sm-3 col-form-label" for="Platform">Platform</label>
        <div class="col-sm-9">
          <input
            type="text"
            id="Platform"
            name="Platform"
            class="form-control text-input"
            placeholder="Platform"
          />
        </div>
      </div>
      <div class="form-row">
        <label class="col-sm-3 col-form-label" for="Issue">Issue</label>
        <div class="col-sm-9">
          <textarea
            id="Issue"
            name="Issue"
            class="form-control text-input"
            placeholder="Issue"
          ></textarea>
        </div>
      </div>
      <div class="form-row">
        <label class="col-sm-3 col-form-label" for="IP/Hostname"
          >IP/Hostname</label
        >
        <div class="col-sm-9">
          <input
            type="text"
            id="IP/Hostname"
            name="IP/Hostname"
            class="form-control text-input"
            placeholder="IP/Hostname"
          />
        </div>
      </div>
      <div class="form-row">
        <label class="col-sm-3 col-form-label" for="Extension">Extension</label>
        <div class="col-sm-9">
          <input
            type="text"
            id="Extension"
            name="Extension"
            class="form-control text-input"
            placeholder="Extension"
          />
        </div>
      </div>
      <div class="form-row">
        <label class="col-sm-3 col-form-label" for="Start Time"
          >Start Time</label
        >
        <div class="col-sm-9">
          <input
            type="text"
            id="start"
            name="Start Time"
            class="form-control text-input"
            placeholder="Start Time"
          />
        </div>
      </div>
      <div class="form-row">
        <label class="col-sm-3 col-form-label" for="Report Time"
          >Report Time</label
        >
        <div class="col-sm-9">
          <input
            type="text"
            id="report"
            name="Report Time"
            class="form-control text-input"
            placeholder="Report Time"
          />
        </div>
      </div>
      <div class="form-row">
        <label class="col-sm-3 col-form-label" for="End Time">End Time</label>
        <div class="col-sm-9">
          <input
            type="text"
            id="end"
            name="End Time"
            class="form-control text-input"
            placeholder="End Time"
          />
        </div>
      </div>
      <div class="form-row">
        <label class="col-sm-3 col-form-label" for="Impacted/Staffed"
          >Impacted/Staffed</label
        >
        <div class="col-sm-9">
          <input
            type="text"
            id="Impacted/Staffed"
            name="Impacted/Staffed"
            class="form-control text-input"
            placeholder="Impacted/Staffed"
          />
        </div>
      </div>
      <div class="form-row">
        <label class="col-sm-3 col-form-label" for="result">Result</label>
        <div class="col-sm-9">
          <textarea id="result" name="result" class="form-control"></textarea>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
    name: 'FormData'
};
</script>

<style>
    
    .form-container {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
    }

    .form-container form {
        width: 500px;
        margin: auto;
    }

    .form-row {
        display: flex;
        justify-content: space-between;
    }
</style>