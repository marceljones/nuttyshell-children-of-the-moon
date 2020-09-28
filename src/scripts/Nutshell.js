import {TaskFormComponent} from "./tasks/TaskForm.js"
import {TaskListComponent} from "./tasks/TaskList.js"
import { EventEntryForm } from "./Events/EventForm.js"
import { EventList } from "./Events/EventList.js"
import { ArticleForm } from "./article/ArticleForm.js";
import { ArticleList } from "./article/ArticleList.js";
import { EventEntryForm } from "./Events/EventForm.js";
import { EventList } from "./Events/EventList.js";

export const Nutshell = () => {
    TaskListComponent()
    TaskFormComponent()
    // Render all your UI components here
    ArticleForm();
    ArticleList();
    EventList();
    EventEntryForm();
};
