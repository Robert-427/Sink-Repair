import { ServiceForm } from "./ServiceForm.js"
import { Requests } from "./Requests.js"
import { Completions } from "./Completions.js"

export const SinkRepair = () => {
    return `
        <h1>Maude and Merle's Sink Repair</h1>
        <section class="serviceForm">
            ${ServiceForm()}
        </section>

        <section class="serviceRequests">
            <h2 class="service_header">Service Requests</h2>
            ${Requests()}
            ${Completions()}
        </section>
    `
}
