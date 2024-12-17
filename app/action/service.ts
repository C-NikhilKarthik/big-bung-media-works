/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../../sanity/env";

const client = createClient({
  apiVersion,
  dataset,
  projectId,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

export async function getService(_id: string) {
  try {
    const service =
      await client.fetch(`*[_type == "service" && _id == "${_id}"]{
        mainTitle1,
        mainTitle2,
        description,
        "imageMain": imageMain.asset->url,
        sectionTitle1,
        sectionTitle2,
        sectionDescription,
        sectionCards[]{
            heading,
            description,
            "photo": photo.asset->url
        },
        section2Title1,
        section2Title2,
        images[]{
            "photo": asset->url
        },
        section3Title1,
        section3Title2,
        section3Description,
        "section3Image": section3Image.asset->url,
        section4[]{
            heading,
            index,
            description,
            "photo": photo.asset->url
        },
        "finalPhoto": finalPhoto.asset->url,
        finalTitle,
        finalDescription
    }`);

    return { success: true, service };
  } catch (error: any) {
    console.error("Error fetching service :", error);
    return { success: false, error: error.message };
  }
}
