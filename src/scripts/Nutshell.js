import {TaskFormComponent} from "./tasks/TaskForm.js"
import {TaskListComponent} from "./tasks/TaskList.js"
import { EventEntryForm } from "./Events/EventForm.js"
import { EventList } from "./Events/EventList.js"
import { ArticleForm } from "./article/ArticleForm.js";
import { ArticleList } from "./article/ArticleList.js";
import { messageListComponent } from "./messages/MessageList.js";
import { messageForm } from "./messages/MessageForm.js";

export const Nutshell = () => {
    // debugger;
    // renderDom()
    TaskListComponent(),
    TaskFormComponent(),
    // Render all your UI components here
    ArticleForm(),
    ArticleList(),
    EventList(),
    EventEntryForm(),
    messageListComponent(),
    messageForm()
};

// const renderDom = () => {
    
//     const contentTarget = document.querySelector(".main")
//     contentTarget.innerHTML = `
//     <div class="main">
//             <section class="contentCard" id="messageCard">
//                 <h2>Messages</h2>
//                 <div class="messageIndiv" id="messageIndiv"></div>
//                 <div class="messageInput" id="messageInput"></div>
//             </section>
//             <section class="contentCard" id="articleCard">
//                 <h2>Articles</h2>
//                 <div class="article" id="article--list"></div>
//                 <div class="article" id="article--form"></div>
//             </section>
//             <section class="contentCard" id="friendCard"></section>
//             <section class="contentCard" id="taskCard">
//                 <h2>Tasks</h2>
//                 <div class="taskContent" id="taskForm"></div>
//                 <div class="taskContent" id="taskList"></div>
//             </section>
        
//             <section class="contentCard" id="weatherCard"></section>
//             <section class="contentCard" id="eventCard">
//                 <h2>Events</h2>
//                 <div class="eventContent" id="eventList"></div>
//                 <div class="eventContent" id="eventForm"></div>
//             </section>
//         </div>
//         `
// }