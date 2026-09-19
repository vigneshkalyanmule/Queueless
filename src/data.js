export const services = [
  { id: 'general', name: 'General Consultation', category: 'Healthcare', description: 'Walk-in medical guidance with a qualified practitioner.', location: 'CityCare Medical Center', wait: 18, queue: 6, counters: 2, average: 3, status: 'Available', tokenPrefix: 'A' },
  { id: 'doctor', name: 'Doctor Appointment', category: 'Healthcare', description: 'Scheduled consultations with clinic specialists.', location: 'CityCare Medical Center', wait: 8, queue: 2, counters: 3, average: 12, status: 'Available', tokenPrefix: 'D' },
  { id: 'student', name: 'Student Help Desk', category: 'Education', description: 'Academic records, forms, and student support.', location: 'Central Student Services', wait: 24, queue: 11, counters: 3, average: 4, status: 'Almost full', tokenPrefix: 'S' },
  { id: 'bank', name: 'Bank Services', category: 'Finance', description: 'Accounts, deposits, cards, and everyday banking.', location: 'Metro Bank - Main Branch', wait: 12, queue: 5, counters: 4, average: 5, status: 'Available', tokenPrefix: 'B' },
  { id: 'government', name: 'Government Services', category: 'Public services', description: 'Citizen certificates, applications, and support.', location: 'Citizen Service Center', wait: 42, queue: 19, counters: 3, average: 7, status: 'Almost full', tokenPrefix: 'C' },
  { id: 'support', name: 'Customer Support', category: 'Technology', description: 'In-person product and account assistance.', location: 'Tech Support Hub', wait: 6, queue: 2, counters: 2, average: 8, status: 'Available', tokenPrefix: 'T' },
]

export const locations = [
  { id: 'citycare', name: 'CityCare Medical Center', address: '24 Lakeview Road, Jubilee Hills', latitude: 17.4239, longitude: 78.4738, distance: '1.2 km', services: ['General Consultation', 'Doctor Appointment', 'Billing'], queue: 8, wait: 18, status: 'Open', counters: 5 },
  { id: 'student', name: 'Central Student Services', address: 'North Campus, Administration Block', latitude: 17.4457, longitude: 78.3489, distance: '2.8 km', services: ['Student Help Desk', 'Admissions', 'ID Card Services'], queue: 21, wait: 24, status: 'Open', counters: 6 },
  { id: 'metro', name: 'Metro Bank - Main Branch', address: '18 Market Street, Downtown', latitude: 17.3850, longitude: 78.4867, distance: '3.6 km', services: ['Bank Services', 'Document Verification'], queue: 5, wait: 12, status: 'Open', counters: 4 },
  { id: 'citizen', name: 'Citizen Service Center', address: 'Civic Plaza, Sector 4', latitude: 17.4065, longitude: 78.4772, distance: '5.1 km', services: ['Government Services', 'Document Verification'], queue: 19, wait: 42, status: 'Closing soon', counters: 3 },
]

export const initialNotifications = [
  { id: 1, title: 'Your turn is approaching', text: 'Token A-127 is now 3 positions away.', category: 'Turn approaching', time: '8 min ago', read: false },
  { id: 2, title: 'Queue update', text: 'Your estimated wait is now 18 minutes.', category: 'Queue update', time: '22 min ago', read: false },
  { id: 3, title: 'Welcome to QueueLess', text: 'You can manage all your visits and tokens here.', category: 'System', time: 'Today', read: true },
]

export const initialHistory = [
  { id: 'visit-1024', date: '18 Sep 2026', service: 'General Consultation', location: 'CityCare Medical Center', token: 'A-121', waiting: '14 min', serviceTime: '11 min', status: 'Completed' },
  { id: 'visit-1018', date: '04 Sep 2026', service: 'Bank Services', location: 'Metro Bank - Main Branch', token: 'B-204', waiting: '9 min', serviceTime: '18 min', status: 'Completed' },
  { id: 'visit-1002', date: '21 Aug 2026', service: 'Document Verification', location: 'Citizen Service Center', token: 'C-091', waiting: '31 min', serviceTime: '-', status: 'Cancelled' },
]

export const counters = [
  { id: 1, name: 'General', status: 'Active', service: 'General Consultation', token: 'A-121', average: '3 min' },
  { id: 2, name: 'Billing', status: 'Active', service: 'Bank Services', token: 'B-203', average: '5 min' },
  { id: 3, name: 'Verification', status: 'Idle', service: 'Document Verification', token: '-', average: '7 min' },
  { id: 4, name: 'Priority', status: 'Paused', service: 'Priority queue', token: 'P-018', average: '4 min' },
]
