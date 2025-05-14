export async function getHealthImages() {
  try {
    // public 폴더의 이미지 목록을 가져옵니다
    const response = await fetch('/api/images/health')
    if (!response.ok) {
      throw new Error('Failed to fetch images')
    }
    const images = await response.json()
    return images
  } catch (error) {
    console.error('Error fetching health images:', error)
    return []
  }
} 