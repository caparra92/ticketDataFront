<template>
  <div class="tickets-container">
    <table class="tickets-summary table-md">
      <tr>
        <th>Client</th>
        <th>Started</th>
        <th>Reported</th>
        <th>Ended</th>
        <th>Issue</th>
        <th colspan="2">Actions</th>
      </tr>
      <tr v-for="ticket in getTickets" :key="ticket._id">
        <td>{{ ticket.client }}</td>
        <td>{{ ticket.startTime | date }}</td>
        <td>{{ ticket.reportTime | date }}</td>
        <td>{{ ticket.endTime | date }}</td>
        <td>{{ ticket.issue }}</td>
        <td>
          <button
            class="button button-indigo"
            @click="details(ticket)"
            title="Details"
          >
            <i class="fa fa-eye"></i>
          </button>
        </td>
        <td>
          <button
            class="button button-danger"
            @click="remove(ticket._id)"
            title="Delete ticket"
          >
            <i class="fa fa-trash"></i>
          </button>
        </td>
      </tr>
    </table>
    <modal name="details" height="auto" :adaptive="true" :scrollable="true">
      <table class="tickets-summary">
        <tr>
          <td>Reported by</td>
          <td>{{ticket.reportedBy}}</td>
        </tr>
        <tr>
          <td>LOB</td>
          <td>{{ticket.lob}}</td>
        </tr>
        <tr>
          <td>Schedule</td>
          <td>{{ticket.schedule}}</td>
        </tr>
        <tr>
          <td>Client</td>
          <td>{{ticket.client}}</td>
        </tr>
        <tr>
          <td>Site</td>
          <td>{{ticket.site}}</td>
        </tr>
        <tr>
          <td>Platform</td>
          <td>{{ticket.platform}}</td>
        </tr>
        <tr>
          <td>Issue</td>
          <td>{{ticket.issue}}</td>
        </tr>
        <tr>
          <td>IP/Hostname</td>
          <td>{{ticket.ipHostname}}</td>
        </tr>
        <tr>
          <td>Extension</td>
          <td>{{ticket.extension}}</td>
        </tr>
        <tr>
          <td>Start time</td>
          <td>{{ticket.startTime | date}}</td>
        </tr>
        <tr>
          <td>Report time</td>
          <td>{{ticket.reportTime | date}}</td>
        </tr>
        <tr>
          <td>End Time</td>
          <td>{{ticket.endTime | date}}</td>
        </tr>
        <tr>
          <td>Impacted/Staffed</td>
          <td>{{ticket.impactedStaffed}}</td>
        </tr>
      </table>
      <p><strong>Logs</strong></p>
      <table>
        <tr v-for="logs in ticket.logs" :key="logs._id">
          <td><small>{{logs.time | date}}</small></td>
          <td><small>{{logs.content}}</small></td>
        </tr>
      </table>
    </modal>
  </div>
</template>

<script>
export default {
  name: "Tickets",
  data() {
    return {
      tickets: {},
      ticket: {}
    };
  },
  mounted() {
    this.getAll();
  },
  computed: {
    getTickets() {
      return this.$store.getters.getTickets;
    },
  },
  methods: {
    getAll() {
      this.$store
        .dispatch("getAll")
        .then((tickets) => {
          this.tickets = tickets.data;
          console.log(tickets);
        })
        .catch((error) => {
          console.log(error);
          localStorage.removeItem("access_token");
        });
    },
    remove(id) {
      //alert
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You will not be able to recover this ticket data!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, keep it",
        })
        .then((result) => {
          if (result.value) {
            this.$store
              .dispatch("remove", { id })
              .then((response) => {
                this.$swal.fire("Deleted!", response.data.message);
              })
              .catch((error) => {
                console.log(error);
              });
            // For more information about handling dismissals please visit
            // https://sweetalert2.github.io/#handling-dismissals
          } else if (result.dismiss === this.$swal.DismissReason.cancel) {
            this.$swal.fire("Cancelled", "Your ticket is safe :)", "error");
          }
        });
      //endAlert
    },
    details(ticket) {
      this.$modal.show(
        "details",
        {
          height: "auto"
        },
        {
          draggable: true
        }
      );
      this.ticket = ticket
    },
  },
};
</script>

<style>
.tickets-container {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: flex-end;
  align-items: center;
}

.table-md {
  width: 80% !important;
  margin: 0 25px !important;
}

.tickets-summary {
  width: 100%;
  margin: 0 0 1em 0;
  border-collapse: collapse;
  text-align: left;
}

.tickets-summary th,
tr,
td {
  border-bottom: 1px solid var(--purple);
  padding: 0.3em !important;
  width: auto;
  text-align: left;
}

.button {
  width: 50px;
  font-size: var(--font_lg);
}
</style>