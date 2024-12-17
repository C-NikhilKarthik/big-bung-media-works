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

export async function getAboutDifference() {
  try {
    const differences = await client.fetch(`*[_type == "about-difference"]{
        _id,
        title,
        heading1,
        heading2,
        description,
        "image": image.asset->url
    }`);

    return { success: true, differences };
  } catch (error: any) {
    console.error("Error fetching about differences:", error);
    return { success: false, error: error.message };
  }
}

export async function getAboutStoryTeller() {
  try {
    const storyTeller = await client.fetch(`*[_type == "about-storyteller"]{
          _id,
          name,
          role,
          description,
          twitter,
          linkedin,
          dribble,
          "image": image.asset->url
      }`);

    return { success: true, storyTeller };
  } catch (error: any) {
    console.error("Error fetching about storyTeller:", error);
    return { success: false, error: error.message };
  }
}
