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

export async function getPortfolios() {
  try {
    const portfolio = await client.fetch(`*[_type == "portfolio"]{
        _id,
        description,
        link,
        tags,
        "image": photo.asset->url
    }`);

    return { success: true, portfolio };
  } catch (error: any) {
    console.error("Error fetching portfolios :", error);
    return { success: false, error: error.message };
  }
}
