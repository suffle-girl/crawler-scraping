import { CheerioCrawler } from "crawlee";

const crawler = new CheerioCrawler({
  // This function will run on every page.
  // Among other things, it gives you access
  // to parsed HTML with the Cheerio $ function.
  requestHandler: async ({ $, request }) => {
    console.log("URL:", request.url);
    // Print the heading of each visited page.
    console.log("Title:", $("h1").text().trim());
  },
});

// Add the Sales category of Warehouse store to the queue of URLs
await crawler.addRequests([
  "https://warehouse-theme-metal.myshopify.com/collections/sales",
]);

await crawler.run();
