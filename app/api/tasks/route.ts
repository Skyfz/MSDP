import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const dataFilePath = path.join(process.cwd(), 'data', 'tasks.json')

export async function GET() {
  try {
    const fileContent = await fs.readFile(dataFilePath, 'utf8')
    const data = JSON.parse(fileContent)
    return NextResponse.json(data.tasks)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read tasks' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const tasks = await request.json()
    await fs.writeFile(dataFilePath, JSON.stringify({ tasks }, null, 2))
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save tasks' }, { status: 500 })
  }
}
