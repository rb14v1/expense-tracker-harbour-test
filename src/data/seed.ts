// Generated from the specification. Do not edit by hand.
//
// Starting records, applied by store.ts only when localStorage is empty. Seeding on every load
// would resurrect records the user deleted.

import type { Expense, Category } from '../types'

export const SEED = {
  expenses: [
    {
      "id": "client-dinner-in-boston",
      "title": "Client dinner in Boston",
      "amount": 142.5,
      "category": "Meals",
      "date": "2024-11-14",
      "note": "Dinner with Acme Corp team after Q4 kickoff",
      "reimbursed": true,
      "submittedBy": "Sarah Chen",
      "createdAt": "2026-01-01T00:00:00.000Z"
    },
    {
      "id": "figma-team-subscription",
      "title": "Figma team subscription",
      "amount": 540,
      "category": "Software",
      "date": "2024-11-10",
      "note": "Annual renewal for design team of 12",
      "reimbursed": true,
      "submittedBy": "Marcus Wright",
      "createdAt": "2026-01-01T00:00:00.000Z"
    },
    {
      "id": "uber-to-airport",
      "title": "Uber to airport",
      "amount": 38.75,
      "category": "Travel",
      "date": "2024-11-18",
      "note": "Conference travel to SF",
      "reimbursed": false,
      "submittedBy": "Priya Patel",
      "createdAt": "2026-01-01T00:00:00.000Z"
    },
    {
      "id": "flight-to-reactconf",
      "title": "Flight to ReactConf",
      "amount": 612,
      "category": "Travel",
      "date": "2024-11-05",
      "note": "Round trip JFK to SFO",
      "reimbursed": false,
      "submittedBy": "Priya Patel",
      "createdAt": "2026-01-01T00:00:00.000Z"
    },
    {
      "id": "standing-desk-mat",
      "title": "Standing desk mat",
      "amount": 79.99,
      "category": "Office Supplies",
      "date": "2024-10-28",
      "note": "Ergonomic upgrade for home office",
      "reimbursed": true,
      "submittedBy": "David Kim",
      "createdAt": "2026-01-01T00:00:00.000Z"
    },
    {
      "id": "advanced-typescript-course",
      "title": "Advanced TypeScript course",
      "amount": 199,
      "category": "Training",
      "date": "2024-11-02",
      "note": "Online course on Frontend Masters",
      "reimbursed": true,
      "submittedBy": "Sarah Chen",
      "createdAt": "2026-01-01T00:00:00.000Z"
    },
    {
      "id": "team-lunch",
      "title": "Team lunch",
      "amount": 87.4,
      "category": "Meals",
      "date": "2024-11-15",
      "note": "Sprint retro lunch for 6",
      "reimbursed": false,
      "submittedBy": "Marcus Wright",
      "createdAt": "2026-01-01T00:00:00.000Z"
    },
    {
      "id": "github-copilot-annual",
      "title": "GitHub Copilot annual",
      "amount": 100,
      "category": "Software",
      "date": "2024-10-20",
      "note": "Individual license",
      "reimbursed": true,
      "submittedBy": "David Kim",
      "createdAt": "2026-01-01T00:00:00.000Z"
    },
    {
      "id": "notebooks-and-pens",
      "title": "Notebooks and pens",
      "amount": 24.3,
      "category": "Office Supplies",
      "date": "2024-11-08",
      "note": "Restocked office supplies",
      "reimbursed": true,
      "submittedBy": "Jenna Ortiz",
      "createdAt": "2026-01-01T00:00:00.000Z"
    },
    {
      "id": "conference-ticket-reactconf",
      "title": "Conference ticket ReactConf",
      "amount": 899,
      "category": "Training",
      "date": "2024-10-15",
      "note": "Early bird registration",
      "reimbursed": false,
      "submittedBy": "Priya Patel",
      "createdAt": "2026-01-01T00:00:00.000Z"
    }
  ] as Expense[],
  categories: [
    {
      "id": "travel",
      "name": "Travel",
      "color": "#00c6c2",
      "budget": 5000,
      "createdAt": "2026-01-01T00:00:00.000Z"
    },
    {
      "id": "meals",
      "name": "Meals",
      "color": "#f59e0b",
      "budget": 1500,
      "createdAt": "2026-01-01T00:00:00.000Z"
    },
    {
      "id": "software",
      "name": "Software",
      "color": "#8b5cf6",
      "budget": 3000,
      "createdAt": "2026-01-01T00:00:00.000Z"
    },
    {
      "id": "office-supplies",
      "name": "Office Supplies",
      "color": "#10b981",
      "budget": 800,
      "createdAt": "2026-01-01T00:00:00.000Z"
    },
    {
      "id": "training",
      "name": "Training",
      "color": "#ef4444",
      "budget": 4000,
      "createdAt": "2026-01-01T00:00:00.000Z"
    },
    {
      "id": "other",
      "name": "Other",
      "color": "#6b7280",
      "budget": 500,
      "createdAt": "2026-01-01T00:00:00.000Z"
    }
  ] as Category[],
}
