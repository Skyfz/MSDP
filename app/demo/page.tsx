"use client"

import { Button } from "@nextui-org/button"
import { useState } from "react"

export default function DemoPage() {
  const [isLoading, setIsLoading] = useState(false)

  const sendWhatsAppMessage = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/whatsapp', {
        method: 'POST',
      })
      const data = await response.json()
      if (data.success) {
        alert('Message sent successfully!')
      } else {
        alert('Failed to send message')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error sending message')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">
        WhatsApp API Demo
      </h1>
      
      <div className="flex flex-col gap-4">
        <Button 
          color="primary" 
          size="lg"
          variant="shadow"
          onClick={sendWhatsAppMessage}
          isLoading={isLoading}
        >
          Send WhatsApp Message
        </Button>
        
        <Button 
          color="primary"
          size="lg"
          variant="shadow"
          onClick={() => console.log('Function 2 clicked')}
        >
          Function 2
        </Button>
        
        <Button 
          color="primary"
          size="lg"
          variant="shadow"
          onClick={() => console.log('Function 3 clicked')}
        >
          Function 3
        </Button>
      </div>
    </div>
  )
}