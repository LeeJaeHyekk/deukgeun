"use client";

import { useState, useEffect } from "react";
import { Input } from "@/shared/ui/Input/input";
import { Button } from "@/shared/ui/Button/Location_Page_Button";
import { Card, CardContent } from "@/shared/ui/Card/card";
import { Progress } from "@/shared/ui/Progress/progress";
import { CheckCircle2, Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Mission = {
  id: number;
  text: string;
  done: boolean;
};

export default function MissionPage() {
  const [missions, setMissions] = useState<Mission[]>([]);
  const [input, setInput] = useState("");
  const [animatedXp, setAnimatedXp] = useState(0);
  const [showLevelUpModal, setShowLevelUpModal] = useState(false);
  const [completedXpFlash, setCompletedXpFlash] = useState<number[]>([]);

  const xpPerMission = 10;
  const totalXp = missions.filter((m) => m.done).length * xpPerMission;
  const level = Math.floor(totalXp / 100) + 1;
  const xpInCurrentLevel = totalXp % 100;

  const [lastLevel, setLastLevel] = useState(level);

  const addMission = () => {
    if (!input.trim()) return;
    setMissions([...missions, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };

  const toggleMission = (id: number) => {
    setMissions((prev) =>
      prev.map((m) => (m.id === id ? { ...m, done: !m.done } : m))
    );

    const target = missions.find((m) => m.id === id);
    if (target && !target.done) {
      setCompletedXpFlash((prev) => [...prev, id]);
      setTimeout(() => {
        setCompletedXpFlash((prev) => prev.filter((fid) => fid !== id));
      }, 1000);
    }
  };

  const animateXp = (target: number) => {
    const duration = 800;
    const frameRate = 30;
    const steps = duration / (1000 / frameRate);
    const increment = (target - animatedXp) / steps;

    let current = animatedXp;
    let count = 0;

    const interval = setInterval(() => {
      current += increment;
      count++;
      setAnimatedXp(Math.min(target, Math.round(current)));

      if (count >= steps) {
        clearInterval(interval);
        setAnimatedXp(target);
      }
    }, 1000 / frameRate);
  };

  useEffect(() => {
    animateXp(totalXp);
  }, [totalXp]);

  useEffect(() => {
    if (level > lastLevel) {
      setLastLevel(level);
      setShowLevelUpModal(true);
    }
  }, [level]);

  return (
    <div className="relative p-6 max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold">🏆 미션 & 챌린지</h1>
        <p className="text-muted-foreground text-sm">
          미션을 완료하고 레벨을 올려보세요!
        </p>
      </div>

      {/* 레벨 & 경험치 표시 */}
      <div className="bg-muted p-4 rounded-xl space-y-2">
        <div className="flex justify-between text-sm font-semibold">
          <span className="flex items-center gap-1">
            레벨 {level}
            {level > lastLevel && (
              <span className="ml-2 text-xs bg-yellow-400 text-black px-2 py-0.5 rounded-full animate-bounce">
                NEW!
              </span>
            )}
          </span>
          <span>{animatedXp % 100} / 100 XP</span>
        </div>
        <Progress value={animatedXp % 100} />
      </div>

      {/* 미션 추가 */}
      <div className="flex gap-2">
        <Input
          placeholder="새로운 미션을 입력하세요"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          onClick={addMission}
          className="bg-primary text-white hover:bg-primary/90 transition-colors"
        >
          <Plus className="text-black w-4 h-4 mr-1" />
        </Button>
      </div>

      {/* 미션 리스트 */}
      <div className="space-y-3">
        {missions.map((mission) => (
          <Card
            key={mission.id}
            onClick={() => toggleMission(mission.id)}
            className={`relative cursor-pointer transition-all hover:shadow-md ${
              mission.done ? "opacity-60 line-through" : ""
            }`}
          >
            <CardContent className="p-4 flex justify-between items-center">
              <span>{mission.text}</span>
              {mission.done && (
                <CheckCircle2 className="text-green-500 w-5 h-5" />
              )}
            </CardContent>

            {/* +10 XP 애니메이션 */}
            <AnimatePresence>
              {completedXpFlash.includes(mission.id) && (
                <motion.div
                  key="xp-flash"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: -20 }}
                  exit={{ opacity: 0, y: -30 }}
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 text-sm font-bold text-yellow-500 pointer-events-none"
                >
                  +10 XP
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        ))}
      </div>

      {/* 🎉 레벨업 모달 */}
      <AnimatePresence>
        {showLevelUpModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 text-center shadow-xl max-w-sm w-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                onClick={() => setShowLevelUpModal(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="text-2xl font-bold mb-2">🎉 레벨업!</h2>
              <p className="text-muted-foreground mb-4">
                축하합니다. 레벨 {level}에 도달했어요!
              </p>
              <Button onClick={() => setShowLevelUpModal(false)}>확인</Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
