<template>
  <section
    class="absolute z-20 w-full h-full flex justify-center items-center bg-indigo-100 bg-opacity-50"
  >
    <div
      class="h-screen md:h-auto w-full max-w-screen-md bg-white overflow-hidden shadow-md rounded-lg"
    >
      <div
        class="flex justify-between block pl-4 pr-2 pt-2 pb-1 text-sm font-medium leading-5 text-gray-700 bg-gray-100 border-b border-gray-200"
      >
        <h2>About</h2>
        <code>Open API Editor v0.1.0 (pre-release)</code>
        <button
          @click="cancel"
          class="px-2 rounded-lg font-medium leading-5 text-gray-600 hover:bg-gray-300"
        >
          Close
        </button>
      </div>
      <div class="p-2 sm:p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <section class="bg-gray-100 rounded-lg flex flex-col">
          <div class="flex justify-center">
            <img
              src="/thomas.jpg"
              alt="A photo of Thomas and his corgi, Winona."
              class="h-144 md:h-64 w-full object-cover object-top rounded-t-lg"
            />
          </div>
          <div class="p-4">
            <p class="mb-4 text-md text-gray-900">
              The Open API Editor was written by Thomas Eckert and his corgi,
              Winona.
            </p>
            <ul class="ml-4 list-disc">
              <li>
                <a
                  href="https://github.com/t-eckert/open-api-editor"
                  class="text-blue-600 hover:text-blue-700 hover:underline"
                  >View source code</a
                >
              </li>
              <li>
                <a
                  href="https://github.com/t-eckert/open-api-editor/issues/new/choose"
                  class="text-blue-600 hover:text-blue-700 hover:underline"
                  >Open an issue on GitHub</a
                >
              </li>
              <li>
                <a
                  href="mailto:thomas.james.eckert@gmail.com"
                  class="text-blue-600 hover:text-blue-700 hover:underline"
                  >Email Thomas</a
                >
              </li>
            </ul>
          </div>
        </section>
        <section class="h-full flex flex-col justify-start">
          <h4 class="mb-2 font-medium">Feedback</h4>
          <p class="mb-2 text-md text-gray-900">
            I'm always looking for ways to make this tool better or hear stories
            of how it helped people.
          </p>
          <form
            name="feedback"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="feedback" />
            <div class="mb-4 relative rounded-md shadow-sm">
              <textarea
                id="feedback-text"
                name="feedback-text"
                rows="8"
                class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Let me know what you think..."
                aria-describedby=""
              ></textarea>
            </div>
            <div class="mb-2 w-full flex justify-between items-center">
              <label
                for="feedback-email"
                class="block text-md font-medium leading-5 text-gray-700"
                >Email</label
              >
              <div class="block text-sm font-medium leading-5 text-gray-600">
                Optional
              </div>
            </div>
            <div class="mb-4 relative rounded-md shadow-sm">
              <input
                type="text"
                id="feedback-email"
                name="feedback-email"
                class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded leading-tight focus:outline-none focus:shadow-outline"
                placeholder="bill.posters@gmail.com"
                aria-describedby=""
                optional
              />
            </div>
            <button
              type="submit"
              class="px-3 py-2 rounded-lg block font-medium leading-5 text-gray-900 bg-indigo-200 hover:bg-indigo-300"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ui } from "@/state";

export default defineComponent({
  name: "About",

  methods: {
    submit(): void {
      ui.feedbackModal = "hidden";
    },
    cancel(): void {
      ui.feedbackModal = "hidden";
    }
  }
});
</script>