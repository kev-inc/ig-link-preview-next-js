import axios from "axios"

export async function GET(request) {
  const {searchParams} = new URL(request.url)
  const url = searchParams.get('url') || ''
  if (url.startsWith('https://www.instagram.com/')) {
    const {data} = await axios.get(url)
    return new Response(data)
  } else {
    return new Response('Please provide an Instagram URL')
  }
}