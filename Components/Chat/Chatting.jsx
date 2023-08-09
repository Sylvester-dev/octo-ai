import React from "react";

//INTERNAL IMPORT
import { SideBar, Chat, Help, History, Subscription, Setting } from "./index";
const Chatting = () => {
  return (
    <section class="chatting-wrapper pt-0">
      <SideBar />
      <div class="tab-content">
        <Chat />
        <History />
        <Subscription />
        <Help />
        <Setting />
      </div>
    </section>
  );
};

export default Chatting;