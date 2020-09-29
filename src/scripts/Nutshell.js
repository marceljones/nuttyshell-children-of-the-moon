import { TaskFormComponent } from "./tasks/TaskForm.js";
import { TaskListComponent } from "./tasks/TaskList.js";
import { EventEntryForm } from "./Events/EventForm.js";
import { EventList } from "./Events/EventList.js";
import { ArticleForm } from "./article/ArticleForm.js";
import { ArticleList } from "./article/ArticleList.js";
import { messageListComponent } from "./messages/MessageList.js";
import { messageForm } from "./messages/MessageForm.js";

export const Nutshell = () => {
    // Render all your UI components here
    TaskListComponent();
    TaskFormComponent();
    ArticleForm();
    ArticleList();
    EventList();
    EventEntryForm();
    messageListComponent();
    messageForm();
};