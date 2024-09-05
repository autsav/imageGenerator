import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { prompt } = await request.json()

  // Simulate image generation delay
  await new Promise(resolve => setTimeout(resolve, 2000))

  // Return a placeholder image URL
  const imageUrl = `https://via.placeholder.com/512x512.png?text=${encodeURIComponent(prompt)}`

  return NextResponse.json({ image: imageUrl })
}