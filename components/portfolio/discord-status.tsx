"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

type DiscordStatus = "online" | "idle" | "dnd" | "offline"

interface LanyardData {
  discord_status: DiscordStatus
  discord_user: {
    username: string
    avatar: string
    id: string
  }
  activities: Array<{
    name: string
    type: number
    state?: string
    details?: string
  }>
}

const statusColors: Record<DiscordStatus, string> = {
  online: "bg-green-500",
  idle: "bg-yellow-500",
  dnd: "bg-red-500",
  offline: "bg-gray-500",
}

const statusLabels: Record<DiscordStatus, string> = {
  online: "Online",
  idle: "Ausente",
  dnd: "Ocupado",
  offline: "Offline",
}

const DISCORD_USER_ID = "1061397602916126771"

export function DiscordStatus() {
  const [data, setData] = useState<LanyardData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_USER_ID}`)
        const json = await response.json()
        if (json.success) {
          setData(json.data)
        }
      } catch (error) {
        console.error("Failed to fetch Discord status:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchStatus()
    const interval = setInterval(fetchStatus, 30000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary animate-pulse">
        <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
        <span className="text-sm text-muted-foreground">Carregando...</span>
      </div>
    )
  }

  const status = data?.discord_status || "offline"
  const activity = data?.activities?.find((a) => a.type === 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary"
    >
      <span className={`w-2.5 h-2.5 rounded-full ${statusColors[status]} animate-pulse`} />
      <span className="text-sm text-muted-foreground">
        {activity ? `Jogando ${activity.name}` : statusLabels[status]}
      </span>
    </motion.div>
  )
}
