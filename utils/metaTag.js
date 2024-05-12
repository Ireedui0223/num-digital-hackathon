export function metaTag({ title, description, key, image }) {
  return {
    title: title || lang.appTitle,
    meta: [
      {
        hid: "description",
        name: "description",
        content: description || "",
      },
      {
        name: "key",
        content: key || "",
      },
      {
        property: "og:title",
        content: title || "",
      },
      {
        property: "og:description",
        content: description || "",
      },
      {
        property: "og:image",
        content: image || "https://i.ytimg.com/vi/oc_Sy1fq8ZA/hqdefault.jpg",
      },
      {
        name: "twitter:title",
        content: title || "",
      },
      {
        name: "twitter:description",
        content: description || "",
      },
      {
        name: "twitter:image",
        content: image || "https://i.ytimg.com/vi/oc_Sy1fq8ZA/hqdefault.jpg",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
