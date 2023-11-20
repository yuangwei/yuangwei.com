import { getCollection } from "astro:content";

/** Note: this function filters out draft posts based on the environment */
export async function getAllPages() {
  return await getCollection("page");
}