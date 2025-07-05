export const Way_IN = {
    SPY: 'SPY',
    ALLIE: 'ALLIE',
    ATTACK: 'ATTACK'
} as const;

export type Way_IN = typeof Way_IN[keyof typeof Way_IN];