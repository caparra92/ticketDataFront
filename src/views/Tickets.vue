<template>
  <div class="tickets-container">
    <div class="tickets-search">
      <div class="search-input-container">
        <div class="form-search-container">
          <form
            class="form-search"
            autocomplete="off"
          >
            <div class="options-container">
              <div class="col-4 flex">
                <label class="label-option flex">
                  <span class="pr-3 mr-3">Client</span>
                  <div class="w-8 h-6 p-1 flex mr-2 shadow justify-center items-center">
                    <input
                      value="client"
                      type="checkbox"
                      class="hidden"
                      name="check"
                      ref="client"
                      @click='getValueCheck()'
                    />
                    <IconCheck class="hidden w-4 h-4 input-option" />
                  </div>
                </label>
              </div>
            </div>
            <div class="options-container">
              <div class="col-4 flex">
                <label class="label-option flex">
                  <span class="pr-3 mr-3">Issue</span>
                  <div class="w-8 h-6 p-1 flex mr-2 shadow justify-center items-center">
                    <input
                      value="issue"
                      type="checkbox"
                      class="hidden"
                      name="check"
                      v-model="filterOption"
                      @click='getValueCheck($event)'
                      ref="issue"
                    />
                    <IconCheck class="hidden w-4 h-4 input-option" />
                  </div>
                </label>
              </div>
            </div>
            <div class="col-12 flex">
              <div class="col-12 px-2">
                <input
                  type="search"
                  name="question"
                  id="question"
                  placeholder="Type search"
                  v-model="search"
                  class="input-search"
                />
                <div class="icon-search w-4" style="top: -1.595rem;left: 0.55rem;">
                  <svg
                    class="fill-current pointer-events-none w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </form>
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
            class="button button-pink"
            @click="edit(ticket._id)"
            title="New log"
          >
            <i class="fa fa-pencil"></i>
          </button>
        </td>
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
      filterOption: '',
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
        // let filterOption = this.getValueCheck() || "client";
        // ticket.filterOption = filterOption;
        // console.log(filterOption)
        // console.log(this.search)
        if(this.search != "") {
          return ticket.filterOption.toLowerCase().includes(this.search.toLowerCase());
        } else {
          return this.$store.getters.getTickets;
        }
        //al poner `${ticket}.${filterOption}`se concatena como texto y no toma la propiedad se deja client como hardcode
      });
    },
  },
  methods: {
    // getValueCheck(){
    //   let check = event.target;
    //   if(check.checked) {
    //     console.log(check.value)
    //     return check.value
    //   }
    // },
    getAll() {
      this.$store
        .dispatch("getAll")
        .then((tickets) => {
          this.tickets = tickets.data;
        })
        .catch((error) => {
          console.log(error);
          localStorage.removeItem("access_token");
        });
    },
    edit(id) {
      this.$router.push(`/dashboard/tickets/${id}`);
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
  width: calc(100% - 280px) !important;
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
  position: fixed;
  top: 100px;
  right: 15px;
  display: flex;
  width: 30%;
}

.form-search-container {
  display: flex;
  align-items: center;
}

.form-search {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  padding: .25rem;
  background-color: var(--grey);
}

.options-container {
  display: inline;
  margin-bottom: 1.25rem;
  margin-top: 0.75rem;
  align-items: center;
  width: 50%;
}

.hidden {
  display: none;
}

.input-option {
  pointer-events: none;
  color: var(--pink);
  font-size: var(--font_lg);
}

.options {
  display: inline;
  align-items: center;
  width: 50%;
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
  padding-left: 10px;
}

.label-option input:checked + svg {
    display: block !important;
}

.label-option div {
  background-color: var(--white);
}

.icon-search {
  position: relative;
  line-height: 1;
}

.icon-search svg {
  color: var(--purple);
}

.input-search {
  border: 1px solid var(--purple);
  margin-right: 10px;
  padding: 10px;
  padding-left: 1.5rem;
  border-radius: 3px;
  width: 100%;
}

@media (max-width: 900px) {
  .table-md {
    width: calc(100% - 80px) !important;
  }
}

@media (min-width: 901px) and (max-width: 1300px) {
  .table-md {
    width: calc(100% - 180px) !important;
  }
}
</style>