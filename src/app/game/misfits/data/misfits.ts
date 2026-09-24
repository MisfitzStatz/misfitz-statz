import { Misfit } from "../types";

export const MISFITS: Misfit[] = [
  {
    id: "ray",
    name: "Ray",
    class: "Chaos Engine",
    description: "bad, untamed, aggressive",

    status: "released",

    stats: {
      hp: 7200,
      damage: 1000,
      speed: 3,
      reload: 0,
      range: 8,
    },

    abilities: {
      attack: "energy blasts - hold for more damage",
      ultimate: "Massive fire laser",
      ability: "Get infinite ammo, speed up, and damage buff for a few seconds. No cooldown.",
    },

    balanceChanges: [
      {
        version: "PA6",
        date: "25th Sep 2026",
        changes: [
          {
            type: "changed",
            stat: "attack",
            oldValue: "4 shots",
            newValue: "downable bar",
            description: "Downable bar instead of 4 shots",
          },
        ],
      },
      {
        version: "PLACEHOLDER",
        date: "PLACEHOLDER",
        changes: [
          {
            type: "increased",
            stat: "hp",
            oldValue: "PLACEHOLDER",
            newValue: "PLACEHOLDER",
            description: "PLACEHOLDER",
          },
        ],
      },
    ],

    image: "/misfitz/ray.png",

    accentColor: "#ff4545",
  },

  {
    id: "rush",
    name: "Rush",
    class: "Assasine",
    description: "fast skater and ninja",

    status: "released",

    stats: {
      hp: 7500,
      damage: 1050,
      speed: 4,
      reload: 0,
      range: 7,
    },

    abilities: {
      attack: "Throws ninja stars in a fan",
      ultimate: "Dash to a target and moves you through nearby targets. Marked targets take more damage.",
      ability: "Dash, mark hitted targets and increased speed.",
    },

    balanceChanges: [
      {
        version: "PA6",
        date: "25th Sep 2026",
        changes: [
          {
            type: "changed",
            stat: "attack",
            oldValue: "Dash to target",
            newValue: "Dash and mark nearby enemies",
            description: "Dash to a target and moves you through nearby targets. Marked targets take more damage.",
          },
        ],
      },
      {
        version: "PLACEHOLDER",
        date: "PLACEHOLDER",
        changes: [
          {
            type: "changed",
            stat: "attack",
            oldValue: "PLACEHOLDER",
            newValue: "PLACEHOLDER",
            description: "PLACEHOLDER",
          },
        ],
      },
    ],

    image: "/misfitz/rush.png",

    accentColor: "#f59e0b",
  },

  {
    id: "beat",
    name: "Beat",
    class: "Tank",
    description: "sick beats",

    status: "released",

    stats: {
      hp: 11000,
      damage: 900,
      speed: 3,
      reload: 0,
      range: 6,
    },

    abilities: {
      attack: "Sick beats",
      ultimate: "Throw a sound bomb that pulls enemies in and explodes",
      ability: "Spawns a knock back shield against enemies",
    },

    balanceChanges: [
      {
        version: "PA6",
        date: "25th Placeholder",
        changes: [
          {
            type: "changed",
            stat: "attack",
            oldValue: "pulling enemies to a center point",
            newValue: "sound bomb that pulls enemies in and explodes",
            description: "Throw a sound bomb that pulls enemies in and explodes",
          },
        ],
      },
      {
        version: "PA6",
        date: "25th Sep 2026",
        changes: [
          {
            type: "increased",
            stat: "attack",
            oldValue: "3",
            newValue: "6",
            description: "6 instead of 3 shots",
          },
        ],
      },
    ],

    image: "/misfitz/beat.png",

    accentColor: "#3b82f6",
  },

  {
    id: "gloss",
    name: "Gloss",
    class: "Healer",
    description: "perfect... idk.",

    status: "released",

    stats: {
      hp: 6500,
      damage: 1000,
      speed: 3,
      reload: 0,
      range: 9,
    },

    abilities: {
      attack: "Shots heals mates and hurts enemies",
      ultimate:
        "AOE Heal zone for friends, damage for enemies",
      ability: "Dash that heals a teammate and gives them a shield if they are downed.",
    },

    balanceChanges: [
      {
        version: "PA6",
        date: "25th Sep 2026",
        changes: [
          {
            type: "increased",
            stat: "attack",
            oldValue: "4",
            newValue: "8",
            description: "8 instead of 4 shots",
          },
        ],
      },
      {
        version: "PLACEHOLDER",
        date: "PLACEHOLDER",
        changes: [
          {
            type: "increased",
            stat: "range",
            oldValue: "PLACEHOLDER",
            newValue: "PLACEHOLDER",
            description: "PLACEHOLDER",
          },
        ],
      },
    ],

    image: "/misfitz/gloss.png",

    accentColor: "#ec4899",
  },

  {
    id: "shade",
    name: "Shade",
    class: "Sniper",
    description: "hot 7years old Misfit?!",

    status: "released",

    stats: {
      hp: 7600,
      damage: 2200,
      speed: 3,
      reload: 0,
      range: 11,
    },

    abilities: {
      attack: "Long range sniper shot.",
      ultimate: "Throwable ink Cloud. Enemies inside can't see you or your teammate and can't autoaim",
      ability: "Root targets for 2s. 12s cooldown.",
    },

    balanceChanges: [
      {
        version: "PA6",
        date: "26th Sep 2026",
        changes: [
          {
            type: "increased",
            stat: "attack",
            oldValue: "2",
            newValue: "3",
            description: "3 instead of 2",
          },
        ],
      },
      {
        version: "PA6",
        date: "25th Sep 2026",
        changes: [
          {
            type: "changed",
            stat: "attack",
            oldValue: "Ultimate: root enemies",
            newValue: "ink cloud",
            description: "Throwable ink Cloud. Enemies inside can't see you or your teammate and can't autoaim",
          },
        ],
      },
    ],

    image: "/misfitz/shade.png",

    accentColor: "#a855f7",
  },

  {
    id: "drip",
    name: "Drip",
    class: "Tank",
    description: "From a bean to a machine.",

    status: "released",

    stats: {
      hp: 10350,
      damage: 50,
      speed: 3,
      reload: 0,
      range: 7,
    },

    abilities: {
      attack: "Graffiti Spray that paints enemies. Shoot to spray constantly and deal more damage.",
      ultimate: "acid syrup dealing long-time damage and slow enemies down",
      ability: "Painted enemies explode in AOE damage. No cooldown.",
    },

    balanceChanges: [
      {
        version: "PLACEHOLDER",
        date: "PLACEHOLDER",
        changes: [
          {
            type: "changed",
            stat: "damage",
            oldValue: "PLACEHOLDER",
            newValue: "PLACEHOLDER",
            description: "PLACEHOLDER",
          },
        ],
      },
      {
        version: "PLACEHOLDER",
        date: "PLACEHOLDER",
        changes: [
          {
            type: "increased",
            stat: "hp",
            oldValue: "PLACEHOLDER",
            newValue: "PLACEHOLDER",
            description: "PLACEHOLDER",
          },
        ],
      },
    ],

    image: "/misfitz/drip.png",

    accentColor: "#22c55e",
  },

  {
    id: "fang",
    name: "Locked",
    class: "Soon",
    description: "From a bean to a machine.",

    status: "teaser",

    stats: {
      hp: 0,
      damage: 0,
      speed: 0,
      reload: 0,
      range: 0,
    },

    abilities: {
      attack: "PLACEHOLDER",
      ultimate: "PLACEHOLDER",
      ability: "PLACEHOLDER",
    },

    balanceChanges: [

    ],

    image: "/misfitz/drip.png",

    accentColor: "#22c55e",
  },
];