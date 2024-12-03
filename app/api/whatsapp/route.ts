import { NextResponse } from 'next/server'

const WHATSAPP_TOKEN = 'EAAYZCWu5SUXcBO4Bu9oFLTjMSA8K0g4ygwpO7VuOzjUK5Tsc1iZArESsUuWyJbrnY4ZBwyCZCoZBnavN6sS6ii2IHfY85bBFTbWBCVIZB9DfUCMekpjRcTcSbSB6hWj4KCCZARa5px3eugQS9IqfdQzDUoV19LeSfw33ZBiBkAaVcyQ3r3JdqmYRS1Ueh1ndkKlUsFtZAYB2ZAnTfC2jSsZB6EOdbLDINMZD'
const PHONE_NUMBER_ID = '475078755694086'

export async function POST() {
  try {
    const response = await fetch(
      `https://graph.facebook.com/v21.0/${PHONE_NUMBER_ID}/messages`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${WHATSAPP_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: "27728288471",
          type: "template",
          template: {
            name: "hello_world",
            language: {
              code: "en_US"
            }
          }
        }),
      }
    )

    const data = await response.json()
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('WhatsApp API Error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
