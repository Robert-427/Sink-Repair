import { getCompletions } from "./dataAccess.js";



export const Completions = () => {
    const completions = getCompletions()

    const completionString = (completion) => {
        return `<li class="list">${completion.description}
        <button class="completion__delete"
                    id="completion--${completion.id}">
                Delete
            </button>
            </li>`
    }
    let html = `
        <ul class="complete_list">
            ${completions.map(completionString).join("")
        }
    </ul>
    `
    return html
}
