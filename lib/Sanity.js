import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "qymmk84l",
  dataset: "production",
  apiVersion: "2022-02-01",
  token:
    "skBrA1GKGcPzk3dv8g4NZ4vgxwCjvgvHylZBTsFcp34DXjRqJXw93eKujSWETssVUvmdy0nd2jsjigR0SPF3p1N2AWq2P9t6ZLyc4SNh3CGRu7o1TbXBsnxJhWJOI7xVpJ7VUhygkxI6i30wssQVIAijE7FdI8LxRxHpbO5fIn74gDEP1NkG",
  useCdn: false,
});
