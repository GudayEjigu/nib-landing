import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "h6ntob4i",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:"sk2qsrU3WouGSNGgPkuCSFlq2i9A466DXL31uU78wap4AnU2P18P0ZHIPKbWgQHFgznzP6vew9UMjpoU5ffUJKp77Fh3naUPnwpm3lESueVJSHkIuze9djODLC7jF0G4pKcPhwd8VGgkbjxlcQXFSn9S6lTU08Bt1l5eTAgX4hCeJPPdHA9a",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
