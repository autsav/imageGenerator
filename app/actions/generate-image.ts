'use server'

import * as fal from "@fal-ai/serverless-client";

export async function generateImage(prompt: string) {
  try {
    const result = await fal.subscribe("fal-ai/flux/dev", {
      input: {
        prompt: prompt,
        image_size: "landscape_4_3",
        num_inference_steps: 28,
        guidance_scale: 3.5,
        num_images: 1,
        enable_safety_checker: true,
      },
    });

    if (result.images && result.images.length > 0) {
      return { image: result.images[0].url };
    } else {
      throw new Error("No image generated");
    }
  } catch (error) {
    console.error("Error generating image:", error);
    throw error;
  }
}