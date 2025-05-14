import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    const publicDir = path.join(process.cwd(), 'public')
    const files = fs.readdirSync(publicDir)
    
    // health가 포함된 이미지 파일만 필터링
    const healthImages = files.filter(file => 
      file.toLowerCase().includes('health') && 
      /\.(jpg|jpeg|png|gif)$/i.test(file)
    )

    // 이미지 경로 정렬
    const sortedImages = healthImages.sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)?.[0] || '0')
      const numB = parseInt(b.match(/\d+/)?.[0] || '0')
      return numA - numB
    })

    return NextResponse.json(sortedImages)
  } catch (error) {
    console.error('Error reading health images:', error)
    return NextResponse.json({ error: 'Failed to read images' }, { status: 500 })
  }
} 