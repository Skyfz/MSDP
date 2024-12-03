import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'

// This is the token you'll put in the Facebook Developer Portal
const VERIFY_TOKEN = "MDSP_WHATSAPP_VERIFY_2024"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const mode = searchParams.get('hub.mode')
  const token = searchParams.get('hub.verify_token')
  const challenge = searchParams.get('hub.challenge')

  // Verify the webhook
  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    console.log('Webhook verified!')
    return new NextResponse(challenge, {
      status: 200,
      headers: { 'Content-Type': 'text/plain' }
    })
  }

  // Return 403 Forbidden if verify tokens do not match
  return new NextResponse('Forbidden', { status: 403 })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Check if this is a WhatsApp message
    if (body.object === 'whatsapp_business_account') {
      // Handle different types of messages
      for (const entry of body.entry) {
        for (const change of entry.changes) {
          if (change.value.messages) {
            for (const message of change.value.messages) {
              // Log the received message
              console.log('Received message:', {
                from: message.from,
                timestamp: message.timestamp,
                type: message.type,
                text: message.text?.body
              })

              // Here you can add your own logic to handle different types of messages
              // For example, store in database, trigger notifications, etc.
            }
          }
        }
      }

      return NextResponse.json({ status: 'ok' })
    }

    return NextResponse.json({ status: 'unknown_type' })
  } catch (error) {
    console.error('Webhook Error:', error)
    return NextResponse.json({ status: 'error', error: String(error) }, { status: 500 })
  }
}
