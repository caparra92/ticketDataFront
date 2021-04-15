<template>
  <div class="tickets-container">
    <table class="tickets-summary">
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
        <td>{{ ticket.startTime }}</td>
        <td>{{ ticket.reportTime }}</td>
        <td>{{ ticket.endTime }}</td>
        <td>{{ ticket.issue }}</td>
        <td>
          <button class="button button-warning">
            <i class="fa fa-edit"></i>
          </button>
        </td>
        <td>
          <button class="button button-danger" @click="remove(ticket._id)">
            <i class="fa fa-trash"></i>
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
    name: 'Tickets',
    data() {
        return {
            tickets: {}
        }
    },
    mounted() {
       this.getAll()
    },
    computed: {
        getTickets() {
            return this.$store.getters.getTickets;
        }
    },
    methods: {
        getAll() {
            this.$store.dispatch('getAll')
                .then(tickets => {
                    this.tickets = tickets.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        remove(id) {
            //alert
            this.$swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
            }).then((result) => {
            if (result.value) {
                this.$store.dispatch('remove',{id})
                .then(response => {
                    this.$swal.fire(
                    'Deleted!',
                    response.data.message
                    )
                })
                .catch(error => {
                    console.log(error)
                })
            // For more information about handling dismissals please visit
            // https://sweetalert2.github.io/#handling-dismissals
            } else if (result.dismiss === this.$swal.DismissReason.cancel) {
                this.$swal.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
                )
            }
            })
            //endAlert
        },
        showAlert() {
            
        }
    }
}
</script>

<style>
.tickets-summary {
  width: 75%;
  padding: 10px;
  margin: 20px 5px;
  display: table;
  position: absolute;
  left: 20%;
  top: 10%;
  border: 1px solid var(--purple);
}

.tickets-summary th,
td {
  text-align: center;
  border: 1px solid var(--purple);
  padding: 10px;
  width: auto;
}

.button {
  width: 50px;
  font-size: var(--font_lg);
}
</style>