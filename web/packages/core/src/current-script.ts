// This must be in global scope because `document.currentScript`
// works only while the script is initially being processed.
export let currentScriptURL = "";
try {
    if (
        document.currentScript !== undefined &&
        document.currentScript !== null &&
        "src" in document.currentScript &&
        document.currentScript.src !== ""
    ) {
        let src = document.currentScript.src;

        // CDNs allow omitting the filename. If it's omitted, append a slash to
        // prevent the last component from being dropped.
        if (!src.endsWith(".js") && !src.endsWith("/")) {
            src += "/";
        }

        currentScriptURL = new URL(".", src).href;
    }
} catch (e) {
    console.warn("Unable to get currentScript URL");
}

export const isExtension = new URL(currentScriptURL).protocol.includes(
    "extension"
);
