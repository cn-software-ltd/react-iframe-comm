import React from "react";
import IframeComm from "../IframeComm";
import { storiesOf, action, linkTo } from "@kadira/storybook";
import { WithNotes } from "@kadira/storybook-addon-notes";
import {
    withKnobs,
    text,
    boolean,
    number,
    object
} from "@kadira/storybook-addon-knobs";

const stories = storiesOf("Iframe Communication", module);
stories.addDecorator(withKnobs);

stories.add("simple example", () => {
    const attributes = {
        src: "https://pbojinov.github.io/iframe-communication/iframe.html",
        // src: "http://127.0.0.1:8080/public/iframe.html",
        width: "100%",
        height: "175"
    };
    return (
        <span>
            <IframeComm
                attributes={object("attributes", attributes)}
                postMessageData={text("postMessageData", "cats")}
                handleReceiveMessage={action("handleReceiveMessage")}
                handleReady={action("handleOnReady")}
            />
        </span>
    );
});
