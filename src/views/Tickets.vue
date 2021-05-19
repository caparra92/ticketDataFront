<template>
  <div class="tickets-container">
    <div class="tickets-search">
      <div class="search-input-container">
        <div class="search-input-options">
          <div class="options">
            <div class="option-container">
              <label class="label-option">
                <span class="select-none pr-3 mr-3">Client</span>
                <div class="input-container w-8 h-6 p-1 mr-2">
                  <input
                    value="client"
                    type="checkbox"
                    class="hidden"
                    name="check"
                    v-model="filterOption"
                  />
                  <IconCheck class="hidden input-option" />
                </div>
              </label>
          </div>
          </div>
          <div class="option-container">
              <label class="label-option">
                <span class="select-none pr-3 mr-3">Issue</span>
                <div class="input-container w-8 h-6 p-1 mr-2">
                  <input
                    value="issue"
                    type="checkbox"
                    class="hidden"
                    name="check"
                    v-model="filterOption"
                  />
                  <IconCheck class="hidden input-option" />
                </div>
              </label>
          </div>
        </div>
        <div class="search-input text">
          <span class="icon-search"><i class="fa fa-search"></i></span>
          <input
            type="text"
            class="input-search"
            name="search"
            id="search"
            v-model="search"
          />
        </div>
      </div>
    </div>
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
          <td>{{ ticket.reportedBy }}</td>
        </tr>
        <tr>
          <td>LOB</td>
          <td>{{ ticket.lob }}</td>
        </tr>
        <tr>
          <td>Schedule</td>
          <td>{{ ticket.schedule }}</td>
        </tr>
        <tr>
          <td>Client</td>
          <td>{{ ticket.client }}</td>
        </tr>
        <tr>
          <td>Site</td>
          <td>{{ ticket.site }}</td>
        </tr>
        <tr>
          <td>Platform</td>
          <td>{{ ticket.platform }}</td>
        </tr>
        <tr>
          <td>Issue</td>
          <td>{{ ticket.issue }}</td>
        </tr>
        <tr>
          <td>IP/Hostname</td>
          <td>{{ ticket.ipHostname }}</td>
        </tr>
        <tr>
          <td>Extension</td>
          <td>{{ ticket.extension }}</td>
        </tr>
        <tr>
          <td>Start time</td>
          <td>{{ ticket.startTime | date }}</td>
        </tr>
        <tr>
          <td>Report time</td>
          <td>{{ ticket.reportTime | date }}</td>
        </tr>
        <tr>
          <td>End Time</td>
          <td>{{ ticket.endTime | date }}</td>
        </tr>
        <tr>
          <td>Impacted/Staffed</td>
          <td>{{ ticket.impactedStaffed }}</td>
        </tr>
      </table>
      <p><strong>Logs</strong></p>
      <table>
        <tr v-for="logs in ticket.logs" :key="logs._id">
          <td>
            <small>{{ logs.time | date }}</small>
          </td>
          <td>
            <small>{{ logs.content }}</small>
          </td>
        </tr>
      </table>
    </modal>
  </div>
</template>

<script>
import IconCheck from "../components/IconCheck.vue";

export default {
  name: "Tickets",
  components: {
    IconCheck,
  },
  data() {
    return {
      search: "",
      filterOption: 'client',
      tickets: {},
      ticket: {},
    };
  },
  mounted() {
    this.getAll();
  },
  computed: {
    getTickets() {
      return this.$store.getters.getTickets.filter((ticket) => {
        return `${ticket}.${this.filterOption}`.toLowerCase().includes(this.search.toLowerCase());
      });
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
          height: "auto",
        },
        {
          draggable: true,
        }
      );
      this.ticket = ticket;
    },
  },
};
</script>

<style>
.tickets-container {
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.tickets-search {
  position: relative;
  width: 100%;
  margin-bottom: 50px;
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
  align-self: flex-end;
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

.search-input-container {
  position: absolute;
  right: 15px;
  display: flex;
}

.search-input-options {
  padding: 10px;
}

.hidden {
  visibility: hidden;
}

.input-option {
  pointer-events: none;
  color: var(--indigo);
  width: 20px;
  height: 20px;
}

.search-input-options input {
  margin-left: 5px;
}

.options {
  display: inline;
  align-items: center;
  width: 50%;
}

.option-container {
  display: flex;
}

.input-container {
  background-color: var(--white);
  box-shadow: var(--shadow);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
  margin-right: 0.5rem;
  width: 2rem;
}

.label-option {
  cursor: pointer !important;
  display: flex;
}

.icon-search {
  position: absolute;
  line-height: 2;
  margin: 3px 5px;
}

.icon-search i {
  color: var(--purple);
}

.input-search {
  border: 1px solid var(--purple);
  margin-right: 10px;
  padding: 10px;
  padding-left: 20px;
  border-radius: 3px;
}
</style>