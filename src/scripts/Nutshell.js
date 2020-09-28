import { ArticleForm } from "./article/ArticleForm.js";
import { ArticleList } from "./article/ArticleList.js";
import { EventEntryForm } from "./Events/EventForm.js";
import { EventList } from "./Events/EventList.js";
import { messageForm } from "./messages/MessageForm.js";
import { messageListComponent } from "./messages/MessageList.js";

export const Nutshell = () => {
    // Render all your UI components here
    ArticleForm();
    ArticleList();
    EventList();
    EventEntryForm();
    messageForm();
    messageListComponent();
};
