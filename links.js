import { CheerioCrawler } from "crawlee";

const crawler = new CheerioCrawler({
  requestHandler: async ({ $, request, enqueueLinks }) => {
    console.log("URL:", request.url);
    console.log("Title:", $("h1").text().trim());

    // We only want to enqueue the URLs from the start URL
    if (request.label === "start-url") {
      // enqueueLinks will add all the links that match the provided selector
      await enqueueLinks({
        // The selector comes from our earlier code
        selector: "a.product-item__title",
      });
    }
  },
});

// Instead of using a string with URL, we are now using a request object to add more options.
await crawler.addRequests([
  {
    url: "https://warehouse-theme-metal.myshopify.com/collections/sales",
    // We label the Request to identify it in the requestHandler
    label: "start-url",
  },
]);

await crawler.run();
