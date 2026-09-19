import { useEffect, useState } from 'react'
import { initialHistory, initialNotifications, services } from './data'
import { QueueContext } from './queueContext'
const read = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback } catch { return fallback } }

export function QueueProvider({ children }) {
  const [currentQueue, setCurrentQueue] = useState(() => read('queueless-current-queue', null))
  const [notifications, setNotifications] = useState(() => read('queueless-notifications', initialNotifications))
  const [history, setHistory] = useState(() => read('queueless-history', initialHistory))
  const [settings, setSettings] = useState(() => read('queueless-settings', { largeText: false, highContrast: false, reducedMotion: false, voice: true, spoken: false, queueAlerts: true, turnAlerts: true, appointmentAlerts: true, browser: false, language: 'English' }))
  const [adminQueue, setAdminQueue] = useState(() => read('queueless-admin-queue', [{ token: 'A-127', service: 'General Consultation', customer: 'Nisha Rao', wait: '18 min', status: 'Waiting' }, { token: 'A-128', service: 'General Consultation', customer: 'Arjun Shah', wait: '21 min', status: 'Waiting' }, { token: 'B-204', service: 'Bank Services', customer: 'Meera Iyer', wait: '12 min', status: 'Waiting' }, { token: 'C-091', service: 'Document Verification', customer: 'Ravi Kumar', wait: '42 min', status: 'Waiting' }]))
  useEffect(() => localStorage.setItem('queueless-current-queue', JSON.stringify(currentQueue)), [currentQueue])
  useEffect(() => localStorage.setItem('queueless-notifications', JSON.stringify(notifications)), [notifications])
  useEffect(() => localStorage.setItem('queueless-history', JSON.stringify(history)), [history])
  useEffect(() => { localStorage.setItem('queueless-settings', JSON.stringify(settings)); document.documentElement.classList.toggle('large-text', settings.largeText); document.documentElement.classList.toggle('high-contrast', settings.highContrast); document.documentElement.classList.toggle('reduced-motion', settings.reducedMotion) }, [settings])
  useEffect(() => localStorage.setItem('queueless-admin-queue', JSON.stringify(adminQueue)), [adminQueue])

  useEffect(() => {
    if (!currentQueue) return
    const handleBeforeUnload = () => {
      localStorage.setItem('queueless-current-queue', JSON.stringify({ ...currentQueue, lastSeenAt: Date.now() }))
    }
    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [currentQueue])

  const joinQueue = (serviceId, locationName, priority = 'General', people = 1) => {
    const service = services.find((item) => item.id === serviceId) || services[0]
    const token = `${service.tokenPrefix}-${String(Math.floor(Math.random() * 800) + 120).padStart(3, '0')}`
    const now = Date.now()
    const queue = {
      token,
      service: service.name,
      serviceId: service.id,
      location: locationName || service.location,
      peopleAhead: priority === 'General' ? service.queue : Math.max(1, service.queue - 2),
      currentServing: `${service.tokenPrefix}-121`,
      average: service.average,
      counters: service.counters,
      wait: service.wait,
      priority,
      people,
      joinedAt: new Date(now).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      joinedAtMs: now,
      lastSeenAt: now,
      status: 'Waiting',
      counter: null,
    }
    setCurrentQueue(queue); setNotifications((items) => [{ id: Date.now(), title: 'Queue joined successfully', text: `Your token ${token} is ready to track.`, category: 'Queue update', time: 'Just now', read: false }, ...items]); return queue
  }
  const leaveQueue = () => { if (!currentQueue) return; setHistory((items) => [{ id: `visit-${Date.now()}`, date: 'Today', service: currentQueue.service, location: currentQueue.location, token: currentQueue.token, waiting: `${currentQueue.wait} min`, serviceTime: '-', status: 'Cancelled' }, ...items]); setNotifications((items) => [{ id: Date.now(), title: 'Queue left', text: `Token ${currentQueue.token} has been cancelled.`, category: 'System', time: 'Just now', read: false }, ...items]); setCurrentQueue(null) }
  const requestBrowserPermission = async () => {
    if (!('Notification' in window)) return false
    if (Notification.permission === 'granted') return true
    if (Notification.permission === 'denied') return false
    const permission = await Notification.requestPermission()
    return permission === 'granted'
  }
  const updateSetting = (key, value) => setSettings((current) => ({ ...current, [key]: value }))
  const value = { currentQueue, setCurrentQueue, notifications, setNotifications, history, settings, updateSetting, joinQueue, leaveQueue, adminQueue, setAdminQueue, requestBrowserPermission }
  return <QueueContext.Provider value={value}>{children}</QueueContext.Provider>
}
