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

export async function getHomeDifferences() {
  try {
    const differences = await client.fetch(`*[_type == "home-difference"]{
        _id,
        heading,
        subheading,
        content,
        "photoUrl": photo.asset->url
    }`);

    return { success: true, differences };
  } catch (error: any) {
    console.error("Error fetching home differences:", error);
    return { success: false, error: error.message };
  }
}

export async function getHomeClientResults() {
  try {
    const clientResults = await client.fetch(`*[_type == "home-clientResults"]{
      _id,
      heading1,
      heading2,
      description1,
      description2,
      name,
      "companyLogoUrl": company.asset->url,
      "imageUrl": image.asset->url,
      link
  }`);

    return { success: true, clientResults };
  } catch (error: any) {
    console.error("Error fetching home clientResults:", error);
    return { success: false, error: error.message };
  }
}

export async function getHomeStorybook() {
  try {
    const homeStorybook = await client.fetch(`*[_type == "home-storybook"]{
          _id,
          text1,
          text2,
          "image": image.asset->url
      }`);

    return { success: true, homeStorybook };
  } catch (error: any) {
    console.error("Error fetching home storybook:", error);
    return { success: false, error: error.message };
  }
}

export async function getHomeStroyTelling() {
  try {
    const storyTelling = await client.fetch(`*[_type == "home-storytelling"]{
          _id,
          heading,
          description,
          buttonText,
          buttonHref,
          "image": photo.asset->url
      }`);

    return { success: true, storyTelling };
  } catch (error: any) {
    console.error("Error fetching home storybook:", error);
    return { success: false, error: error.message };
  }
}

export async function getHomeConsultation() {
  try {
    const consultation = await client.fetch(`*[_type == "home-consultation"]{
            _id,
            index,
            heading,
            text,
            "image": image.asset->url
        }`);

    return { success: true, consultation };
  } catch (error: any) {
    console.error("Error fetching home storybook:", error);
    return { success: false, error: error.message };
  }
}
