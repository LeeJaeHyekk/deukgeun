// app/location-search/page.tsx
"use client";

import { Input } from "@/shared/ui/Input/input";
import { Card, CardContent } from "@/shared/ui/Card/card";
import { Button } from "@/shared/ui/Button/Location_Page_Button";
import { MapPin } from "lucide-react";
import { useState } from "react";

const gyms = [
  { name: "위너핏휘트니스 화랑대역점", address: "서울 노원구 화랑로", distance: "0.2km" },
  { name: "피트니스 24/7", address: "서울 중랑구 면목로", distance: "1.1km" },
  { name: "더짐 퍼스널", address: "서울 노원구 공릉로", distance: "1.5km" },
];

export default function LocationSearchPage() {
  const [query, setQuery] = useState("");

  const filteredGyms = gyms.filter((gym) =>
    gym.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* 헤더 */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">내 주변 헬스장 찾기</h1>
        <p className="text-muted-foreground text-sm">위치 기반으로 가까운 헬스장을 확인하세요.</p>
      </div>

      {/* 검색창 */}
      <div className="flex items-center gap-2">
        <Input
          placeholder="헬스장 이름으로 검색..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="outline">
          <MapPin className="w-4 h-4 mr-1" />
          내 위치
        </Button>
      </div>

      {/* 지도 영역 */}
      <div className="w-full h-[400px] rounded-2xl bg-gray-200 shadow-inner flex items-center justify-center text-gray-500 text-sm">
        📍 지도 API가 여기에 들어갑니다 (예: Kakao, Naver, Google Maps)
      </div>

      {/* 헬스장 리스트 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredGyms.map((gym, index) => (
          <Card key={index}>
            <CardContent className="p-4 space-y-1">
              <h2 className="font-semibold text-lg">{gym.name}</h2>
              <p className="text-sm text-muted-foreground">{gym.address}</p>
              <p className="text-sm text-primary">{gym.distance} 거리</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
