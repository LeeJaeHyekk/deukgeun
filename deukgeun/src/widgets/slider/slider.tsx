'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { getHealthImages } from '@/shared/lib/utils/getHealthImages'

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [slides, setSlides] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadImages = async () => {
      try {
        const images = await getHealthImages()
        setSlides(images)
      } catch (error) {
        console.error('Failed to load images:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadImages()
  }, [])

  useEffect(() => {
    if (slides.length === 0) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const prev = () => setCurrent((current - 1 + slides.length) % slides.length)
  const next = () => setCurrent((current + 1) % slides.length)
  const goToSlide = (index: number) => setCurrent(index)

  if (isLoading) {
    return <div className="w-full h-[600px] bg-gray-100 animate-pulse" />
  }

  if (slides.length === 0) {
    return (
      <div className="w-full h-[600px] bg-gray-100 flex items-center justify-center">
        No images found
      </div>
    )
  }

  return (
    <div className="relative w-full max-w-[1200px] h-[600px] mx-auto overflow-hidden">
      {/* 슬라이드 이미지 */}
      {slides.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={`/${src}`}
            alt={`slide-${index}`}
            fill
            className="object-cover"
            priority={index === current}
          />
        </div>
      ))}

      {/* 좌우 버튼 */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full z-20"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full z-20"
      >
        <ChevronRight />
      </button>

      {/* 인디케이터 점 */}
      <div className="absolute bottom-4 left-1/5 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-1.5 h-1.5 rounded-full cursor-pointer transition-colors duration-300 ${
              index === current ? 'bg-red-500' : 'bg-white/90'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
